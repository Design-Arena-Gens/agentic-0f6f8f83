const claims = [
  {
    id: "CLM-4501",
    payer: "BlueShield",
    amount: "$4,210",
    status: "Verification",
  },
  {
    id: "CLM-4502",
    payer: "MediCare",
    amount: "$6,340",
    status: "Pending docs",
  },
  {
    id: "CLM-4503",
    payer: "AviCure Self-pay",
    amount: "$980",
    status: "Paid",
  },
];

export default function InsuranceProcessingPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Insurance claims processing</h2>
      <p className="subtext">Stay ahead of denials with automated documentation workflows.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {claims.map((claim) => (
          <div key={claim.id} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{claim.payer}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">Claim {claim.id}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700">{claim.amount}</span>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{claim.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
