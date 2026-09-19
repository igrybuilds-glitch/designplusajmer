import React, { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  RotateCcw, 
  Building2, 
  Compass, 
  Scale, 
  Layers, 
  Zap, 
  Globe, 
  MapPin, 
  Bot, 
  User as UserIcon,
  Loader2,
  ExternalLink
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { saveConversation } from "../lib/firebase";

interface Message {
  id: string;
  sender: "user" | "model";
  text: string;
  timestamp: string;
  modelUsed?: string;
  groundingMetadata?: any;
}

interface AiConsultantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

const ROLES = [
  {
    id: "architect",
    label: "Principal Architect",
    model: "gemini-3.1-pro-preview",
    badge: "Pro Preview",
    icon: Building2,
    description: "Spatial massing, climate-responsive courtyard flow, and vernacular Rajasthan aesthetics."
  },
  {
    id: "structural",
    label: "Chartered Structural",
    model: "gemini-3.1-pro-preview",
    badge: "IS Codes",
    icon: Layers,
    description: "IS 456, ductile detailing (IS 13920), and Aravalli granite foundation mechanics."
  },
  {
    id: "ada_bylaws",
    label: "ADA Byelaws & FAR",
    model: "gemini-3.5-flash",
    badge: "Byelaws 2020",
    icon: Scale,
    description: "Ajmer Development Authority setbacks, road width FAR calculation, and height clearances."
  },
  {
    id: "vastu",
    label: "Vastu & Solar Climate",
    model: "gemini-3.5-flash",
    badge: "Orientation",
    icon: Compass,
    description: "Brahmasthan zoning, cardinal energy flow, and passive solar shading."
  },
  {
    id: "rapid_estimator",
    label: "Rapid Spatial Estimator",
    model: "gemini-3.1-flash-lite",
    badge: "Flash Lite",
    icon: Zap,
    description: "Instant room dimension matrices, carpet-to-built-up ratios, and construction checklists."
  }
];

const SUGGESTED_PROMPTS: Record<string, string[]> = {
  architect: [
    "How to design a passive cooling central courtyard for a 30x60 ft plot in Ajmer?",
    "What are the best indigenous stone materials for low heat absorption in Rajasthan?",
    "How should multi-generational privacy be zoned in a modern 4BHK duplex villa?"
  ],
  structural: [
    "When is a raft foundation preferred over isolated footings on weathered Aravalli granite?",
    "What ductile reinforcement detailing is required for Seismic Zone II in Rajasthan?",
    "How to calculate column grid spans for column-free commercial basement parking?"
  ],
  ada_bylaws: [
    "What is the maximum permissible FAR for a 40 ft road under ADA 2020 byelaws?",
    "What are the setback buffer restrictions near Ana Sagar lake catchment zone in Ajmer?",
    "Are basement floors counted toward the total Floor Area Ratio in commercial buildings?"
  ],
  vastu: [
    "Where is the ideal Vastu placement for an underground water tank and boring in North-facing plots?",
    "How to correct an Agneya (South-East) master bedroom through architectural zoning?",
    "What are the rules for staircase direction (clockwise vs anti-clockwise) in Vastu?"
  ],
  rapid_estimator: [
    "Give me standard room size dimensions for a 40x50 ft (2000 sq ft) G+1 residential house.",
    "Calculate the expected carpet area from a 3200 sq ft super built-up commercial floor plate.",
    "Generate a 7-point structural inspection checklist prior to RCC slab casting."
  ]
};

export function AiConsultantDrawer({ isOpen, onClose, initialRole = "architect" }: AiConsultantDrawerProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"chat" | "search_grounding" | "maps_grounding">("chat");
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "model",
      text: `Welcome to Design Plus Architectural & Engineering AI Consultation. I am your specialized AI Assistant guided by the engineering principles of Chartered Engineer Er. Sudhir Soni.\n\nSelect a specialist role above, explore live Rajasthan regulatory search grounding, or speak your inquiry via Live Voice Mode.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      modelUsed: "gemini-3.1-pro-preview"
    }
  ]);

  // Search & Maps Grounding State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{ text: string; metadata?: any } | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);

  const [mapsLocation, setMapsLocation] = useState("Ana Sagar Circular Road, Ajmer");
  const [mapsResult, setMapsResult] = useState<{ text: string; metadata?: any } | null>(null);
  const [mapsLoading, setMapsLoading] = useState(false);

  // Voice Mode State
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setSpeechSupported(true);
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-IN";

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsRecording(false);
          // Auto submit spoken query
          handleSend(transcript);
        };

        recognition.onerror = (e: any) => {
          console.warn("Speech recognition notice:", e);
          setIsRecording(false);
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, [selectedRole]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const speakText = (text: string) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const cleanText = text.replace(/[*#_`]/g, "").slice(0, 300);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 0.95;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  };

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. You can type your architectural query below.");
      return;
    }
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Recording error:", err);
      }
    }
  };

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = {
      id: "msg-" + Date.now(),
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      const activeRoleConfig = ROLES.find(r => r.id === selectedRole);
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newHistory.map(m => ({ sender: m.sender, text: m.text })),
          role: selectedRole,
          customModel: activeRoleConfig?.model
        })
      });

      const data = await res.json();
      const modelMessage: Message = {
        id: "msg-" + (Date.now() + 1),
        sender: "model",
        text: data.reply || data.fallback || "Consultation response generated.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        modelUsed: data.modelUsed || activeRoleConfig?.model
      };

      const updated = [...newHistory, modelMessage];
      setMessages(updated);

      // Speak answer if in voice flow
      if (isRecording || isSpeaking) {
        speakText(modelMessage.text);
      }

      // Save to Firestore if user is authenticated
      if (user) {
        saveConversation(user.uid, selectedRole, updated).catch(console.warn);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [
        ...prev,
        {
          id: "err-" + Date.now(),
          sender: "model",
          text: "We encountered a temporary connection issue. At Design Plus, our engineering studio is directly reachable at +91 98290 85850 for priority structural and architectural inquiries.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchGrounding = async () => {
    if (!searchQuery.trim() || searchLoading) return;
    setSearchLoading(true);
    try {
      const res = await fetch("/api/ai/search-grounding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery })
      });
      const data = await res.json();
      setSearchResult({
        text: data.text,
        metadata: data.groundingMetadata
      });
    } catch (err) {
      console.error("Search Grounding Error:", err);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleMapsGrounding = async () => {
    if (!mapsLocation.trim() || mapsLoading) return;
    setMapsLoading(true);
    try {
      const res = await fetch("/api/ai/maps-grounding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locationQuery: mapsLocation })
      });
      const data = await res.json();
      setMapsResult({
        text: data.text,
        metadata: data.groundingMetadata
      });
    } catch (err) {
      console.error("Maps Grounding Error:", err);
    } finally {
      setMapsLoading(false);
    }
  };

  if (!isOpen) return null;

  const currentRole = ROLES.find(r => r.id === selectedRole) || ROLES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-[#FBFBF9] border-l border-stone-300 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-100/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-stone-900 text-amber-100 flex items-center justify-center rounded-xs shadow-xs">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-editorial text-lg sm:text-xl font-bold text-stone-950">
                    Design Plus AI Studio
                  </h2>
                  <span className="text-[10px] uppercase font-mono tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-xs border border-amber-300/60 font-semibold">
                    Live API
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  Grounding &amp; Multi-Turn Architectural Guidance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMessages([{
                  id: "reset-" + Date.now(),
                  sender: "model",
                  text: `Conversation restarted. Currently consulting with ${currentRole.label}. How can we assist your project today?`,
                  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                  modelUsed: currentRole.model
                }])}
                title="Reset conversation"
                className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 rounded-xs transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 rounded-xs transition-colors"
                aria-label="Close AI Studio"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Mode Tabs */}
          <div className="flex border-b border-stone-200 bg-[#FBFBF9] text-xs font-medium uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === "chat"
                  ? "border-stone-900 text-stone-950 font-bold bg-stone-100/50"
                  : "border-transparent text-stone-600 hover:text-stone-950"
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <Bot className="w-4 h-4" />
                Chatbot &amp; Voice
              </span>
            </button>
            <button
              onClick={() => setActiveTab("search_grounding")}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === "search_grounding"
                  ? "border-stone-900 text-stone-950 font-bold bg-stone-100/50"
                  : "border-transparent text-stone-600 hover:text-stone-950"
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <Globe className="w-4 h-4 text-sky-600" />
                Search Grounding
              </span>
            </button>
            <button
              onClick={() => setActiveTab("maps_grounding")}
              className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                activeTab === "maps_grounding"
                  ? "border-stone-900 text-stone-950 font-bold bg-stone-100/50"
                  : "border-transparent text-stone-600 hover:text-stone-950"
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Maps Grounding
              </span>
            </button>
          </div>

          {/* TAB 1: Chatbot & Live Voice Mode */}
          {activeTab === "chat" && (
            <>
              {/* Role Selectors */}
              <div className="p-3 bg-stone-100/50 border-b border-stone-200">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 mb-2 flex items-center justify-between">
                  <span>Specialist Advisory Persona:</span>
                  <span className="font-mono text-[10px] text-stone-500">{currentRole.model}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {ROLES.map((r) => {
                    const Icon = r.icon;
                    const isSelected = selectedRole === r.id;
                    return (
                      <button
                        key={r.id}
                        onClick={() => setSelectedRole(r.id)}
                        className={`text-left p-2 rounded-xs border transition-all text-xs flex flex-col justify-between ${
                          isSelected
                            ? "bg-stone-900 text-[#FBFBF9] border-stone-900 shadow-xs"
                            : "bg-[#FBFBF9] text-stone-800 border-stone-200 hover:border-stone-400"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-amber-300" : "text-stone-700"}`} />
                          <span className={`text-[9px] uppercase font-mono px-1 rounded-2xs ${isSelected ? "bg-stone-800 text-amber-200" : "bg-stone-100 text-stone-600"}`}>
                            {r.badge}
                          </span>
                        </div>
                        <span className="font-semibold leading-tight line-clamp-1">{r.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="text-[11px] text-stone-600 mt-2 italic px-1">
                  {currentRole.description}
                </div>
              </div>

              {/* Chat Thread */}
              <div 
                ref={scrollRef}
                className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#FBFBF9]"
              >
                {messages.map((m) => {
                  const isUser = m.sender === "user";
                  return (
                    <div 
                      key={m.id}
                      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <div 
                        className={`w-7 h-7 rounded-xs flex items-center justify-center shrink-0 ${
                          isUser ? "bg-amber-800 text-white" : "bg-stone-900 text-amber-200"
                        }`}
                      >
                        {isUser ? <UserIcon className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>

                      <div className={`max-w-[85%] sm:max-w-[78%] space-y-1 ${isUser ? "items-end text-right" : "items-start text-left"}`}>
                        <div 
                          className={`p-3.5 text-xs sm:text-sm leading-relaxed rounded-xs shadow-2xs whitespace-pre-wrap ${
                            isUser
                              ? "bg-amber-900 text-amber-50 rounded-tr-none"
                              : "bg-white text-stone-900 border border-stone-200 rounded-tl-none"
                          }`}
                        >
                          {m.text}
                        </div>

                        <div className="flex items-center gap-2 px-1 text-[10px] text-stone-500">
                          <span>{m.timestamp}</span>
                          {m.modelUsed && (
                            <span className="font-mono bg-stone-100 px-1 py-0.5 rounded-2xs border border-stone-200">
                              {m.modelUsed}
                            </span>
                          )}
                          {!isUser && (
                            <button
                              onClick={() => speakText(m.text)}
                              title="Read response aloud"
                              className="text-stone-500 hover:text-stone-900 transition-colors"
                            >
                              <Volume2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {loading && (
                  <div className="flex gap-3 items-center text-stone-500 text-xs italic py-2">
                    <div className="w-7 h-7 bg-stone-900 text-amber-200 flex items-center justify-center rounded-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-2 bg-stone-100 border border-stone-200 px-3 py-2 rounded-xs">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-stone-700" />
                      <span>{currentRole.label} ({currentRole.model}) is formulating architectural response...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Starter Suggested Chips */}
              <div className="px-4 py-2 bg-stone-50 border-t border-stone-200 overflow-x-auto whitespace-nowrap flex gap-2">
                {(SUGGESTED_PROMPTS[selectedRole] || []).map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    disabled={loading}
                    className="text-[11px] bg-white hover:bg-stone-200 text-stone-800 border border-stone-300 px-2.5 py-1 rounded-full shrink-0 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="p-3 sm:p-4 bg-white border-t border-stone-200 space-y-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  {/* Voice Button (Gemini-3.8-Live API Voice trigger) */}
                  <button
                    type="button"
                    onClick={toggleRecording}
                    title={isRecording ? "Stop listening" : "Start Live Voice consultation (gemini-3.8-live)"}
                    className={`p-2.5 rounded-xs border transition-all ${
                      isRecording
                        ? "bg-red-600 text-white border-red-700 animate-pulse"
                        : "bg-stone-100 text-stone-700 hover:text-stone-950 border-stone-300 hover:bg-stone-200"
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>

                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      isRecording
                        ? "Listening to voice input... speak your architectural inquiry"
                        : `Ask ${currentRole.label} about byelaws, structure, or layout...`
                    }
                    disabled={loading}
                    className="flex-1 bg-[#FBFBF9] border border-stone-300 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-500 focus:outline-hidden focus:border-stone-900 rounded-xs"
                  />

                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-amber-100 px-4 py-2.5 rounded-xs transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="flex items-center justify-between text-[10px] text-stone-500 px-1">
                  <span>Powered by Gemini Live &amp; Pro Models</span>
                  <span>IS Codes · ADA 2020 Byelaws · Vastu Shastra</span>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: Search Grounding (Live Regulatory & Market Intelligence) */}
          {activeTab === "search_grounding" && (
            <div className="flex-1 p-5 overflow-y-auto space-y-5 bg-[#FBFBF9]">
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-xs">
                <div className="flex items-center gap-2 text-sky-900 font-semibold text-xs uppercase tracking-wider mb-1">
                  <Globe className="w-4 h-4" />
                  Google Search Grounding (gemini-3.5-flash)
                </div>
                <p className="text-xs text-sky-800">
                  Retrieves live Rajasthan municipal notices, material prices (Makrana marble, Fe550D TMT rebar in Kishangarh), and ADA/RERA updates.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                  Live Regulatory &amp; Market Query:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Latest ADA building bylaws for residential setback in Ajmer 2024"
                    className="flex-1 bg-white border border-stone-300 px-3 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-stone-900"
                  />
                  <button
                    onClick={handleSearchGrounding}
                    disabled={searchLoading || !searchQuery.trim()}
                    className="bg-sky-900 text-white hover:bg-sky-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs disabled:opacity-50"
                  >
                    {searchLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "Current Makrana marble slab price per sq ft in Kishangarh",
                    "Rajasthan solar rooftop subsidy guidelines 2024",
                    "ADA Ajmer floor area ratio rules for 60ft wide road"
                  ].map((preset, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSearchQuery(preset);
                      }}
                      className="text-[11px] bg-white border border-stone-200 px-2 py-1 rounded-full text-stone-700 hover:bg-stone-100"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {searchResult && (
                <div className="bg-white border border-stone-300 p-4 rounded-xs space-y-3">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider border-b border-stone-200 pb-2">
                    Grounded Regulatory Intelligence
                  </div>
                  <div className="text-xs sm:text-sm text-stone-800 leading-relaxed whitespace-pre-wrap">
                    {searchResult.text}
                  </div>

                  {searchResult.metadata?.webSearchQueries && (
                    <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                      <span className="font-semibold">Web Search Queries: </span>
                      {searchResult.metadata.webSearchQueries.join(", ")}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Maps Grounding (Geotechnical & Site Analysis) */}
          {activeTab === "maps_grounding" && (
            <div className="flex-1 p-5 overflow-y-auto space-y-5 bg-[#FBFBF9]">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-semibold text-xs uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  Google Maps Grounding (gemini-3.5-flash)
                </div>
                <p className="text-xs text-emerald-800">
                  Performs spatial, topographic, and zoning analysis for specific Ajmer &amp; Rajasthan plots, landmarks, and road corridors.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                  Select or Enter Location / Landmark:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={mapsLocation}
                    onChange={(e) => setMapsLocation(e.target.value)}
                    placeholder="e.g. Panchsheel Nagar, Vaishali Nagar, Ana Sagar Lake, Ajmer"
                    className="flex-1 bg-white border border-stone-300 px-3 py-2 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-stone-900"
                  />
                  <button
                    onClick={handleMapsGrounding}
                    disabled={mapsLoading || !mapsLocation.trim()}
                    className="bg-emerald-900 text-white hover:bg-emerald-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs disabled:opacity-50"
                  >
                    {mapsLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Analyze Site"}
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "Ana Sagar Circular Road, Ajmer",
                    "Panchsheel Nagar Commercial Hub, Ajmer",
                    "Vaishali Nagar Residential Sector, Ajmer",
                    "Kishangarh Marble Industrial Corridor",
                    "Pushkar Bypass Eco-Sensitive Zone"
                  ].map((preset, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setMapsLocation(preset);
                      }}
                      className="text-[11px] bg-white border border-stone-200 px-2 py-1 rounded-full text-stone-700 hover:bg-stone-100"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {mapsResult && (
                <div className="bg-white border border-stone-300 p-4 rounded-xs space-y-3">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider border-b border-stone-200 pb-2 flex items-center justify-between">
                    <span>Site &amp; Topography Analysis</span>
                    <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-1.5 py-0.5">Google Maps Grounded</span>
                  </div>
                  <div className="text-xs sm:text-sm text-stone-800 leading-relaxed whitespace-pre-wrap">
                    {mapsResult.text}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
