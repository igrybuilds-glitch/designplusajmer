import React, { useState, useEffect } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  ShieldAlert, 
  Search, 
  RefreshCw, 
  Clock, 
  UserCheck, 
  Key, 
  FileEdit, 
  Trash2 
} from "lucide-react";

interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  adminUser?: string;
  ip?: string;
  details?: any;
}

export const AdminAuditLogPage: React.FC = () => {
  const { adminToken } = useAdminAuth();
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilter, setActionFilter] = useState<string>("all");

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/audit-log", {
        headers: adminToken ? { Authorization: `Bearer ${adminToken}` } : {}
      });
      if (res.ok) {
        const data = await res.json();
        setLogs(data.logs || []);
      }
    } catch (err) {
      console.warn("Failed to load audit logs:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredLogs = logs.filter((log) => {
    const matchesSearch = 
      (log.adminUser || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (log.action || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      JSON.stringify(log.details || {}).toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (actionFilter !== "all" && !log.action.includes(actionFilter)) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Immutable Security &amp; Activity Audit Log
          </h1>
          <p className="text-xs text-stone-400 font-mono mt-1">
            Complete traceability of authentication events, CMS mutations, and administrative actions
          </p>
        </div>

        <button
          onClick={fetchLogs}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-mono text-xs transition-colors shrink-0 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${loading ? "animate-spin" : ""}`} />
          <span>Refresh Logs</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
          <input
            type="text"
            placeholder="Search audit trail by user, IP, or details..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>

        <select
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-300 text-xs font-mono focus:outline-none focus:border-amber-500 w-full sm:w-auto"
        >
          <option value="all">All Action Types ({logs.length})</option>
          <option value="LOGIN">Authentication Events</option>
          <option value="PROJECT">Project CMS Events</option>
          <option value="BLOG">Journal CMS Events</option>
          <option value="MEDIA">Media Library Events</option>
          <option value="PASSWORD">Security Changes</option>
        </select>
      </div>

      {/* Audit Log Table */}
      <div className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-950/80 border-b border-stone-800 text-[11px] font-mono uppercase tracking-wider text-stone-400">
              <tr>
                <th className="px-5 py-3.5">Timestamp (UTC)</th>
                <th className="px-4 py-3.5">Action Code</th>
                <th className="px-4 py-3.5">Administrator</th>
                <th className="px-4 py-3.5">Network IP</th>
                <th className="px-5 py-3.5">Audit Event Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60 font-mono text-xs">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-stone-400">
                    No activity records found.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => {
                  const isAuthFail = log.action.includes("FAILURE") || log.action.includes("LOCKOUT");
                  const isAuthSuccess = log.action.includes("LOGIN_SUCCESS");
                  return (
                    <tr key={log.id} className="hover:bg-stone-800/30 transition-colors">
                      <td className="px-5 py-4 text-stone-300 whitespace-nowrap">
                        {new Date(log.timestamp).toLocaleString()}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          isAuthFail ? "bg-rose-500/20 text-rose-300 border border-rose-500/40" :
                          isAuthSuccess ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" :
                          "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                        }`}>
                          {log.action}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-stone-200">
                        {log.adminUser || "system"}
                      </td>

                      <td className="px-4 py-4 text-stone-400">
                        {log.ip || "127.0.0.1"}
                      </td>

                      <td className="px-5 py-4 text-stone-300 max-w-xs truncate" title={JSON.stringify(log.details || {})}>
                        {JSON.stringify(log.details || {})}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
