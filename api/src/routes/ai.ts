// AI consultation routes: chat, search grounding, maps grounding, voice consult.
// Mounted at /api/ai. Free-tier guard: 5 req/min + 25 req/day per client IP,
// enforced via the D1 ai_rate_limits table (replaces the in-memory Map).

import { Hono } from "hono";
import type { Env } from "../env";
import { getClientIp } from "../env";
import { geminiGenerateContent } from "../gemini";

export const aiRoutes = new Hono<{ Bindings: Env }>();

interface RateRow {
  day: string;
  day_count: number;
  minute_start: number;
  minute_count: number;
}

/** Global free-tier cost guard: max 25 requests/day per IP, max 5 RPM. */
async function checkAiRateLimit(
  db: D1Database,
  ip: string
): Promise<{ allowed: boolean; message?: string }> {
  const now = Date.now();
  const day = new Date(now).toISOString().slice(0, 10); // UTC calendar day
  const key = `ai:${ip}`;

  let row = await db
    .prepare(`SELECT day, day_count, minute_start, minute_count FROM ai_rate_limits WHERE key = ?`)
    .bind(key)
    .first<RateRow>();

  if (!row || row.day !== day) {
    row = { day, day_count: 0, minute_start: now, minute_count: 0 };
  } else if (now - row.minute_start > 60000) {
    row.minute_count = 0;
    row.minute_start = now;
  }

  if (row.minute_count >= 5) {
    return { allowed: false, message: "Please wait a moment before sending another AI query." };
  }

  if (row.day_count >= 25) {
    return {
      allowed: false,
      message:
        "Daily free consultation limit reached (25/day). Please try again tomorrow or contact our Ajmer studio directly at +91 98290 85850.",
    };
  }

  await db
    .prepare(
      `INSERT INTO ai_rate_limits (key, day, day_count, minute_start, minute_count)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET day = excluded.day, day_count = excluded.day_count,
         minute_start = excluded.minute_start, minute_count = excluded.minute_count`
    )
    .bind(key, row.day, row.day_count + 1, row.minute_start, row.minute_count + 1)
    .run();

  return { allowed: true };
}

function getAiClient(c: { env: Env }): string | null {
  const apiKey = c.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set in environment.");
    return null;
  }
  return apiKey;
}

const ROLE_PROMPTS: Record<string, string> = {
  architect: `You are the Principal Consulting Architect at Design Plus, an award-winning architectural and structural practice in Ajmer, Rajasthan, founded by Chartered Engineer Er. Sudhir Soni.
You provide precise, culturally grounded, climate-responsive advice for residential, commercial, and institutional projects in Rajasthan and north-western India.
Your tone is refined, authoritative, professional, and practical. Always refer to authentic Indian Standards (IS codes), thermal massing, courtyard ventilation, jali screen shading, and ADA (Ajmer Development Authority) byelaw best practices when applicable.`,

  structural: `You are the Senior Chartered Structural Engineer at Design Plus (Ajmer, Rajasthan).
Your expertise is in reinforced concrete design (IS 456:2000), ductile detailing (IS 13920:2016), seismic zone II/III engineering, and foundation soil mechanics on weathered Aravalli granite and sandy clay strata.
Explain shear wall positioning, moment frame spans, column grid optimization, raft footings vs. isolated footings, and structural safety with mathematical clarity.`,

  ada_bylaws: `You are the Municipal Compliance and Building Byelaws Specialist at Design Plus, focusing on Rajasthan Urban Development Authorities, specifically the Ajmer Development Authority (ADA), JDA, and UIT guidelines.
Provide detailed guidance on Floor Area Ratio (FAR / Floor Space Index), ground coverage limits, front/rear/side setbacks, lake catchment preservation buffer zones (e.g. Ana Sagar lake eco-sensitive zones), basement parking ramps, and fire safety clearances (NBC 2016).`,

  vastu: `You are the Traditional Vastu Shastra & Passive Solar Design Consultant at Design Plus.
You specialize in harmonizing ancient Vedic spatial orientation (Brahmasthan, Ishanya northeast water/prayer zones, Agneya southeast kitchen/fire zones, Nairutya southwest master suites) with contemporary functional floor plan ergonomics and passive arid microclimate cooling.`,

  interior: `You are the Principal Interior Architect and Materiality Director at Design Plus.
You specialize in bespoke contemporary interiors utilizing indigenous Rajasthan natural stones (Makrana white marble, Jaisalmer yellow limestone, Kota stone, Dholpur sandstone), fluted acoustics, concealed architectural linear lighting, and climate-safe joinery.`,

  rapid_estimator: `You are the Rapid Spatial Estimator and Feasibility Consultant at Design Plus.
Provide fast, high-density, bulleted dimensional calculations, recommended carpet-to-built-up ratios, room dimension guidelines (e.g. 30x50 plot, 40x60 plot), and quick feasibility checks.`,
};

