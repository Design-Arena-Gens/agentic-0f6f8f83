const technicians = [
  {
    name: "Rina Patel",
    shift: "06:00 AM – 02:00 PM",
    assignments: "Home pickups",
  },
  {
    name: "Mark Chen",
    shift: "09:00 AM – 05:00 PM",
    assignments: "PCR lab",
  },
  {
    name: "Sofia Gomez",
    shift: "11:00 AM – 07:00 PM",
    assignments: "Pathology",
  },
];

export default function TechnicianAssignmentPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Technician assignment</h2>
      <p className="subtext">Balance workloads and dispatch field teams efficiently.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
        {technicians.map((tech) => (
          <div key={tech.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">{tech.name}</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">{tech.shift}</p>
            <p className="mt-2 text-sm">{tech.assignments}</p>
            <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Reassign
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
