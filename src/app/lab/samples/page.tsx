const samples = [
  {
    id: "SMP-3421",
    patient: "Alex Rivera",
    test: "Diabetes bundle",
    status: "Processing",
    eta: "3 hrs",
  },
  {
    id: "SMP-3422",
    patient: "Nina Kapoor",
    test: "Thyroid panel",
    status: "Transit",
    eta: "Arriving",
  },
  {
    id: "SMP-3423",
    patient: "Leo Martinez",
    test: "Cardiac risk",
    status: "Awaiting pickup",
    eta: "30 mins",
  },
];

export default function SampleTrackingPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Sample tracking</h2>
      <p className="subtext">Real-time telemetry from courier devices and IoT lockers.</p>
      <div className="mt-6 space-y-4 text-sm text-slate-600">
        {samples.map((sample) => (
          <div key={sample.id} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{sample.id}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {sample.patient} • {sample.test}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                {sample.status}
              </span>
              <span className="text-xs font-semibold text-slate-500">ETA {sample.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
