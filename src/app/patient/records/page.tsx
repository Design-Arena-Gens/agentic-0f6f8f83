import { Timeline } from "@/components/timeline";

const items = [
  {
    id: "report",
    title: "CBC & Lipid profile",
    timestamp: "12 Jul 2024",
    description: "Uploaded by MedLab Central and shared with Dr. Desai.",
    status: "success" as const,
  },
  {
    id: "discharge",
    title: "Discharge summary",
    timestamp: "02 Jul 2024",
    description: "Hospitalized at AviCure Specialty, includes surgeon notes.",
    status: "info" as const,
  },
  {
    id: "scan",
    title: "Cardiac stress test",
    timestamp: "19 Jun 2024",
    description: "Uploaded by HealthPlus Diagnostics.",
  },
];

export default function MedicalRecordsPage() {
  return (
    <div className="space-y-6">
      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Upload new record</h2>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <label
            htmlFor="record-upload"
            className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 px-6 py-10 text-center text-sm text-slate-500 transition hover:border-sky-400 hover:bg-sky-50"
          >
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Drag & drop files
            </span>
            <span className="text-sm text-slate-600">Drag PDFs, DICOM, or images here</span>
            <input id="record-upload" type="file" multiple className="hidden" />
          </label>
          <div className="flex min-w-[220px] flex-col gap-3 text-sm text-slate-600">
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left font-semibold text-slate-700">
              Connect Apple Health →
            </button>
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left font-semibold text-slate-700">
              Connect Fitbit →
            </button>
          </div>
        </div>
      </section>

      <Timeline title="Medical timeline" items={items} />
    </div>
  );
}
