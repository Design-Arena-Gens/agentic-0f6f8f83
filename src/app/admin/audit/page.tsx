const logs = [
  {
    id: "log-1",
    actor: "System",
    action: "RLS policy updated for patient_records",
    time: "Today · 08:12",
  },
  {
    id: "log-2",
    actor: "Admin · Leah",
    action: "Broadcast notification sent to Lab role",
    time: "Today · 07:55",
  },
  {
    id: "log-3",
    actor: "API",
    action: "PayU webhook processed • Booking CONF-892",
    time: "Yesterday · 09:45",
  },
];

export default function AuditLogsPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Audit logs</h2>
      <p className="subtext">Immutable, tamper-evident ledger of administrative actions.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {logs.map((log) => (
          <div key={log.id} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="font-semibold text-slate-800">{log.action}</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">{log.actor}</p>
            <p className="mt-1 text-xs text-slate-500">{log.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
