export default function DoctorPrescriptionWriterPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Prescription writer</h2>
      <p className="subtext">Smart suggestions based on latest labs and medication history.</p>
      <form className="mt-6 space-y-4" noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wide text-slate-400">Medication</label>
            <input
              placeholder="Search medication"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wide text-slate-400">Dosage</label>
            <input
              placeholder="500mg"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wide text-slate-400">Frequency</label>
            <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none">
              <option>Once daily</option>
              <option>Twice daily</option>
              <option>Thrice daily</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wide text-slate-400">Duration</label>
            <input
              placeholder="14 days"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wide text-slate-400">Instructions</label>
          <textarea
            rows={3}
            placeholder="Take after meals. Monitor for GI discomfort."
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">AI suggestions</p>
          <ul className="mt-3 list-disc space-y-2 pl-4">
            <li>Consider Vitamin D booster based on deficiency trend.</li>
            <li>Review renal panel before increasing Metformin dosage.</li>
            <li>Add lifestyle coaching referral for adherence boost.</li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-100">
            Save draft
          </button>
          <button className="rounded-full bg-slate-900 px-6 py-3 text-white">
            Sign & share prescription
          </button>
        </div>
      </form>
    </section>
  );
}
