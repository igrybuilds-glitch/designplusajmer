import React, { useState } from "react";
import { LOCATIONS_SERVED as INITIAL_LOCATIONS } from "../../data/siteData";
import { MapPin, Edit, Check, ArrowUpRight } from "lucide-react";

export const AdminLocationsPage: React.FC = () => {
  const [locations, setLocations] = useState(INITIAL_LOCATIONS);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEdit = (loc: any) => {
    setEditingSlug(loc.slug);
    setEditFormData({ ...loc });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLocations(prev => prev.map(l => l.slug === editingSlug ? { ...l, ...editFormData } : l));
    setEditingSlug(null);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          Regional Service Hubs &amp; Byelaws Context
        </h1>
        <p className="text-xs text-stone-400 font-mono mt-1">
          Manage jurisdiction hubs across Rajasthan (Ajmer, Jaipur, Pushkar, Kishangarh, Beawar)
        </p>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Location parameters and regional guidelines updated!</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <div key={loc.slug} className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <MapPin className="w-4 h-4" />
                  <span>{loc.city}, Rajasthan</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Active Hub
                </span>
              </div>

              <h2 className="font-serif text-lg font-bold text-stone-100 mt-2">
                {loc.city} Regional Practice
              </h2>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed line-clamp-3">
                {loc.description}
              </p>

              <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] font-mono text-stone-400">
                <div>Key Byelaw Authority: <span className="text-stone-200">ADA / Local Municipal Body</span></div>
                <div className="mt-1">Distance from Ajmer Studio: <span className="text-stone-200">{loc.distanceFromAjmer || "Headquarters"}</span></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <a
                href={`/locations/${loc.slug}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-stone-400 hover:text-stone-200 flex items-center gap-1"
              >
                <span>View Page</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <button
                onClick={() => handleEdit(loc)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono"
              >
                <Edit className="w-3.5 h-3.5 text-amber-400" />
                <span>Edit Hub</span>
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
              Edit Location: {editFormData.city}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-stone-300 mb-1">City / District Name</label>
                <input
                  type="text"
                  value={editFormData.city || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, city: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Regional Context &amp; Architectural Brief</label>
                <textarea
                  rows={4}
                  value={editFormData.description || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Local Geological &amp; Subsoil Characteristics</label>
                <textarea
                  rows={3}
                  value={editFormData.architecturalContext || ""}
                  onChange={(e) => setEditFormData({ ...editFormData, architecturalContext: e.target.value })}
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
