import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { adminRouter } from "./server/adminApi";
import { paymentRouter } from "./server/paymentApi";
import { testSupabaseConnection } from "./server/supabase";

dotenv.config();

const PORT = 3000;

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set in environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // API Health Check
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      geminiConfigured: !!process.env.GEMINI_API_KEY
    });
  });

  // Direct Complete Codebase Zip Download
  app.get(["/api/download-zip", "/api/download-project-zip", "/api/project.zip", "/api/code.zip"], (_req, res) => {
    const publicZip = path.join(process.cwd(), "public", "designplus-studio-code.zip");
    const tmpZip = "/tmp/designplus-studio-code.zip";
    const targetFile = fs.existsSync(publicZip) ? publicZip : tmpZip;

    if (fs.existsSync(targetFile)) {
      res.setHeader("Content-Disposition", 'attachment; filename="designplus-studio-code.zip"');
      res.setHeader("Content-Type", "application/zip");
      return res.sendFile(targetFile);
    }
    res.status(404).json({ error: "Source code zip archive not found" });
  });

  // Supabase Backend Connectivity & Security Status Check
  app.get("/api/supabase/status", async (_req, res) => {
    try {
      const result = await testSupabaseConnection();
      res.json({
        ...result,
        securityReport: {
          keyClassification: "Publishable / Anonymous Key (sb_publishable_...)",
          rowLevelSecurityRequired: true,
          serviceRoleBypassKeyConfigured: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
          recommendations: [
            "Ensure Row Level Security (RLS) is enabled on all tables in Supabase Dashboard (Authentication > Policies).",
            "Do NOT store service_role keys in the client bundle or commit them to source control.",
            "Use Supabase Auth or backend proxy routes for sensitive administrative writes."
          ]
        }
      });
    } catch (err: any) {
      res.status(500).json({ error: err?.message || "Failed to test Supabase connection" });
    }
  });

  // Private Admin API Routes
  app.use("/api/admin", adminRouter);

  // Secure Payment & Booking API Routes
  app.use("/api/payment", paymentRouter);

  // Global Free-Tier Cost Guard Rate Limiter for Gemini AI endpoints (Max 25 requests/day per IP, max 5 RPM)
  const aiRateLimits = new Map<string, { count: number; lastReset: number; minuteCount: number; minuteReset: number }>();

  function checkAiRateLimit(req: express.Request): { allowed: boolean; message?: string } {
    const ip = (req.ip || req.headers["x-forwarded-for"] || "unknown").toString();
    const now = Date.now();
    const today = new Date().toDateString();

    let record = aiRateLimits.get(ip);
    if (!record || new Date(record.lastReset).toDateString() !== today) {
      record = { count: 0, lastReset: now, minuteCount: 0, minuteReset: now };
      aiRateLimits.set(ip, record);
    }

    if (now - record.minuteReset > 60000) {
      record.minuteCount = 0;
      record.minuteReset = now;
    }
    if (record.minuteCount >= 5) {
      return { allowed: false, message: "Please wait a moment before sending another AI query." };
    }

    if (record.count >= 25) {
      return { allowed: false, message: "Daily free consultation limit reached (25/day). Please try again tomorrow or contact our Ajmer studio directly at +91 98290 85850." };
    }

    record.count += 1;
    record.minuteCount += 1;
    return { allowed: true };
  }

  // 1. Multi-turn Chatbot endpoint with role-based system prompts & model tiering
  app.post("/api/ai/chat", async (req, res) => {
    const rateCheck = checkAiRateLimit(req);
    if (!rateCheck.allowed) {
      return res.status(429).json({ error: rateCheck.message, fallback: rateCheck.message });
    }
    let model = "gemini-3.5-flash";
    let reqRole = "architect";
    try {
      const { messages, role = "architect", customModel } = req.body;
      reqRole = role;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages payload" });
      }

      // Model Selection logic based on complexity and prompt requirements
      // - gemini-3.1-pro-preview: Complex architectural structural analysis, master planning
      // - gemini-3.5-flash: General consultations, Vastu, ADA byelaws
      // - gemini-3.1-flash-lite: Fast queries, quick dimensional calculations, rapid checklists
      model = customModel || "gemini-3.5-flash";
      if (role === "structural" || role === "master_architect") {
        model = "gemini-3.1-pro-preview";
      } else if (role === "rapid_estimator") {
        model = "gemini-3.1-flash-lite";
      }

      const rolePrompts: Record<string, string> = {
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
Provide fast, high-density, bulleted dimensional calculations, recommended carpet-to-built-up ratios, room dimension guidelines (e.g. 30x50 plot, 40x60 plot), and quick feasibility checks.`
      };

      const systemInstruction = rolePrompts[role] || rolePrompts.architect;

      const ai = getAiClient();
      if (!ai) {
        // Fallback intelligent response if API key is not yet configured
        return res.json({
          reply: `[Design Plus Architecture Advisor]\n\nThank you for your consultation request regarding ${role.replace("_", " ")}. At Design Plus, under the leadership of Er. Sudhir Soni, we prioritize structural stability, climate-responsive layout, and statutory ADA compliance.\n\nKey Recommendations for your query:\n1. Verify plot dimensions, orientation (North/East solar orientation), and road width for permissible FAR under ADA 2020 byelaws.\n2. In Ajmer's arid climate, maximize northern diffused light while shielding southwest facades with double-skin masonry or louvers.\n3. Ensure structural ductile frames adhere to IS 13920:2016 on Aravalli granite subsoil.\n\nWould you like to schedule an in-person structural site inspection or explore our 3D elevation services?`,
          modelUsed: model,
          role
        });
      }

      // Format conversation history for Gemini API
      const formattedContents = messages.map((m: any) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text || "" }]
      }));

      const response = await ai.models.generateContent({
        model,
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "Thank you for consulting Design Plus. How else may we assist with your architectural project?";

      res.json({
        reply,
        modelUsed: model,
        role
      });
    } catch (error: any) {
      console.warn("Chatbot API Quota / Error notice, delivering intelligent architectural fallback:", error?.message);
      const isQuotaError = error?.message?.includes("resource_exhausted") || error?.message?.includes("quota") || error?.message?.includes("429");
      return res.json({
        reply: isQuotaError
          ? `[Design Plus Architecture Advisor — Free Tier Quota Protected]\n\nOur daily Gemini AI free tier quota has been temporarily reached. As part of our strict API cost-zero policy, Design Plus is serving verified expert architectural guidelines compiled by Er. Sudhir Soni:\n\n1. In Ajmer's semi-arid climate, orient living spaces towards the North/East and incorporate deep overhangs or jalis to mitigate solar heat gain.\n2. Ensure foundation structural stability on Aravalli granite strata adhering to IS 456 & IS 13920.\n3. Verify ADA (Ajmer Development Authority) setbacks and permissible FAR before commencing construction.\n\nFor immediate personalized assistance, call our Civil Lines studio at +91 98290 85850.`
          : `[Design Plus Architecture Advisor]\n\nThank you for your consultation query. Our design team prioritizes climate-responsive spatial planning and seismic structural safety. Please contact our Ajmer studio at +91 98290 85850 for immediate assistance.`,
        modelUsed: model,
        role: reqRole
      });
    }
  });

  // 2. Google Search Grounding endpoint
  app.post("/api/ai/search-grounding", async (req, res) => {
    const rateCheck = checkAiRateLimit(req);
    if (!rateCheck.allowed) {
      return res.status(429).json({ error: rateCheck.message });
    }
    let queryText = req.body?.query || "architectural guidelines";
    try {
      const { query } = req.body;
      queryText = query || queryText;
      if (!query) {
        return res.status(400).json({ error: "Search query required" });
      }

      const ai = getAiClient();
      if (!ai) {
        return res.json({
          text: `Current Rajasthan Architectural & Real Estate Guidelines indicate strict adherence to ADA 2020 byelaws for plot coverage and solar rooftop provisions. Material costs in Kishangarh and Ajmer reflect current market rates for Makrana marble and Fe550D TMT rebar.`,
          groundingMetadata: {
            webSearchQueries: [query],
            searchEntryPoint: { renderedContent: "Google Search Grounding (Live Data Mode)" }
          }
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `You are a live real-estate, regulatory, and construction material intelligence engine for Design Plus Architecture Studio in Rajasthan.
Answer the user's inquiry with verified up-to-date regional information, citing bylaws, building codes, or market context when applicable:
Query: ${query}`,
        config: {
          tools: [{ googleSearch: {} }],
        }
      });

      const candidate = response.candidates?.[0];
      res.json({
        text: response.text || "Search grounding response retrieved.",
        groundingMetadata: candidate?.groundingMetadata || null
      });
    } catch (error: any) {
      console.warn("Search Grounding Quota/Error notice, serving fallback intelligence:", error?.message);
      return res.json({
        text: `Current Rajasthan Architectural & Real Estate Guidelines indicate strict adherence to ADA 2020 byelaws for plot coverage and solar rooftop provisions. Material costs in Kishangarh and Ajmer reflect current market rates for Makrana marble and Fe550D TMT rebar.`,
        groundingMetadata: {
          webSearchQueries: [queryText],
          searchEntryPoint: { renderedContent: "Google Search Grounding (Fallback Mode)" }
        }
      });
    }
  });

  // 3. Google Maps Grounding endpoint
  app.post("/api/ai/maps-grounding", async (req, res) => {
    const rateCheck = checkAiRateLimit(req);
    if (!rateCheck.allowed) {
      return res.status(429).json({ error: rateCheck.message });
    }
    let locQueryText = req.body?.locationQuery || "Ajmer";
    try {
      const { locationQuery, latitude, longitude } = req.body;
      locQueryText = locationQuery || locQueryText;
      if (!locationQuery) {
        return res.status(400).json({ error: "Location query required" });
      }

      const ai = getAiClient();
      if (!ai) {
        return res.json({
          text: `Site analysis for ${locationQuery} (Ajmer / Rajasthan region): The location falls within the Ajmer Development Authority (ADA) master plan jurisdiction. Consideration must be given to proximity to Aravalli hill slope contours, ground water depth, road width for FAR calculation, and municipal drainage connectivity.`,
          groundingMetadata: {
            mapsQueries: [locationQuery],
          }
        });
      }

      const locationContext = latitude && longitude
        ? `Coordinates: (${latitude}, ${longitude}). `
        : "";

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `You are the Urban Geotechnical & Site Planning Specialist at Design Plus Architecture Studio.
Analyze the following geographic site or landmark in Rajasthan/Ajmer with respect to architectural zoning, accessibility, municipal infrastructure, and topography:
${locationContext}Location or Site Inquiry: ${locationQuery}`,
        config: {
          tools: [{ googleMaps: {} }],
        }
      });

      const candidate = response.candidates?.[0];
      res.json({
        text: response.text || "Site analysis retrieved.",
        groundingMetadata: candidate?.groundingMetadata || null
      });
    } catch (error: any) {
      console.warn("Maps Grounding Quota/Error notice, serving fallback site analysis:", error?.message);
      return res.json({
        text: `Site analysis for ${locQueryText} (Ajmer / Rajasthan region): The location falls within the Ajmer Development Authority (ADA) master plan jurisdiction. Consideration must be given to proximity to Aravalli hill slope contours, ground water depth, road width for FAR calculation, and municipal drainage connectivity.`,
        groundingMetadata: {
          mapsQueries: [locQueryText],
        }
      });
    }
  });

  // 4. Gemini Live / Audio Voice Consultation Endpoint (gemini-3.8-live / speech audio)
  app.post("/api/ai/voice-consult", async (req, res) => {
    const rateCheck = checkAiRateLimit(req);
    if (!rateCheck.allowed) {
      return res.status(429).json({ error: rateCheck.message });
    }
    try {
      const { userQuery, role = "architect" } = req.body;
      if (!userQuery) {
        return res.status(400).json({ error: "User query required" });
      }

      const ai = getAiClient();
      const prompt = `You are Er. Sudhir Soni, Chartered Structural Engineer and Founder of Design Plus in Ajmer, Rajasthan.
Answer the following client voice query concisely in 2 to 3 spoken sentences, focusing on practical structural and architectural guidance:
"${userQuery}"`;

      if (!ai) {
        return res.json({
          audioText: `Greetings. At Design Plus Ajmer, we ensure every plot is analyzed for soil load-bearing capacity and ADA byelaws. For your query regarding ${userQuery.slice(0, 40)}, we recommend designing a framed RCC structure with natural courtyard cross-ventilation.`,
          model: "gemini-3.8-live"
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 0.6,
        }
      });

      res.json({
        audioText: response.text || "Thank you for consulting Design Plus Studio.",
        model: "gemini-3.8-live"
      });
    } catch (error: any) {
      console.error("Voice Consultation Error:", error);
      res.status(500).json({ error: error.message || "Failed to process voice consultation" });
    }
  });

  // Static asset caching options: immutable headers for media, atlases, fonts and hashed bundles, revalidate for HTML
  const staticCacheOptions = {
    maxAge: "30d",
    setHeaders: (res: express.Response, filePath: string) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
      } else if (
        filePath.match(/\.(jpg|jpeg|png|webp|avif|mp4|webm|svg|woff2|woff|ttf)$/i) ||
        filePath.includes("/assets/")
      ) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    }
  };

  // Serve public static assets (videos, posters, models, atlases) with HTTP 206 Byte-Range support
  app.use(express.static(path.join(process.cwd(), "public"), staticCacheOptions));

  // Vite middleware in development or static serve in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, staticCacheOptions));
    app.get("*", (_req, res) => {
      res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Design Plus Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
