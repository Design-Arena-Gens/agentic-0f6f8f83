const insights = [
  {
    id: "glucose",
    title: "Blood sugar stability",
    detail: "Average fasting glucose at 96 mg/dL over last 14 days",
    trend: "+4% week over week",
    recommendation: "Maintain morning protein intake and continue walking routine.",
  },
  {
    id: "sleep",
    title: "Sleep recovery",
    detail: "7h 45m average tracked via Apple Health",
    trend: "+28 minutes vs prior week",
    recommendation: "Consider smart nudge for 11:00 PM wind-down.",
  },
  {
    id: "activity",
    title: "Activity score",
    detail: "8,920 average steps per day",
    trend: "Stable",
    recommendation: "Add two light strength sessions to boost metabolism.",
  },
];

const reminders = [
  {
    id: "rx",
    title: "Metformin 500mg",
    due: "Today • 08:00 PM",
    note: "Take with evening meal",
  },
  {
    id: "vitamin",
    title: "Vitamin D booster",
    due: "Tomorrow • 09:00 AM",
    note: "Newly added by Dr. Amara",
  },
  {
    id: "water",
    title: "Hydration goal",
    due: "Daily",
    note: "2.5L target • 62% completed",
  },
];

export default function PatientInsightsPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-3">
        {insights.map((insight) => (
          <article key={insight.id} className="glass-panel bg-white/95 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">Insight</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{insight.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{insight.detail}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-500">
              {insight.trend}
            </p>
            <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              {insight.recommendation}
            </p>
          </article>
        ))}
      </section>

      <section className="glass-panel bg-white/95 p-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="section-heading">Medication & lifestyle reminders</h2>
            <p className="subtext">Actionable prompts assembled by your care team AI coach.</p>
          </div>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
            Export to calendar
          </button>
        </header>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reminders.map((reminder) => (
            <li key={reminder.id} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{reminder.title}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{reminder.due}</p>
              <p className="mt-2 text-sm">{reminder.note}</p>
              <button className="mt-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                Mark complete
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Connected devices</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Dexcom G7 CGM</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-emerald-600">Streaming live</p>
            <p className="mt-2 text-sm">Sharing glucose updates every 5 minutes with your endocrinology team.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Withings BPM Connect</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-amber-500">Calibrating</p>
            <p className="mt-2 text-sm">Repeat measurement requested for consistent baseline before next visit.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
