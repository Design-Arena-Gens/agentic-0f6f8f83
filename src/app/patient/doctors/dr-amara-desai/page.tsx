import Link from "next/link";

const availability = [
  { day: "Mon", slots: "09:00 · 09:30 · 10:00" },
  { day: "Tue", slots: "02:00 · 02:30 · 03:00" },
  { day: "Wed", slots: "No slots" },
  { day: "Thu", slots: "04:00 · 04:30" },
  { day: "Fri", slots: "11:30 · 12:00 · 12:30" },
];

export default function DoctorProfilePage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel bg-white/95 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-slate-900">Dr. Amara Desai</h1>
            <p className="text-sm text-slate-600">
              Board-certified Endocrinologist • Clinical Lead at AviCure Metabolic Institute
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1">12 yrs experience</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Telemedicine ready</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Speaks English • Hindi</span>
            </div>
            <p className="text-sm text-slate-600">
              Dr. Desai specializes in complex diabetes management, thyroid disorders, and metabolic health. She leads the
              interdisciplinary virtual care team and collaborates with nutritionists, cardiologists, and lab partners to deliver
              personalized care plans.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-600">
                ⭐ 4.9 (420 reviews)
              </span>
              <Link
                href="/patient/booking/slots"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Book a visit
              </Link>
            </div>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600">
            <h2 className="text-base font-semibold text-slate-900">Consultation fees</h2>
            <dl className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <dt>Telemedicine (20 min)</dt>
                <dd className="font-semibold text-slate-900">$35</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Clinic visit (30 min)</dt>
                <dd className="font-semibold text-slate-900">$50</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Diabetes case review</dt>
                <dd className="font-semibold text-slate-900">$75</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
              PayU, Stripe, and insurance cashless accepted
            </p>
          </aside>
        </div>
      </section>

      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Weekly availability</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-5">
          {availability.map((day) => (
            <div key={day.day} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{day.day}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">{day.slots}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Clinical focus areas</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            Precision dosing guidance for insulin and GLP-1 therapies.
          </li>
          <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            Gestational diabetes management with digital monitoring.
          </li>
          <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            Thyroid optimization and autoimmune disorder coordination.
          </li>
          <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            Metabolic health reversal programs with weight management support.
          </li>
        </ul>
      </section>
    </div>
  );
}
