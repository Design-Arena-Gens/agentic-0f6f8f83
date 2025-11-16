import { StatsGrid } from "@/components/stats-grid";
import { Timeline } from "@/components/timeline";

const careTimeline = [
  {
    id: "lab",
    title: "Blood work results available",
    timestamp: "Today • 09:15 AM",
    description: "Lab partner MedLab Central uploaded your CBC & Lipid profile.",
    status: "success" as const,
  },
  {
    id: "rx",
    title: "Dr. Amara updated prescription",
    timestamp: "Yesterday • 05:10 PM",
    description: "Added Vitamin D booster and adjusted dosage of Metformin.",
    status: "info" as const,
  },
  {
    id: "followup",
    title: "Telemedicine follow-up scheduled",
    timestamp: "Tue, 16 Jul • 02:00 PM",
    description: "Virtual consult to review recovery progress.",
  },
];

const stats = [
  {
    label: "Upcoming visit",
    value: "Dr. Amara · 16 Jul",
    helperText: "Telemedicine · 2:00 PM",
    accent: "text-sky-600",
  },
  {
    label: "Medication adherence",
    value: "94%",
    change: { value: "+6%", direction: "up" as const },
    helperText: "Taken 15 of 16 doses this week",
  },
  {
    label: "Labs in progress",
    value: "3",
    helperText: "Awaiting HbA1c • Thyroid • ECG interpretation",
  },
  {
    label: "Care tasks",
    value: "2 pending",
    helperText: "Track water intake · Complete symptom survey",
  },
];

const tasks = [
  {
    id: "hydration",
    label: "Log today\'s hydration levels",
    type: "Daily habit",
    due: "Due in 2 hrs",
  },
  {
    id: "survey",
    label: "Complete post-surgery symptom survey",
    type: "Questionnaire",
    due: "Due by tonight",
  },
  {
    id: "insurance",
    label: "Upload cashless insurance card",
    type: "Insurance",
    due: "Optional",
  },
];

export default function PatientDashboardPage() {
  return (
    <div className="space-y-8">
      <StatsGrid stats={stats} />

      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <article className="glass-panel bg-white/95 p-6">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="section-heading">This week&apos;s priorities</h2>
              <p className="subtext">Complete these to stay on track with your recovery goals.</p>
            </div>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
              Mark all done
            </button>
          </header>
          <ul className="mt-6 space-y-4">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800">{task.label}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-400">{task.type}</p>
                </div>
                <span className="text-xs font-semibold text-sky-600">{task.due}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Upcoming telemedicine visit</h2>
          <div className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Dr. Amara Desai • Endocrinologist</p>
            <div className="flex items-center justify-between">
              <span>Tue, 16 Jul · 02:00 PM</span>
              <button className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-600">
                Join test call
              </button>
            </div>
            <ul className="list-disc space-y-2 pl-4">
              <li>Keep blood pressure log ready for review.</li>
              <li>Update medication tracker before session.</li>
              <li>Invite family caregiver to join call.</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Timeline items={careTimeline} title="Care timeline" />
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Next best actions</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="font-semibold text-slate-800">Schedule HbA1c test repeat</p>
              <p className="subtext">Recommended every 3 months to track diabetes control.</p>
              <button className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                Book lab visit
              </button>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="font-semibold text-slate-800">Enroll in nutrition coaching</p>
              <p className="subtext">Personalized meal plans aligned with your latest labs.</p>
              <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                View programs
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
