import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <section className="glass-panel bg-white/95 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Reset your password</h2>
        <p className="mt-2 text-sm text-slate-500">
          We will send reset instructions to your registered email. Links remain valid for 20 minutes.
        </p>
        <form className="mt-6 space-y-4" noValidate>
          <div className="space-y-2">
            <label htmlFor="reset-email" className="text-sm font-semibold text-slate-600">
              Email address
            </label>
            <input
              id="reset-email"
              type="email"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
              placeholder="first.last@avicure.health"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Email reset link
          </button>
        </form>
        <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Password tips</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Use passphrases with at least four words.</li>
            <li>Avoid sharing credentials across roles or facilities.</li>
            <li>Enable multi-factor authentication on next sign-in.</li>
          </ul>
        </div>
        <Link href="/auth/login" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
          Back to login →
        </Link>
      </section>

      <section className="glass-panel bg-sky-50/60 p-8 text-sm text-slate-600">
        <h3 className="text-lg font-semibold text-slate-900">Need immediate support?</h3>
        <p className="mt-3">
          Our 24x7 command center can provision temporary access tokens after validating your identity.
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <span className="font-semibold text-slate-800">Support Hotline:</span> +1 800 AVI CURE
          </li>
          <li>
            <span className="font-semibold text-slate-800">Regional escalation:</span> security@avicure.health
          </li>
          <li>
            <span className="font-semibold text-slate-800">Status page:</span> status.avicure.health
          </li>
        </ul>
        <Link
          href="/auth/verify"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600"
        >
          Already have a code? Verify here →
        </Link>
      </section>
    </div>
  );
}
