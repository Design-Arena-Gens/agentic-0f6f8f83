import { StatsGrid } from "@/components/stats-grid";

const stats = [
  {
    label: "Active users",
    value: "12,480",
    change: { value: "+1,140", direction: "up" as const },
    helperText: "Across patient, provider, and lab roles",
  },
  {
    label: "API uptime",
    value: "99.99%",
    helperText: "Last 7 days",
    accent: "text-emerald-500",
  },
  {
    label: "Open incidents",
    value: "0",
    helperText: "Incident response SLA holding steady",
  },
  {
    label: "Broadcast reach",
    value: "6,240",
    helperText: "Recipients engaged past 24 hrs",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <StatsGrid stats={stats} />
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Platform health</h2>
          <div className="mt-4 h-48 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500" aria-hidden />
          <p className="mt-4 text-sm text-slate-600">
            Observability pipelines monitor 120+ microservices with automated rollback if error budgets breach.
          </p>
        </article>
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Top partner integrations</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Epic • 2,340 daily sync jobs • No errors
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              PayU • 7,820 transactions • 0.2% failure rate
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Twilio • 18,240 OTP messages • 98% delivered in &lt; 5s
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
