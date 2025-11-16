import { StatsGrid } from "@/components/stats-grid";

const stats = [
  {
    label: "Today\'s consults",
    value: "12",
    change: { value: "+3", direction: "up" as const },
    helperText: "8 telemedicine · 4 in-person",
  },
  {
    label: "Pending notes",
    value: "5",
    change: { value: "-2", direction: "down" as const },
    helperText: "Across 3 specialties",
  },
  {
    label: "Critical alerts",
    value: "2",
    helperText: "One high-glucose alert · One ER handoff",
    accent: "text-rose-500",
  },
  {
    label: "Avg consult rating",
    value: "4.9",
    helperText: "Patients last 30 days",
  },
];

const agenda = [
  {
    time: "09:00 AM",
    patient: "Alex Rivera",
    type: "Telemedicine",
    status: "Ready",
  },
  {
    time: "09:30 AM",
    patient: "Leo Martinez",
    type: "Clinic",
    status: "Checked in",
  },
  {
    time: "10:15 AM",
    patient: "Anika Mehra",
    type: "Telemedicine",
    status: "Vitals pending",
  },
];

export default function DoctorDashboardPage() {
  return (
    <div className="space-y-8">
      <StatsGrid stats={stats} />
      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Today&apos;s agenda</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          {agenda.map((item) => (
            <li key={item.time} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div>
                <p className="font-semibold text-slate-800">{item.patient}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {item.type}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-700">{item.time}</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {item.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Clinical inbox</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="font-semibold text-slate-800">Lab review: Alex Rivera</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">New HbA1c results ready</p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="font-semibold text-slate-800">Referral request: Dr. Leah Kim</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">Cardiology consult for hypertension management</p>
            </li>
          </ul>
        </article>
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Care team broadcast</h2>
          <p className="mt-3 text-sm text-slate-600">
            Weekly virtual grand rounds highlighting metabolic case studies on Friday 4 PM. RSVP to join the panel.
          </p>
          <button className="mt-4 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            RSVP now
          </button>
        </article>
      </section>
    </div>
  );
}
