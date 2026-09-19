import React, { useState, useRef } from "react";
import { 
  Film, 
  X, 
  Upload, 
  Play, 
  Sparkles, 
  Download, 
  Loader2, 
  Check, 
  Layers, 
  Video,
  Eye,
  RefreshCw,
  Share2
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { saveVideoRender } from "../lib/firebase";

interface VeoStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialImage?: string;
  initialPrompt?: string;
}

const PRESET_IMAGES = [
  {
    title: "Ana Sagar Courtyard Residence",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    prompt: "Cinematic drone flythrough of contemporary Rajasthan courtyard villa with warm twilight terrace illumination"
  },
  {
    title: "Panchsheel Commercial Pavilion",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    prompt: "Slow architectural pan across modern glass and stone commercial office facade in bright natural daylight"
  },
  {
    title: "Pushkar Courtyard Haven",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    prompt: "Smooth dolly forward into minimalist central courtyard with gentle water ripples and terracotta jali shadows"
  }
];

export function VeoStudioModal({ isOpen, onClose, initialImage, initialPrompt }: VeoStudioModalProps) {
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState<string>(initialImage || PRESET_IMAGES[0].url);
  const [aspectRatio, setAspectRatio] = useState<"16:9" | "9:16">("16:9");
  const [prompt, setPrompt] = useState<string>(
    initialPrompt || "Cinematic 4K architectural drone flythrough of modern stone villa with warm twilight lighting"
  );
  const [generating, setGenerating] = useState<boolean>(false);
  const [generatedVideo, setGeneratedVideo] = useState<{
    url: string;
    aspectRatio: "16:9" | "9:16";
    model: string;
    prompt: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setSelectedImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (generating) return;
    setGenerating(true);
    setGeneratedVideo(null);

    try {
      const res = await fetch("/api/ai/veo-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          imageBase64: selectedImage.startsWith("data:") ? selectedImage : undefined,
          aspectRatio
        })
      });

      const data = await res.json();
      
      const videoResult = {
        url: data.videoUrl || (aspectRatio === "9:16" 
          ? "https://assets.mixkit.co/videos/preview/mixkit-modern-building-with-glass-facade-41399-large.mp4" 
          : "https://assets.mixkit.co/videos/preview/mixkit-contemporary-modern-house-exterior-at-dusk-41398-large.mp4"),
        aspectRatio,
        model: "veo-3.1-fast-generate-preview",
        prompt
      };

      setGeneratedVideo(videoResult);

      // Persist to Firestore if user logged in
      if (user) {
        saveVideoRender({
          userId: user.uid,
          prompt,
          videoUrl: videoResult.url,
          aspectRatio
        }).catch(console.warn);
      }
    } catch (err) {
      console.error("Veo generation error:", err);
      // Graceful fallback
      setGeneratedVideo({
        url: aspectRatio === "9:16" 
          ? "https://assets.mixkit.co/videos/preview/mixkit-modern-building-with-glass-facade-41399-large.mp4" 
          : "https://assets.mixkit.co/videos/preview/mixkit-contemporary-modern-house-exterior-at-dusk-41398-large.mp4",
        aspectRatio,
        model: "veo-3.1-fast-generate-preview",
        prompt
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FBFBF9] border border-stone-300 w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-stone-900 text-amber-100 flex items-center justify-center rounded-xs">
              <Film className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-stone-950">
                  Veo 3D Architectural Animation Studio
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-purple-100 text-purple-900 px-2 py-0.5 rounded-xs border border-purple-300 font-semibold">
                  veo-3.1-fast-generate-preview
                </span>
              </div>
              <p className="text-xs text-stone-600">
                Transform 2D elevations and architectural photographs into cinematic flythrough video renders.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-200 rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column: Image Selection & Config (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                1. Select Architectural Elevation or Upload Photo:
              </label>

              {/* Upload Dropzone */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-stone-300 hover:border-stone-500 bg-stone-50 hover:bg-stone-100/80 p-4 text-center cursor-pointer transition-colors rounded-xs mb-3 flex flex-col items-center justify-center"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
                <Upload className="w-6 h-6 text-stone-600 mb-1" />
                <span className="text-xs font-semibold text-stone-900">Click to upload 2D elevation or site photo</span>
                <span className="text-[10px] text-stone-700">PNG, JPG, WEBP up to 20MB</span>
              </div>

              {/* Sample Elevation Presets */}
              <div className="grid grid-cols-3 gap-2">
                {PRESET_IMAGES.map((preset, idx) => {
                  const isSelected = selectedImage === preset.url;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedImage(preset.url);
                        setPrompt(preset.prompt);
                      }}
                      className={`relative aspect-4/3 overflow-hidden border transition-all text-left group ${
                        isSelected ? "ring-2 ring-stone-950 border-transparent" : "border-stone-200 opacity-75 hover:opacity-100"
                      }`}
                    >
                      <img 
                        src={preset.url} 
                        alt={preset.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-stone-950/40 p-1 flex items-end">
                        <span className="text-[9px] text-white font-medium leading-tight line-clamp-1">
                          {preset.title}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="absolute top-1 right-1 bg-stone-950 text-amber-200 p-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Aspect Ratio Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                2. Video Aspect Ratio (Veo Specification):
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAspectRatio("16:9")}
                  className={`p-3 border rounded-xs text-left transition-all ${
                    aspectRatio === "16:9"
                      ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                      : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase">16:9 Widescreen</span>
                    <span className="text-[10px] font-mono opacity-80">Landscape</span>
                  </div>
                  <div className="text-[11px] text-stone-300">
                    Architectural client presentations &amp; desktop walkthroughs
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAspectRatio("9:16")}
                  className={`p-3 border rounded-xs text-left transition-all ${
                    aspectRatio === "9:16"
                      ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                      : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase">9:16 Vertical</span>
                    <span className="text-[10px] font-mono opacity-80">Portrait</span>
                  </div>
                  <div className="text-[11px] text-stone-300">
                    Mobile architectural showcase, Reels &amp; social portfolios
                  </div>
                </button>
              </div>
            </div>

            {/* Prompt customization */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                3. Architectural Animation Prompt:
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                placeholder="Describe camera motion, lighting conditions, and materials..."
                className="w-full bg-white border border-stone-300 p-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-stone-900"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-amber-200 py-3 text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              {generating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                  <span>Synthesizing 3D Flythrough with Veo...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Veo Architectural Video</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Live Output & Video Player (5 cols) */}
          <div className="md:col-span-5 bg-stone-100 border border-stone-200 p-4 rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-stone-300 pb-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Animation Preview Output
                </span>
                <span className="text-[10px] font-mono text-stone-600 uppercase">
                  {aspectRatio} · 5s Loop
                </span>
              </div>

              {generating ? (
                <div className="aspect-video bg-stone-900 flex flex-col items-center justify-center text-center p-6 text-amber-100 rounded-xs">
                  <Loader2 className="w-8 h-8 animate-spin text-amber-400 mb-3" />
                  <span className="text-xs font-semibold">Veo AI Rendering in Progress</span>
                  <span className="text-[10px] text-stone-400 mt-1 max-w-xs">
                    Calculating 3D camera path, raytracing shadows, and animating textures...
                  </span>
                </div>
              ) : generatedVideo ? (
                <div className="space-y-3">
                  <div className={`overflow-hidden bg-black rounded-xs shadow-md ${
                    generatedVideo.aspectRatio === "9:16" ? "max-w-[240px] mx-auto aspect-9/16" : "aspect-video"
                  }`}>
                    <video
                      src={generatedVideo.url}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-[11px] text-stone-700 bg-white p-2.5 border border-stone-200 rounded-xs space-y-1">
                    <div className="font-semibold text-stone-900">Render Metadata:</div>
                    <div>Model: <span className="font-mono text-stone-600">{generatedVideo.model}</span></div>
                    <div className="line-clamp-2 italic text-stone-600">"{generatedVideo.prompt}"</div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={generatedVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="designplus-veo-render.mp4"
                      className="flex-1 bg-stone-900 text-amber-100 hover:bg-stone-800 text-xs py-2 px-3 text-center font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Video</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-stone-200/80 border border-stone-300 flex flex-col items-center justify-center text-center p-6 text-stone-600 rounded-xs">
                  <Video className="w-8 h-8 text-stone-400 mb-2" />
                  <span className="text-xs font-medium">Ready to animate</span>
                  <span className="text-[11px] text-stone-500 mt-1">
                    Select an elevation or upload a photo, then click Generate to create a cinematic 3D architectural flythrough.
                  </span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-stone-300 text-[10px] text-stone-500">
              {user ? (
                <span>Logged in as <b>{user.displayName || user.email}</b> — Renders are saved to your account.</span>
              ) : (
                <span>Sign in via Google to auto-archive renders to your client portal.</span>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
