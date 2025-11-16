const prescriptions = [
  {
    id: "rx-001",
    date: "12 Jul 2024",
    provider: "Dr. Amara Desai",
    medications: [
      "Metformin 500mg · Twice daily",
      "Vitamin D 2000 IU · Once daily",
      "Omega-3 1000mg · Evening",
    ],
    notes: "Review fasting glucose log in next consult.",
  },
  {
    id: "rx-002",
    date: "29 Jun 2024",
    provider: "Dr. Eric Park",
    medications: ["Atorvastatin 10mg · Night", "CoQ10 100mg · Morning"],
    notes: "Discuss lipid profile improvements in August clinic visit.",
  },
];

export default function PrescriptionsPage() {
  return (
    <section className="space-y-6">
      {prescriptions.map((rx) => (
        <article key={rx.id} className="glass-panel bg-white/95 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Prescription {rx.id}</h2>
              <p className="subtext">Issued {rx.date} · {rx.provider}</p>
            </div>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Download PDF
            </button>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {rx.medications.map((medication) => (
              <li key={medication} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                {medication}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Clinician note: {rx.notes}
          </p>
        </article>
      ))}
    </section>
  );
}
