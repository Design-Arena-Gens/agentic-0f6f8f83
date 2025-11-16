export default function SystemSettingsPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">System settings & integrations</h2>
      <p className="subtext">Control authentication, data retention, and partner APIs.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Authentication</p>
          <ul className="mt-3 space-y-2">
            <li>SSO (SAML / Okta) · Enabled</li>
            <li>Adaptive MFA · Enforced for admin & hospital roles</li>
            <li>Session timeout · 15 minutes of inactivity</li>
          </ul>
          <button className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
            Manage OAuth providers
          </button>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Data governance</p>
          <ul className="mt-3 space-y-2">
            <li>PHI retention • 7 years</li>
            <li>Audit log retention • Permanent</li>
            <li>Encryption • AES-256 at rest, TLS 1.3 in transit</li>
          </ul>
          <button className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
            Configure retention policies
          </button>
        </div>
      </div>
    </section>
  );
}
