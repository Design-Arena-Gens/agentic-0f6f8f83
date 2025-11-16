const fleet = [
  {
    id: "AMB-01",
    crew: "John Roe · Priya Krishnan",
    status: "En route",
    eta: "4 mins",
  },
  {
    id: "AMB-02",
    crew: "Sarah Lim · Omar Patel",
    status: "Standby",
    eta: "Depot",
  },
  {
    id: "AMB-03",
    crew: "Carlos Diaz · Mei Wong",
    status: "Maintenance",
    eta: "45 mins",
  },
];

export default function AmbulanceFleetPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Ambulance fleet tracking</h2>
      <p className="subtext">Live GPS telemetry keeps emergency response on target.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {fleet.map((unit) => (
          <div key={unit.id} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{unit.id}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{unit.crew}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{unit.status}</span>
              <span className="text-xs font-semibold text-slate-500">{unit.eta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 h-48 rounded-3xl bg-gradient-to-r from-blue-100 to-sky-100" aria-hidden />
    </section>
  );
}
