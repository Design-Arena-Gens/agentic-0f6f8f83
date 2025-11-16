const supplies = [
  {
    item: "Vacutainers",
    stock: "320",
    threshold: "200",
  },
  {
    item: "Covid PCR kits",
    stock: "140",
    threshold: "100",
  },
  {
    item: "Cold chain boxes",
    stock: "18",
    threshold: "20",
  },
];

export default function InventoryPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Inventory & supplies</h2>
      <p className="subtext">Autonomous restocking predictions and alerts.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
        {supplies.map((supply) => (
          <div key={supply.item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">{supply.item}</p>
            <p className="mt-2">On hand: {supply.stock}</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">Reorder at {supply.threshold}</p>
            <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Create purchase order
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
