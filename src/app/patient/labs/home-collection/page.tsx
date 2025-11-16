const checklist = [
  "Keep government ID ready for verification",
  "Place fasting blood sample kit near entrance",
  "Avoid caffeine 2 hours before scheduled slot",
  "Inform building security about technician arrival",
];

export default function HomeCollectionPage() {
  return (
    <section className="glass-panel bg-white/95 p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Home sample collection</h2>
      <p className="subtext">MedLab Central • Technician arrival window 07:30 AM – 08:00 AM.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Live tracking</p>
            <p className="mt-2 text-sm">Technician currently 12 minutes away.</p>
            <div className="mt-3 h-24 rounded-2xl bg-gradient-to-r from-sky-100 to-slate-100" aria-hidden />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Preparation checklist</p>
            <ul className="mt-3 space-y-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Contact technician</p>
          <p className="mt-2 text-sm">Rina Patel · +1 555 234 5678</p>
          <button className="mt-3 w-full rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
            Send entry instructions
          </button>
          <button className="mt-3 w-full rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
            Mark technician arrived
          </button>
        </aside>
      </div>
    </section>
  );
}
