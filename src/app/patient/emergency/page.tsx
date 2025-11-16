import Link from "next/link";

const responders = [
  {
    id: "ambulance",
    title: "Call ambulance",
    eta: "Arrives in ~9 minutes",
    coverage: "GPS-dispatched Advanced Life Support",
  },
  {
    id: "doctor",
    title: "Urgent doctor callback",
    eta: "Within 3 minutes",
    coverage: "On-call emergency physician",
  },
  {
    id: "nurse",
    title: "Nurse triage chat",
    eta: "Under 60 seconds",
    coverage: "Critical care nurse for symptom assessment",
  },
];

export default function EmergencyAssistancePage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel bg-rose-100/90 p-8 text-rose-900">
        <h2 className="text-2xl font-semibold">Emergency assistance</h2>
        <p className="mt-2 text-sm">
          If you are experiencing chest pain, difficulty breathing, or severe bleeding, please trigger ambulance dispatch immediately.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {responders.map((responder) => (
            <button
              key={responder.id}
              className="rounded-2xl bg-white/95 px-4 py-5 text-left text-sm font-semibold text-rose-900 shadow hover:bg-white"
            >
              <p>{responder.title}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-rose-500">{responder.eta}</p>
              <p className="mt-2 text-xs font-medium text-rose-600">{responder.coverage}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Emergency instructions</h2>
        <ol className="mt-4 space-y-3 text-sm text-slate-600">
          <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            Stay on the call until emergency responders confirm arrival.
          </li>
          <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            Keep medical records ready—responders will have secure read-only access.
          </li>
          <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            Update caregivers via Care Team Chat for real-time status sharing.
          </li>
        </ol>
        <Link
          href="/patient/chat"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
        >
          Notify care team
        </Link>
      </section>
    </div>
  );
}
