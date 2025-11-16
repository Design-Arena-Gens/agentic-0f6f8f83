import { StatsGrid } from "@/components/stats-grid";

const stats = [
  {
    label: "Bed occupancy",
    value: "78%",
    helperText: "ICU 92% • Ward 71% • Daycare 54%",
    change: { value: "+4%", direction: "up" as const },
  },
  {
    label: "Emergency wait",
    value: "12 mins",
    helperText: "Target 15 mins",
    accent: "text-emerald-500",
  },
  {
    label: "Surgeries today",
    value: "9",
    helperText: "3 ortho • 2 cardiac • 4 general",
  },
  {
    label: "Code blue readiness",
    value: "100%",
    helperText: "All crash carts verified",
  },
];

export default function HospitalDashboardPage() {
  return (
    <div className="space-y-8">
      <StatsGrid stats={stats} />
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Live occupancy heatmap</h2>
          <div className="mt-4 h-48 rounded-3xl bg-gradient-to-r from-blue-200 via-sky-100 to-white" aria-hidden />
          <p className="mt-4 text-sm text-slate-600">
            AI load-balances admissions between partner facilities to ensure no service line exceeds 90% threshold.
          </p>
        </article>
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Critical watchlist</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl border border-slate-200 bg-rose-50 px-4 py-3">
              ICU bed 12 requires ventilator maintenance within 2 hrs.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-amber-50 px-4 py-3">
              Pharmacy flagged low stock for norepinephrine. Reorder underway.
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
