const invoices = [
  {
    id: "INV-1201",
    partner: "AviCure Hospital",
    amount: "$1,240",
    status: "Due",
  },
  {
    id: "INV-1202",
    partner: "HealthPlus Diagnostics",
    amount: "$980",
    status: "Paid",
  },
  {
    id: "INV-1203",
    partner: "Insurance • MediCare",
    amount: "$2,430",
    status: "Processing",
  },
];

export default function LabBillingPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Billing & invoicing</h2>
      <p className="subtext">Track cashless claims, partner payouts, and collections.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{invoice.partner}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">Invoice {invoice.id}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-slate-700">{invoice.amount}</span>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{invoice.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
