import Link from "next/link";

export default function BookingPaymentPage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel bg-white/95 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Step 2 of 3</p>
        <h2 className="text-2xl font-semibold text-slate-900">Secure payment</h2>
        <p className="subtext">Your slot is reserved for 10 minutes. Complete payment via PayU to confirm.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <form className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <input type="radio" name="method" defaultChecked className="h-4 w-4 text-sky-600" />
                PayU UPI</label>
              <p className="mt-2 text-sm text-slate-600">Pay using UPI ID or QR scan. Auto-receipt shared instantly.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <input type="radio" name="method" className="h-4 w-4 text-sky-600" />
                Credit / Debit Card</label>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="card" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Card number
                  </label>
                  <input
                    id="card"
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="expiry" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Expiry
                  </label>
                  <input
                    id="expiry"
                    placeholder="MM/YY"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Cardholder name
                  </label>
                  <input
                    id="name"
                    placeholder="Alex Rivera"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="password"
                    inputMode="numeric"
                    placeholder="***"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <input type="radio" name="method" className="h-4 w-4 text-sky-600" />
                Net banking</label>
              <p className="mt-2 text-sm text-slate-600">Supports 35+ partner banks with instant reconciliation.</p>
            </div>
          </form>
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Order summary</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span>Consultation</span>
                <span>$35.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Platform fee</span>
                <span>$1.50</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tax</span>
                <span>$2.30</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>$38.80</span>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              PayU verifies payments via multi-factor authentication. We never store raw card details.
            </p>
            <Link
              href="/patient/booking/confirmation"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Pay & confirm booking →
            </Link>
            <Link
              href="/patient/booking/slots"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-600"
            >
              Back to slots
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
