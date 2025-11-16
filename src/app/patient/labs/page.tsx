import Link from "next/link";

const labPanels = [
  {
    id: "diabetes",
    title: "Diabetes management bundle",
    tests: "HbA1c, Fasting Glucose, Lipid Profile",
    price: "$49",
    sample: "Home collection",
  },
  {
    id: "thyroid",
    title: "Thyroid advanced",
    tests: "TSH, FT3, FT4, Anti-TPO",
    price: "$59",
    sample: "Lab visit",
  },
  {
    id: "heart",
    title: "Cardiac risk",
    tests: "HS-CRP, Lipoprotein (a), ECG",
    price: "$79",
    sample: "Hybrid",
  },
];

export default function LabBookingPage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel bg-white/95 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Select tests</h2>
        <p className="subtext">Choose a lab bundle or build your own diagnostic panel.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {labPanels.map((panel) => (
            <div key={panel.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
              <p className="text-lg font-semibold text-slate-900">{panel.title}</p>
              <p className="mt-2">{panel.tests}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  {panel.price}
                </span>
                <span className="text-xs uppercase tracking-wide text-slate-400">{panel.sample}</span>
              </div>
              <button className="mt-4 w-full rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                Add to cart
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Sample type</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-white">
              Home collection
            </button>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Lab visit
            </button>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Hospital inpatient
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/patient/labs/payment" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
          Proceed to payment
        </Link>
        <Link href="/patient/labs/confirmation" className="text-sm font-semibold text-sky-600">
          View existing booking →
        </Link>
      </div>
    </div>
  );
}
