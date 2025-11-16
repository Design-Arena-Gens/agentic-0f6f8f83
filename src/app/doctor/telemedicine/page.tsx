export default function TelemedicinePage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Telemedicine studio</h2>
      <p className="subtext">Launch video visits with integrated notes, eRx, and live vitals.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-sm text-white">
          <div className="h-64 rounded-2xl bg-slate-800" aria-label="Video feed placeholder" />
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-white">Live</span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-200">00:04:32</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white">End call</button>
            <button className="rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200">
              Mute mic
            </button>
            <button className="rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200">
              Toggle video
            </button>
          </div>
        </div>
        <aside className="space-y-4 text-sm text-slate-600">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">Patient vitals</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>BP 118/76</li>
              <li>Glucose 102 mg/dL</li>
              <li>Heart rate 72 bpm</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">Quick actions</p>
            <ul className="mt-2 space-y-2">
              <li>
                <button className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                  Share screen
                </button>
              </li>
              <li>
                <button className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                  Send prescription
                </button>
              </li>
              <li>
                <button className="w-full rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                  Invite caregiver
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
