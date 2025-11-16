export default function AppointmentCasePage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Appointment: Alex Rivera • CASE-12345</h2>
      <p className="subtext">Telemedicine • 16 Jul 2024 • 20 minutes</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-sm text-slate-600">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-800">Visit agenda</p>
            <ul className="mt-3 list-disc space-y-2 pl-4">
              <li>Review glucose trends and recent lab results.</li>
              <li>Address nausea after morning medication.</li>
              <li>Plan next HbA1c and adjust lifestyle goals.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-800">Clinical notes</p>
            <textarea
              rows={6}
              placeholder="Document assessments, plans, and follow-up actions. Templates auto-apply coding hints."
              className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
            />
            <button className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              Save note
            </button>
          </div>
        </div>
        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Snapshot</p>
          <ul className="mt-3 space-y-2">
            <li>Age 42 • Type 2 diabetes • Hypertension</li>
            <li>Medications: Metformin, Losartan, Atorvastatin</li>
            <li>Last labs: HbA1c 6.8 · LDL 86</li>
            <li>Devices: Dexcom G7, Withings BP</li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">Next steps auto-shared with patient</p>
        </aside>
      </div>
    </section>
  );
}
