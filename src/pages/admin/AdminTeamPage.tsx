import React, { useState } from "react";
import { TEAM_MEMBERS as INITIAL_TEAM, LEADERSHIP } from "../../data/siteData";
import { Users, Shield, Award, Edit, Check } from "lucide-react";

export const AdminTeamPage: React.FC = () => {
  const [team, setTeam] = useState(INITIAL_TEAM);
  const [editingMember, setEditingMember] = useState<any | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEdit = (m: any) => {
    setEditingMember({ ...m });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember) return;
    setTeam(prev => prev.map(m => m.name === editingMember.name ? editingMember : m));
    setEditingMember(null);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          Studio Leadership &amp; Engineering Team
        </h1>
        <p className="text-xs text-stone-400 font-mono mt-1">
          Manage practice principals, chartered engineering credentials, and architectural team bios
        </p>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Team profile credentials updated successfully!</span>
        </div>
      )}

      {/* Leadership Spotlight: Er. Sudhir Soni */}
      <div className="p-6 rounded-2xl bg-stone-900 border border-amber-500/30 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-xl shrink-0">
              SS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold">
                  Founder &amp; Principal
                </span>
                <span className="text-xs font-mono text-stone-400">
                  20+ Years Track Record
                </span>
              </div>
              <h2 className="font-serif text-xl font-bold text-stone-100 mt-1">
                {LEADERSHIP.name}
              </h2>
              <div className="text-xs font-mono text-amber-400 mt-0.5">
                {LEADERSHIP.role} • {LEADERSHIP.qualification}
              </div>
              <p className="text-xs text-stone-300 mt-2 max-w-2xl leading-relaxed">
                {LEADERSHIP.bio}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 text-xs font-mono text-stone-300">
              <div className="text-amber-400 font-bold text-sm">900+</div>
              <div>Completed Works</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map((member) => (
          <div key={member.name} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-amber-400">
                  {member.qualification}
                </span>
                <button
                  onClick={() => handleEdit(member)}
                  className="text-stone-400 hover:text-stone-200 p-1"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="font-serif text-base font-bold text-stone-100 mt-1">
                {member.name}
              </h3>
              <div className="text-xs font-mono text-stone-400">
                {member.role}
              </div>

              <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                {member.bio}
              </p>

              <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] font-mono text-stone-400">
                Specialization: <span className="text-stone-200">{member.specialization}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingMember && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-stone-100 mb-4">
              Edit Team Profile: {editingMember.name}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-stone-300 mb-1">Full Professional Name</label>
                <input
                  type="text"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Designation / Role</label>
                <input
                  type="text"
                  value={editingMember.role}
                  onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Academic &amp; Professional Qualifications</label>
                <input
                  type="text"
                  value={editingMember.qualification}
                  onChange={(e) => setEditingMember({ ...editingMember, qualification: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Professional Bio</label>
                <textarea
                  rows={3}
                  value={editingMember.bio}
                  onChange={(e) => setEditingMember({ ...editingMember, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="px-4 py-2 rounded-lg bg-stone-800 text-stone-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
