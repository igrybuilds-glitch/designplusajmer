import React, { useState } from "react";
import { 
  User as UserIcon, 
  X, 
  Bookmark, 
  FileText, 
  Calendar, 
  LogOut, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Trash2,
  Building,
  Loader2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PROJECTS } from "../data/siteData";

interface ClientAuthDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export function ClientAuthDrawer({ isOpen, onClose, onOpenConsultation }: ClientAuthDrawerProps) {
  const { 
    user, 
    loading, 
    savedProjects, 
    userInquiries, 
    signInGoogle, 
    signInGuest, 
    signOutUser, 
    toggleBookmark 
  } = useAuth();
  
  const [activeTab, setActiveTab] = useState<"bookmarks" | "inquiries">("bookmarks");
  const [authLoading, setAuthLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    try {
      await signInGoogle();
    } catch (err) {
      console.error("Sign in failed:", err);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleGuestSignIn = async () => {
    setAuthLoading(true);
    try {
      await signInGuest();
    } catch (err) {
      console.error("Guest sign in failed:", err);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBFBF9] border-l border-stone-300 shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-900 text-amber-100 flex items-center justify-center overflow-hidden border border-stone-300 shadow-xs">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || "Client"} className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="w-5 h-5 text-amber-300" />
                )}
              </div>
              <div>
                <h3 className="font-editorial text-lg font-bold text-stone-950">
                  {user ? (user.displayName || "Client Portal") : "Client Account"}
                </h3>
                <p className="text-xs text-stone-600 font-sans">
                  {user ? user.email : "Sign in to save architectural floor plans & inquiries"}
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

          {/* If NOT logged in */}
          {!user ? (
            <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center border border-stone-200">
                <Bookmark className="w-8 h-8 text-amber-800" />
              </div>

              <div className="space-y-2 max-w-xs">
                <h4 className="font-editorial text-xl font-bold text-stone-950">
                  Access Your Studio Portal
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Sign in with Google to bookmark verified architectural projects, track custom consultation status, and save Veo video renders.
                </p>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={handleGoogleSignIn}
                  disabled={authLoading}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-amber-100 py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  {authLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                  ) : (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#EA4335" d="M12 5c1.7 0 3 .7 3.9 1.5l2.9-2.9C17 1.9 14.7 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
                        <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                        <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.5s.7 4.8 1.9 7.2l3.7-2.9z"/>
                        <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 17C3.7 20.7 7.5 24 12 24z"/>
                      </svg>
                      <span>Continue with Google</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleGuestSignIn}
                  disabled={authLoading}
                  className="w-full bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 py-2.5 px-4 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors"
                >
                  Continue as Guest Client
                </button>
              </div>

              <div className="text-[11px] text-stone-500 max-w-xs">
                Secured by Firebase Authentication &amp; Firestore. No spam, ever.
              </div>
            </div>
          ) : (
            /* If Logged in */
            <div className="flex-1 flex flex-col overflow-hidden">
              
              {/* Tab Navigation */}
              <div className="flex border-b border-stone-200 bg-white text-xs font-semibold uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab("bookmarks")}
                  className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                    activeTab === "bookmarks"
                      ? "border-stone-900 text-stone-950 font-bold bg-stone-50"
                      : "border-transparent text-stone-600 hover:text-stone-950"
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5" />
                    Saved Works ({savedProjects.length})
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("inquiries")}
                  className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                    activeTab === "inquiries"
                      ? "border-stone-900 text-stone-950 font-bold bg-stone-50"
                      : "border-transparent text-stone-600 hover:text-stone-950"
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Consultations ({userInquiries.length})
                  </span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
                
                {/* TAB 1: Bookmarked Projects */}
                {activeTab === "bookmarks" && (
                  <div>
                    {savedProjects.length === 0 ? (
                      <div className="text-center py-12 px-4 space-y-3">
                        <Building className="w-10 h-10 text-stone-300 mx-auto" />
                        <div className="text-xs font-semibold text-stone-700">No Saved Projects Yet</div>
                        <p className="text-[11px] text-stone-500 max-w-xs mx-auto">
                          Click the bookmark icon on any portfolio work or floor plan to save it to your private list.
                        </p>
                        <Link
                          to="/projects"
                          onClick={onClose}
                          className="inline-block text-xs font-semibold text-amber-800 hover:text-amber-900 underline"
                        >
                          Browse Portfolio Works &rarr;
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {savedProjects.map((p) => {
                          const projectObj = PROJECTS.find(proj => proj.id === p.projectId);
                          const route = projectObj 
                            ? `/projects/${projectObj.category}/${projectObj.id}`
                            : `/projects/${p.projectId}`;

                          return (
                            <div
                              key={p.id}
                              className="bg-white border border-stone-200 p-3 rounded-xs flex gap-3 items-center group hover:border-stone-400 transition-all shadow-2xs"
                            >
                              {p.imageUrl && (
                                <img
                                  src={p.imageUrl}
                                  alt={p.title}
                                  className="w-16 h-16 object-cover rounded-2xs shrink-0"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <span className="text-[10px] uppercase font-mono text-stone-500">
                                  {p.category}
                                </span>
                                <Link
                                  to={route}
                                  onClick={onClose}
                                  className="block font-serif text-xs sm:text-sm font-bold text-stone-950 truncate hover:text-amber-800 transition-colors"
                                >
                                  {p.title}
                                </Link>
                                <span className="text-[10px] text-stone-400">
                                  Saved on {new Date(p.savedAt).toLocaleDateString()}
                                </span>
                              </div>

                              <button
                                onClick={() => toggleBookmark({ id: p.projectId, title: p.title, category: p.category })}
                                title="Remove bookmark"
                                className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: Submitted Inquiries & Consultations */}
                {activeTab === "inquiries" && (
                  <div>
                    {userInquiries.length === 0 ? (
                      <div className="text-center py-12 px-4 space-y-3">
                        <FileText className="w-10 h-10 text-stone-300 mx-auto" />
                        <div className="text-xs font-semibold text-stone-700">No Active Inquiries</div>
                        <p className="text-[11px] text-stone-500 max-w-xs mx-auto">
                          When you book an architectural or structural consultation, your inquiry status will appear here in real time.
                        </p>
                        {onOpenConsultation && (
                          <button
                            onClick={() => {
                              onClose();
                              onOpenConsultation();
                            }}
                            className="bg-stone-900 text-amber-100 text-xs py-2 px-4 font-semibold uppercase tracking-wider rounded-xs"
                          >
                            Book Consultation
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {userInquiries.map((inq) => (
                          <div
                            key={inq.id}
                            className="bg-white border border-stone-200 p-3.5 rounded-xs space-y-2 shadow-2xs"
                          >
                            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                              <span className="text-xs font-bold text-stone-900 uppercase">
                                {inq.projectType}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-amber-50 text-amber-900 border border-amber-200 font-semibold flex items-center gap-1">
                                <Clock className="w-3 h-3 text-amber-700" />
                                {inq.status || "Pending Studio Review"}
                              </span>
                            </div>

                            <div className="text-xs text-stone-700 space-y-1">
                              {inq.plotArea && (
                                <div><span className="font-medium text-stone-900">Plot Area:</span> {inq.plotArea}</div>
                              )}
                              {inq.location && (
                                <div><span className="font-medium text-stone-900">Location:</span> {inq.location}</div>
                              )}
                              <p className="text-stone-600 line-clamp-2 italic bg-stone-50 p-2 rounded-2xs border border-stone-100">
                                "{inq.message}"
                              </p>
                            </div>

                            <div className="text-[10px] text-stone-400">
                              Submitted on {new Date(inq.createdAt).toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* Drawer Footer / Sign Out */}
              <div className="p-4 border-t border-stone-200 bg-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-600">
                  Er. Sudhir Soni Studio Portal
                </span>
                <button
                  onClick={signOutUser}
                  className="flex items-center gap-1.5 text-xs text-stone-700 hover:text-red-700 font-semibold uppercase tracking-wider transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
