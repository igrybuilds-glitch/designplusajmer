import React, { useState, useEffect } from "react";
import { 
  fetchAllCMSMessages, 
  updateCMSMessageStatus, 
  CMSMessage 
} from "../../services/adminCmsService";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Check, 
  Clock, 
  Search,
  FileText
} from "lucide-react";

export const AdminMessagesPage: React.FC = () => {
  const { adminUser } = useAdminAuth();
  const [messages, setMessages] = useState<CMSMessage[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedMessage, setSelectedMessage] = useState<CMSMessage | null>(null);
  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const list = await fetchAllCMSMessages();
    setMessages(list);
    if (list.length > 0 && !selectedMessage) {
      setSelectedMessage(list[0]);
      setNoteInput(list[0].internalNotes || "");
    }
  };

  const handleSelect = (m: CMSMessage) => {
    setSelectedMessage(m);
    setNoteInput(m.internalNotes || "");
  };

  const handleStatusChange = async (newStatus: "New" | "Contacted" | "Qualified" | "Closed") => {
    if (!selectedMessage) return;
    await updateCMSMessageStatus(selectedMessage.id, newStatus, noteInput, adminUser?.email || "admin");
    setSelectedMessage({ ...selectedMessage, status: newStatus });
    loadMessages();
  };

  const handleSaveNotes = async () => {
    if (!selectedMessage) return;
    await updateCMSMessageStatus(selectedMessage.id, selectedMessage.status, noteInput, adminUser?.email || "admin");
    setSelectedMessage({ ...selectedMessage, internalNotes: noteInput });
    loadMessages();
  };

  const filteredMessages = messages.filter(m => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.projectType?.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (statusFilter !== "all" && m.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          Client Consultation Inquiries &amp; Leads
        </h1>
        <p className="text-xs text-stone-400 font-mono mt-1">
          Direct project inquiries received from public architectural contact forms and consultations
        </p>
      </div>

      {/* Filter and Search */}
      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
          <input
            type="text"
            placeholder="Search leads by client name, phone, plot..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-300 text-xs font-mono focus:outline-none focus:border-amber-500 w-full sm:w-auto"
        >
          <option value="all">All Inquiries ({messages.length})</option>
          <option value="New">New / Uncontacted</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified Site Project</option>
          <option value="Closed">Closed / Concluded</option>
        </select>
      </div>

      {/* Master-Detail Split Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List Column */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-lg flex flex-col h-[650px]">
          <div className="p-3.5 border-b border-stone-800 text-xs font-mono uppercase text-stone-400">
            Consultation Queue ({filteredMessages.length})
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-stone-800/60">
            {filteredMessages.map((m) => {
              const isSelected = selectedMessage?.id === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => handleSelect(m)}
                  className={`p-4 cursor-pointer transition-colors ${
                    isSelected ? "bg-amber-500/10 border-l-2 border-amber-500" : "hover:bg-stone-800/40"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-200">{m.name}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      m.status === "New" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold" :
                      m.status === "Qualified" ? "bg-emerald-500/20 text-emerald-300" : "bg-stone-800 text-stone-400"
                    }`}>
                      {m.status}
                    </span>
                  </div>

                  <div className="text-[11px] text-amber-400/90 font-mono mt-0.5">
                    {m.projectType || "Architecture Inquiry"}
                  </div>

                  <p className="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                    {m.message}
                  </p>

                  <div className="text-[10px] font-mono text-stone-400 mt-2 flex items-center justify-between">
                    <span>{m.location || "Ajmer"}</span>
                    <span>{new Date(m.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Message Details & Actions (2 cols wide) */}
        <div className="lg:col-span-2 bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
          {selectedMessage ? (
            <div className="space-y-6">
              {/* Client Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-stone-800 gap-3">
                <div>
                  <h2 className="font-serif text-xl font-bold text-stone-100">
                    {selectedMessage.name}
                  </h2>
                  <div className="text-xs font-mono text-stone-400 mt-1 flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-amber-400" /> {selectedMessage.phone}</span>
                    {selectedMessage.email && (
                      <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-amber-400" /> {selectedMessage.email}</span>
                    )}
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-amber-400" /> {selectedMessage.location || "Ajmer"}</span>
                  </div>
                </div>

                {/* Status Switcher */}
                <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-xl border border-stone-800 font-mono text-xs">
                  {(["New", "Contacted", "Qualified", "Closed"] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(st)}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        selectedMessage.status === st
                          ? "bg-amber-500 text-stone-950 font-bold"
                          : "text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Dimensions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-stone-950 border border-stone-800 font-mono text-xs">
                <div>
                  <div className="text-stone-400 text-[10px] uppercase">Plot Size</div>
                  <div className="text-stone-200 font-medium mt-0.5">{selectedMessage.plotArea || "Not specified"}</div>
                </div>
                <div>
                  <div className="text-stone-400 text-[10px] uppercase">Typology</div>
                  <div className="text-stone-200 font-medium mt-0.5">{selectedMessage.projectType || "Residential"}</div>
                </div>
                <div>
                  <div className="text-stone-400 text-[10px] uppercase">Source</div>
                  <div className="text-stone-200 font-medium mt-0.5">{selectedMessage.source || "Website"}</div>
                </div>
                <div>
                  <div className="text-stone-400 text-[10px] uppercase">Received</div>
                  <div className="text-stone-200 font-medium mt-0.5">{new Date(selectedMessage.createdAt).toLocaleString()}</div>
                </div>
              </div>

              {/* Message Copy */}
              <div>
                <div className="text-xs font-mono uppercase text-stone-400 mb-2">
                  Client Stated Requirements:
                </div>
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                  "{selectedMessage.message}"
                </div>
              </div>

              {/* Practice Internal Notes */}
              <div>
                <div className="text-xs font-mono uppercase text-stone-400 mb-2 flex items-center justify-between">
                  <span>Practice Internal Notes &amp; Follow-up Actions</span>
                  <button
                    onClick={handleSaveNotes}
                    className="text-amber-400 hover:text-amber-300 font-mono text-xs flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Notes</span>
                  </button>
                </div>
                <textarea
                  rows={4}
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="Record call summary, quotation discussed, site inspection date, drawings assigned to team member..."
                  className="w-full p-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-mono focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-stone-400 font-mono text-xs">
              Select an inquiry from the consultation queue to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
