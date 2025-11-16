const metrics = [
  {
    title: "Consult-to-follow-up",
    value: "82%",
    change: "+5% vs last month",
    detail: "Patients completing recommended follow-ups",
  },
  {
    title: "Rx adherence",
    value: "91%",
    change: "+3%",
    detail: "Self-reported plus connected pharmacy data",
  },
  {
    title: "Average response time",
    value: "11 min",
    change: "-4 min",
    detail: "Care team inbox triage",
  },
];

export default function DoctorAnalyticsPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.title} className="glass-panel bg-white/95 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Key metric</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{metric.title}</h2>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{metric.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-500">{metric.change}</p>
            <p className="mt-4 text-sm text-slate-600">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Revenue streams</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Consult fees</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">$12,480</p>
            <p className="text-xs uppercase tracking-wide text-emerald-500">+12% month to date</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Care plans</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">$4,120</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">Stable</p>
          </div>
        </div>
        <div className="mt-6 h-48 rounded-3xl bg-gradient-to-r from-emerald-100 to-sky-100" aria-hidden />
      </section>
    </div>
  );
}
