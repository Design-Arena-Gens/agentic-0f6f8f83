import Link from "next/link";

export default function LabBookingConfirmationPage() {
  return (
    <section className="glass-panel bg-white/95 p-8">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-6 text-emerald-700">
        <h2 className="text-xl font-semibold">Lab booking confirmed</h2>
        <p className="mt-2 text-sm">Home sample pickup scheduled for 17 Jul 2024 · 07:30 AM.</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-600">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Preparation guide</p>
          <ul className="mt-2 list-disc space-y-2 pl-4">
            <li>Fast for 8 hours before sample collection.</li>
            <li>Continue regular medications unless instructed otherwise.</li>
            <li>Keep prior lab reports accessible for technician.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Assigned technician</p>
          <p className="mt-2 text-sm">Rina Patel • Verified phlebotomist • ID #LAB4321</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">OTP shared via SMS on arrival</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
        <Link href="/patient/labs/home-collection" className="text-sky-600 hover:text-sky-700">
          Manage pickup logistics →
        </Link>
        <Link href="/patient/records" className="rounded-full bg-slate-900 px-5 py-2 text-white">
          View results timeline
        </Link>
      </div>
    </section>
  );
}
