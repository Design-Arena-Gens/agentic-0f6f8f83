const encounters = [
  {
    date: "12 Jul 2024",
    type: "Lab",
    detail: "CBC + Lipid profile uploaded",
  },
  {
    date: "02 Jul 2024",
    type: "Inpatient",
    detail: "Discharge summary from AviCure Specialty",
  },
  {
    date: "19 Jun 2024",
    type: "Diagnostics",
    detail: "Cardiac stress test by HealthPlus Diagnostics",
  },
];

export default function EhrViewerPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">EHR viewer</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Encounter type</label>
          <select className="w-full rounded-2xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none">
            <option>All</option>
            <option>Clinic</option>
            <option>Lab</option>
            <option>Diagnostics</option>
            <option>Inpatient</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Date range</label>
          <input
            type="date"
            className="w-full rounded-2xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">Keywords</label>
          <input
            type="search"
            placeholder="e.g., HbA1c, discharge"
            className="w-full rounded-2xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-6 space-y-4 text-sm text-slate-600">
        {encounters.map((encounter) => (
          <div key={encounter.date} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">{encounter.detail}</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              {encounter.type} • {encounter.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