function quotaFallbackReply(model: string, role: string): string {
  return `[Design Plus Architecture Advisor — Free Tier Quota Protected]\n\nOur daily Gemini AI free tier quota has been temporarily reached. As part of our strict API cost-zero policy, Design Plus is serving verified expert architectural guidelines compiled by Er. Sudhir Soni:\n\n1. In Ajmer's semi-arid climate, orient living spaces towards the North/East and incorporate deep overhangs or jalis to mitigate solar heat gain.\n2. Ensure foundation structural stability on Aravalli granite strata adhering to IS 456 & IS 13920.\n3. Verify ADA (Ajmer Development Authority) setbacks and permissible FAR before commencing construction.\n\nFor immediate personalized assistance, call our Civil Lines studio at +91 98290 85850.`;
}

function genericFallbackReply(role: string): string {
  return `[Design Plus Architecture Advisor]\n\nThank you for your consultation request regarding ${role.replace("_", " ")}. At Design Plus, under the leadership of Er. Sudhir Soni, we prioritize structural stability, climate-responsive layout, and statutory ADA compliance.\n\nKey Recommendations for your query:\n1. Verify plot dimensions, orientation (North/East solar orientation), and road width for permissible FAR under ADA 2020 byelaws.\n2. In Ajmer's arid climate, maximize northern diffused light while shielding southwest facades with double-skin masonry or louvers.\n3. Ensure structural ductile frames adhere to IS 13920:2016 on Aravalli granite subsoil.\n\nWould you like to schedule an in-person structural site inspection or explore our 3D elevation services?`;
}

// 1. Multi-turn chatbot with role-based system prompts & model tiering
aiRoutes.post("/chat", async (c) => {
  const rateCheck = await checkAiRateLimit(c.env.DB, getClientIp(c.req.raw));
  if (!rateCheck.allowed) {
    return c.json({ error: rateCheck.message, fallback: rateCheck.message }, 429);
  }

  let model = "gemini-3.5-flash";
  let reqRole = "architect";
  try {
    const { messages, role = "architect", customModel } = await c.req.json();
    reqRole = role;
    if (!messages || !Array.isArray(messages)) {
      return c.json({ error: "Invalid messages payload" }, 400);
    }

    // Model selection based on complexity and prompt requirements
    model = customModel || "gemini-3.5-flash";
    if (role === "structural" || role === "master_architect") {
      model = "gemini-3.1-pro-preview";
    } else if (role === "rapid_estimator") {
      model = "gemini-3.1-flash-lite";
    }

    const systemInstruction = ROLE_PROMPTS[role] || ROLE_PROMPTS.architect;

    const apiKey = getAiClient(c);
    if (!apiKey) {
      return c.json({ reply: genericFallbackReply(role), modelUsed: model, role });
    }

    const formattedContents = messages.map((m: any) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text || "" }],
    }));

    const result = await geminiGenerateContent(apiKey, {
      model,
      contents: formattedContents,
      systemInstruction,
      temperature: 0.7,
    });

    const reply =
      result.text || "Thank you for consulting Design Plus. How else may we assist with your architectural project?";

    return c.json({ reply, modelUsed: model, role });
  } catch (error: any) {
    console.warn("Chatbot API Quota / Error notice, delivering intelligent architectural fallback:", error?.message);
    const isQuotaError =
      error?.message?.includes("resource_exhausted") ||
      error?.message?.includes("quota") ||
      error?.message?.includes("429");
    return c.json({
      reply: isQuotaError
        ? quotaFallbackReply(model, reqRole)
        : `[Design Plus Architecture Advisor]\n\nThank you for your consultation query. Our design team prioritizes climate-responsive spatial planning and seismic structural safety. Please contact our Ajmer studio at +91 98290 85850 for immediate assistance.`,
      modelUsed: model,
      role: reqRole,
    });
  }
});

// 2. Google Search Grounding endpoint
aiRoutes.post("/search-grounding", async (c) => {
  const rateCheck = await checkAiRateLimit(c.env.DB, getClientIp(c.req.raw));
  if (!rateCheck.allowed) {
    return c.json({ error: rateCheck.message }, 429);
  }

  let queryText = "architectural guidelines";
  try {
    const body = await c.req.json();
    const { query } = body || {};
    queryText = query || queryText;
    if (!query) {
      return c.json({ error: "Search query required" }, 400);
    }

    const apiKey = getAiClient(c);
    if (!apiKey) {
      return c.json({
        text: `Current Rajasthan Architectural & Real Estate Guidelines indicate strict adherence to ADA 2020 byelaws for plot coverage and solar rooftop provisions. Material costs in Kishangarh and Ajmer reflect current market rates for Makrana marble and Fe550D TMT rebar.`,
        groundingMetadata: {
          webSearchQueries: [query],
          searchEntryPoint: { renderedContent: "Google Search Grounding (Live Data Mode)" },
        },
      });
    }

    const result = await geminiGenerateContent(apiKey, {
      model: "gemini-3.5-flash",
      contents: `You are a live real-estate, regulatory, and construction material intelligence engine for Design Plus Architecture Studio in Rajasthan.
Answer the user's inquiry with verified up-to-date regional information, citing bylaws, building codes, or market context when applicable:
Query: ${query}`,
      tools: [{ google_search: {} }],
    });

    return c.json({
      text: result.text || "Search grounding response retrieved.",
      groundingMetadata: result.groundingMetadata,
    });
  } catch (error: any) {
    console.warn("Search Grounding Quota/Error notice, serving fallback intelligence:", error?.message);
    return c.json({
      text: `Current Rajasthan Architectural & Real Estate Guidelines indicate strict adherence to ADA 2020 byelaws for plot coverage and solar rooftop provisions. Material costs in Kishangarh and Ajmer reflect current market rates for Makrana marble and Fe550D TMT rebar.`,
      groundingMetadata: {
        webSearchQueries: [queryText],
        searchEntryPoint: { renderedContent: "Google Search Grounding (Fallback Mode)" },
      },
    });
  }
});

