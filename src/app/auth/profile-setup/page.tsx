import Link from "next/link";

export default function ProfileSetupPage() {
  return (
    <section className="glass-panel bg-white/95 p-10">
      <header className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Complete your profile</h2>
        <p className="text-sm text-slate-500">
          Help us personalize your experience, surface relevant providers, and pre-fill future forms securely.
        </p>
      </header>
      <form className="mt-8 space-y-6" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="full-name" className="text-sm font-semibold text-slate-600">
              Full name
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="Dr. Amara Desai"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="age" className="text-sm font-semibold text-slate-600">
              Age
            </label>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min={0}
              max={120}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-semibold text-slate-600">
              City / Region
            </label>
            <input
              id="city"
              type="text"
              placeholder="San Francisco, CA"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-semibold text-slate-600">
              Primary role
            </label>
            <select
              id="role"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="lab">Lab</option>
              <option value="hospital">Hospital</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-600">Upload prescriptions or credentials</label>
          <p className="text-sm text-slate-500">
            Supported formats: PDF, JPEG, PNG. We redact sensitive information automatically prior to analytics.
          </p>
          <div className="flex flex-wrap gap-4">
            <label
              htmlFor="upload"
              className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 px-6 py-10 text-center text-sm text-slate-500 transition hover:border-sky-400 hover:bg-sky-50"
            >
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Drag & drop files
              </span>
              <span className="text-sm text-slate-600">Upload up to 10 files • Max 25 MB each</span>
              <input id="upload" type="file" multiple className="hidden" />
            </label>
            <ul className="flex min-w-[220px] flex-1 flex-col gap-3 text-sm text-slate-500">
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                Recent: CBC_Report.pdf <span className="text-xs text-slate-400">(2.5 MB)</span>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                Prescription_May.avif <span className="text-xs text-slate-400">(1.2 MB)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="preferences" className="text-sm font-semibold text-slate-600">
              Care preferences
            </label>
            <textarea
              id="preferences"
              rows={3}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
              placeholder="e.g., Female gynecologist preferred, virtual follow-ups on Fridays"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="comms" className="text-sm font-semibold text-slate-600">
              Communication channels
            </label>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-sky-600" />
                Email updates & reminders
              </label>
              <label className="mt-3 flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600" />
                WhatsApp alerts
              </label>
              <label className="mt-3 flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600" />
                Voice calls for emergencies only
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/auth/login" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
            Back to login
          </Link>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Save profile & continue
          </button>
        </div>
      </form>
    </section>
  );
}
