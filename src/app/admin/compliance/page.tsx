const certifications = [
  {
    name: "HIPAA",
    status: "Active",
    renewal: "Dec 2024",
  },
  {
    name: "ISO 27001",
    status: "Surveillance audit",
    renewal: "Aug 2024",
  },
  {
    name: "SOC 2 Type II",
    status: "Completed",
    renewal: "Apr 2025",
  },
];

export default function ComplianceRepositoryPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Compliance & certifications</h2>
      <p className="subtext">Download attestations and track renewal milestones.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{cert.name}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">Renewal {cert.renewal}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{cert.status}</span>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                Download</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
