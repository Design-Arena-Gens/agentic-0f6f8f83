import Link from "next/link";

export default function AuthLoginPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
      <section className="glass-panel bg-white/95 p-8">
        <header className="mb-6 space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">Log in or create an account</h2>
          <p className="text-sm text-slate-500">
            Use your preferred method below. We automatically provision secure profiles by role.
          </p>
        </header>
        <form className="space-y-5" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-600">
                Work email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@avicure.health"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-slate-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <label className="inline-flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
              Remember this device for 30 days
            </label>
            <Link href="/auth/forgot-password" className="font-semibold text-sky-600 hover:text-sky-700">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Continue with email
          </button>
        </form>
        <div className="mt-6 border-t border-slate-200 pt-6">
          <p className="text-sm font-semibold text-slate-600">Or sign in using</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <span aria-hidden>🔐</span> Google Workspace
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <span aria-hidden>🍎</span> Apple ID
            </button>
          </div>
        </div>
      </section>

      <section className="glass-panel flex flex-col justify-between gap-6 bg-sky-50/60 p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Passwordless via OTP</h3>
          <p className="text-sm text-slate-600">
            Receive a one-time passcode over SMS or WhatsApp. High-risk logins auto-trigger biometric re-verification.
          </p>
          <form className="space-y-3" noValidate>
            <label htmlFor="phone" className="text-sm font-semibold text-slate-600">
              Mobile number
            </label>
            <div className="flex items-center gap-3">
              <select
                aria-label="Country code"
                className="rounded-2xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
              >
                <option>+1</option>
                <option>+44</option>
                <option>+91</option>
              </select>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="98765 43210"
                className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
              />
            </div>
            <Link
              href="/auth/verify"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Send OTP
            </Link>
          </form>
        </div>

        <div className="rounded-2xl border border-sky-200 bg-white/80 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">New to AviCure?</p>
          <p className="mt-2 text-sm">
            Set up your profile in under 2 minutes. We auto-classify you into Patient, Doctor, Lab, Hospital, or Admin roles based on verified credentials.
          </p>
          <Link
            href="/auth/profile-setup"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            Begin onboarding →
          </Link>
        </div>
      </section>
    </div>
  );
}
