import { StatsGrid } from "@/components/stats-grid";

const stats = [
  {
    label: "Samples in transit",
    value: "24",
    change: { value: "+6", direction: "up" as const },
    helperText: "12 home pickups • 12 clinic drop-offs",
  },
  {
    label: "Reports due",
    value: "8",
    helperText: "Average TAT 11.4 hrs",
    accent: "text-amber-500",
  },
  {
    label: "Critical flags",
    value: "1",
    helperText: "High potassium alert for ICU patient",
    accent: "text-rose-500",
  },
  {
    label: "Technicians on duty",
    value: "7",
    helperText: "2 field • 5 lab floor",
  },
];

export default function LabDashboardPage() {
  return (
    <div className="space-y-8">
      <StatsGrid stats={stats} />
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Workload distribution</h2>
          <div className="mt-4 h-40 rounded-3xl bg-gradient-to-r from-purple-200 to-indigo-100" aria-hidden />
          <p className="mt-4 text-sm text-slate-600">
            Automation routes priority samples to senior pathologists while routine panels auto-assign to overnight batch.
          </p>
        </article>
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Quality checkpoints</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Daily QC run completed at 07:30 AM • All metrics within tolerance
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Refrigeration temperature audit passed • 2 sensors recalibrated
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
