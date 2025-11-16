import Link from "next/link";

export default function OtpVerificationPage() {
  return (
    <section className="glass-panel bg-white/95 p-10">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">Verify one-time passcode</h2>
        <p className="text-sm text-slate-500">
          Enter the 6-digit code we sent to +1 987 654 3210. Codes expire in 90 seconds for your safety.
        </p>
      </header>
      <form className="mt-8 space-y-6">
        <div className="flex items-center gap-3 text-center">
          {[0, 1, 2, 3, 4, 5].map((slot) => (
            <input
              key={slot}
              inputMode="numeric"
              maxLength={1}
              className="h-16 w-14 rounded-2xl border border-slate-200 text-center text-2xl font-semibold text-slate-900 shadow-inner focus:border-sky-500 focus:outline-none"
              aria-label={`Digit ${slot + 1}`}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
          >
            Resend code
          </button>
          <span>Time remaining: 01:15</span>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Verify & continue
        </button>
      </form>
      <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600">
        <p className="font-semibold text-slate-800">Security best practices</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Codes never ask for credit card or password details.</li>
          <li>Only approve login requests initiated by you.</li>
          <li>Enable biometric verification for frictionless re-entry.</li>
        </ul>
      </div>
      <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <Link href="/auth/login" className="font-semibold text-sky-600 hover:text-sky-700">
          Back to login methods
        </Link>
        <Link href="/auth/profile-setup" className="font-semibold text-sky-600 hover:text-sky-700">
          Continue onboarding instead
        </Link>
      </footer>
    </section>
  );
}
