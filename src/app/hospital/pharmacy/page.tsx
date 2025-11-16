const items = [
  {
    drug: "Norepinephrine",
    stock: "Low",
    action: "Reorder",
  },
  {
    drug: "Heparin",
    stock: "Adequate",
    action: "Monitor",
  },
  {
    drug: "Insulin",
    stock: "Optimal",
    action: "OK",
  },
];

export default function PharmacyStockPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Pharmacy stock</h2>
      <p className="subtext">Real-time stock levels synced with inpatient orders.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
        {items.map((item) => (
          <div key={item.drug} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">{item.drug}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">Status: {item.stock}</p>
            <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              {item.action === "Reorder" ? "Create PO" : "View details"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
