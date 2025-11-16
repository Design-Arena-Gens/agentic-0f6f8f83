import Link from "next/link";

export default function BookingConfirmationPage() {
  return (
    <section className="glass-panel bg-white/95 p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        ✅
      </div>
      <h1 className="mt-4 text-3xl font-semibold text-slate-900">Booking confirmed!</h1>
      <p className="mt-2 text-sm text-slate-600">
        Telemedicine with Dr. Amara Desai on Tue, 16 Jul at 02:00 PM.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Join link</p>
          <p className="mt-2 text-sm">We&apos;ll send a secure link 10 minutes before the visit.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Invoice</p>
          <p className="mt-2 text-sm">Receipt emailed to alex.rivera@avicure.health.</p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
        <Link
          href="/patient/appointments"
          className="rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-700"
        >
          View appointments
        </Link>
        <Link href="/patient/chat" className="text-sky-600 hover:text-sky-700">
          Message care team
        </Link>
      </div>
    </section>
  );
}
