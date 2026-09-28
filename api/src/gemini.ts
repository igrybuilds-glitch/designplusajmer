// Minimal Gemini REST client (fetch-based, Worker-safe).
// Replaces the @google/genai SDK calls from server.ts; the SDK's
// generateContent({ model, contents, config }) maps 1:1 to the
// v1beta :generateContent REST endpoint.

export interface GeminiContent {
  role: string;
  parts: Array<{ text: string }>;
}

export interface GeminiGenerateOptions {
  model: string;
  contents: GeminiContent[] | string;
  systemInstruction?: string;
  temperature?: number;
  tools?: Array<Record<string, unknown>>;
}

export interface GeminiResult {
  text: string;
  groundingMetadata: unknown | null;
}

export async function geminiGenerateContent(
  apiKey: string,
  opts: GeminiGenerateOptions
): Promise<GeminiResult> {
  const contents: GeminiContent[] =
    typeof opts.contents === "string"
      ? [{ role: "user", parts: [{ text: opts.contents }] }]
      : opts.contents;

  const body: Record<string, unknown> = { contents };
  if (opts.systemInstruction) {
    body.system_instruction = { parts: [{ text: opts.systemInstruction }] };
  }
  const generationConfig: Record<string, unknown> = {};
  if (opts.temperature !== undefined) generationConfig.temperature = opts.temperature;
  if (Object.keys(generationConfig).length > 0) body.generationConfig = generationConfig;
  if (opts.tools) body.tools = opts.tools;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(opts.model)}:generateContent`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    // Keep the status code in the message: callers detect quota exhaustion
    // by looking for "429" / "quota" / "resource_exhausted".
    const err: any = new Error(`Gemini API error ${res.status}: ${errText.slice(0, 300)}`);
    err.status = res.status;
    throw err;
  }

  const data = (await res.json()) as any;
  const candidate = data?.candidates?.[0];
  const text: string =
    candidate?.content?.parts?.map((p: any) => (typeof p?.text === "string" ? p.text : "")).join("") || "";

  return { text, groundingMetadata: candidate?.groundingMetadata ?? null };
}
