const roster = [
  {
    name: "Dr. Amara Desai",
    role: "Endocrinologist",
    shift: "08:00 AM – 04:00 PM",
  },
  {
    name: "Nurse Priya Nair",
    role: "ICU Nurse",
    shift: "07:00 AM – 07:00 PM",
  },
  {
    name: "Paramedic John Roe",
    role: "Ambulance",
    shift: "06:00 AM – 02:00 PM",
  },
];

export default function StaffRosterPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Staff roster</h2>
      <p className="subtext">Live view of clinicians, nurses, and paramedics on duty.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {roster.map((member) => (
          <div key={member.name} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{member.name}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{member.role}</p>
            </div>
            <span className="text-xs font-semibold text-slate-500">{member.shift}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
