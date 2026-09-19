import React, { useState } from "react";
import { SERVICES as INITIAL_SERVICES } from "../../data/siteData";
import { Layers, Edit, Check, Globe, Sparkles } from "lucide-react";

export const AdminServicesPage: React.FC = () => {
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEdit = (s: any) => {
    setEditingSlug(s.slug);
    setEditFormData({ ...s });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setServices(prev => prev.map(s => s.slug === editingSlug ? { ...s, ...editFormData } : s));
    setEditingSlug(null);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          Practice Services &amp; Capabilities
        </h1>
        <p className="text-xs text-stone-400 font-mono mt-1">
          Manage core architectural and engineering services displayed across public portfolio and landing hubs
        </p>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Service capabilities updated successfully!</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc) => (
          <div key={svc.slug} className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Layers className="w-4 h-4" />
                  <span>/{svc.slug}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Active
                </span>
              </div>

              <h2 className="font-serif text-lg font-bold text-stone-100 mt-2">
                {svc.title}
              </h2>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                {svc.shortDescription}
              </p>

              <div className="mt-4 pt-3 border-t border-stone-800/80 space-y-2">
                <div className="text-[11px] font-mono text-stone-400">Deliverables &amp; Inclusions:</div>
                <div className="flex flex-wrap gap-1.5">
                  {(svc.deliverables || []).map((d: string, i: number) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-950 text-stone-300 border border-stone-800">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <a
                href={`/services/${svc.slug}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-stone-400 hover:text-stone-200"
              >
                View Public Page ↗
              </a>

              <button
                onClick={() => handleEdit(svc)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono"
              >
                <Edit className="w-3.5 h-3.5 text-amber-400" />
                <span>Edit Service</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingSlug && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-stone-100 mb-4">
              Edit Service: {editFormData.title}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-stone-300 mb-1">Service Title</label>
                <input
                  type="text"
                  value={editFormData.title || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Short Description</label>
                <textarea
                  rows={3}
                  value={editFormData.shortDescription || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Full Architectural Overview</label>
                <textarea
                  rows={4}
                  value={editFormData.fullDescription || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, fullDescription: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingSlug(null)}
                  className="px-4 py-2 rounded-lg bg-stone-800 text-stone-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
