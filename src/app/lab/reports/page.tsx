const reports = [
  {
    id: "RPT-8921",
    patient: "Alex Rivera",
    test: "Diabetes bundle",
    status: "Pending signature",
  },
  {
    id: "RPT-8922",
    patient: "Maya Lee",
    test: "Genetics panel",
    status: "Draft",
  },
  {
    id: "RPT-8923",
    patient: "Leo Martinez",
    test: "Cardiac risk",
    status: "Released",
  },
];

export default function LabReportsPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Report management</h2>
      <p className="subtext">Generate, review, and digitally sign lab interpretations.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {reports.map((report) => (
          <div key={report.id} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{report.patient}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{report.test}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                {report.status}
              </span>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                Open workspace
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