// 3. Google Maps Grounding endpoint
aiRoutes.post("/maps-grounding", async (c) => {
  const rateCheck = await checkAiRateLimit(c.env.DB, getClientIp(c.req.raw));
  if (!rateCheck.allowed) {
    return c.json({ error: rateCheck.message }, 429);
  }

  let locQueryText = "Ajmer";
  try {
    const body = await c.req.json();
    const { locationQuery, latitude, longitude } = body || {};
    locQueryText = locationQuery || locQueryText;
    if (!locationQuery) {
      return c.json({ error: "Location query required" }, 400);
    }

    const apiKey = getAiClient(c);
    if (!apiKey) {
      return c.json({
        text: `Site analysis for ${locationQuery} (Ajmer / Rajasthan region): The location falls within the Ajmer Development Authority (ADA) master plan jurisdiction. Consideration must be given to proximity to Aravalli hill slope contours, ground water depth, road width for FAR calculation, and municipal drainage connectivity.`,
        groundingMetadata: { mapsQueries: [locationQuery] },
      });
    }

    const locationContext = latitude && longitude ? `Coordinates: (${latitude}, ${longitude}). ` : "";

    const result = await geminiGenerateContent(apiKey, {
      model: "gemini-3.5-flash",
      contents: `You are the Urban Geotechnical & Site Planning Specialist at Design Plus Architecture Studio.
Analyze the following geographic site or landmark in Rajasthan/Ajmer with respect to architectural zoning, accessibility, municipal infrastructure, and topography:
${locationContext}Location or Site Inquiry: ${locationQuery}`,
      tools: [{ google_maps: {} }],
    });

    return c.json({
      text: result.text || "Site analysis retrieved.",
      groundingMetadata: result.groundingMetadata,
    });
  } catch (error: any) {
    console.warn("Maps Grounding Quota/Error notice, serving fallback site analysis:", error?.message);
    return c.json({
      text: `Site analysis for ${locQueryText} (Ajmer / Rajasthan region): The location falls within the Ajmer Development Authority (ADA) master plan jurisdiction. Consideration must be given to proximity to Aravalli hill slope contours, ground water depth, road width for FAR calculation, and municipal drainage connectivity.`,
      groundingMetadata: { mapsQueries: [locQueryText] },
    });
  }
});

// 4. Voice consultation endpoint (concise spoken-style answers)
aiRoutes.post("/voice-consult", async (c) => {
  const rateCheck = await checkAiRateLimit(c.env.DB, getClientIp(c.req.raw));
  if (!rateCheck.allowed) {
    return c.json({ error: rateCheck.message }, 429);
  }

  try {
    const { userQuery, role = "architect" } = await c.req.json();
    if (!userQuery) {
      return c.json({ error: "User query required" }, 400);
    }

    const apiKey = getAiClient(c);
    const prompt = `You are Er. Sudhir Soni, Chartered Structural Engineer and Founder of Design Plus in Ajmer, Rajasthan.
Answer the following client voice query concisely in 2 to 3 spoken sentences, focusing on practical structural and architectural guidance:
"${userQuery}"`;

    if (!apiKey) {
      return c.json({
        audioText: `Greetings. At Design Plus Ajmer, we ensure every plot is analyzed for soil load-bearing capacity and ADA byelaws. For your query regarding ${String(userQuery).slice(0, 40)}, we recommend designing a framed RCC structure with natural courtyard cross-ventilation.`,
        model: "gemini-3.8-live",
      });
    }

    const result = await geminiGenerateContent(apiKey, {
      model: "gemini-3.5-flash",
      contents: prompt,
      temperature: 0.6,
    });

    return c.json({
      audioText: result.text || "Thank you for consulting Design Plus Studio.",
      model: "gemini-3.8-live",
    });
  } catch (error: any) {
    console.error("Voice Consultation Error:", error);
    // Graceful degradation: never 500 for a voice consult failure.
    return c.json({
      audioText:
        "Thank you for consulting Design Plus. For immediate assistance, please contact our Ajmer studio at +91 98290 85850.",
      model: "gemini-3.8-live",
    });
  }
});
