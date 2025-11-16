import Link from "next/link";

const slots = [
  {
    date: "Tue, 16 Jul",
    times: ["02:00 PM", "02:30 PM", "03:00 PM"],
  },
  {
    date: "Wed, 17 Jul",
    times: ["10:00 AM", "10:30 AM", "11:00 AM"],
  },
  {
    date: "Thu, 18 Jul",
    times: ["04:00 PM", "04:30 PM"],
  },
];

export default function BookingSlotsPage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel bg-white/95 p-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Step 1 of 3</p>
            <h2 className="text-2xl font-semibold text-slate-900">Choose a consultation slot</h2>
            <p className="subtext">Dr. Amara Desai • Telemedicine • 20-minute session</p>
          </div>
          <Link href="/patient/booking/payment" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
            Skip to payment
          </Link>
        </header>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            {slots.map((slot) => (
              <div key={slot.date} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-800">{slot.date}</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {slot.times.map((time) => (
                    <button
                      key={time}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-sky-400 hover:bg-sky-50"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Patient details</p>
            <dl className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <dt>Patient</dt>
                <dd className="font-semibold text-slate-800">Alex Rivera</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Reason</dt>
                <dd className="text-xs uppercase tracking-wide text-slate-400">Diabetes follow-up</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-slate-500">
              Need a caregiver? Share session link after confirmation.
            </p>
          </aside>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="/patient/doctors/dr-amara-desai" className="text-sm font-semibold text-sky-600">
            View doctor profile
          </Link>
          <Link
            href="/patient/booking/payment"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Continue to payment →
          </Link>
        </div>
      </section>
    </div>
  );
}
