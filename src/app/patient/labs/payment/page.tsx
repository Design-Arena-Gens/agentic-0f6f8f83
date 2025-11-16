import Link from "next/link";

export default function LabPaymentPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Step 2 of 3</p>
      <h2 className="text-2xl font-semibold text-slate-900">Complete diagnostic payment</h2>
      <p className="subtext">MedLab Central • Home sample collection • 17 Jul 2024</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <form className="space-y-5">
          <fieldset className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <legend className="text-sm font-semibold text-slate-700">UPI</legend>
            <label htmlFor="upi" className="mt-3 block text-xs uppercase tracking-wide text-slate-400">
              Enter UPI ID
            </label>
            <input
              id="upi"
              placeholder="name@upi"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
            />
            <button className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              Verify & pay
            </button>
          </fieldset>
          <fieldset className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <legend className="text-sm font-semibold text-slate-700">Credit / Debit Card</legend>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">Card number</label>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">Expiry</label>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">CVV</label>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">Name on card</label>
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none" />
              </div>
            </div>
          </fieldset>
        </form>
        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Summary</p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center justify-between">
              <span>Diabetes bundle</span>
              <span>$49.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>At-home collection</span>
              <span>$8.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Discount (AviCure Plus)</span>
              <span>- $5.00</span>
            </li>
          </ul>
          <div className="mt-4 flex items-center justify-between text-base font-semibold text-slate-900">
            <span>Total payable</span>
            <span>$52.00</span>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Secure payments via PayU with tokenized card storage and instant refunds on cancellations.
          </p>
          <Link
            href="/patient/labs/confirmation"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Confirm payment →
          </Link>
        </aside>
      </div>
    </section>
  );
}
