const templates = [
  {
    name: "Medication refill reminder",
    audience: "Patients",
    channels: "Email, SMS, WhatsApp",
  },
  {
    name: "Lab downtime advisory",
    audience: "Labs",
    channels: "SMS, In-app",
  },
  {
    name: "Emergency drill",
    audience: "Hospitals",
    channels: "Push, Voice",
  },
];

export default function BroadcastNotificationsPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Broadcast notifications</h2>
      <p className="subtext">Deliver multi-channel communications with audit-ready logs.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
        {templates.map((template) => (
          <div key={template.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">{template.name}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Audience: {template.audience}</p>
            <p className="mt-2 text-sm">Channels: {template.channels}</p>
            <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Launch campaign
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
