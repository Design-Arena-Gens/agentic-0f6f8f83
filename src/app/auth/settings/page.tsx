export default function AccountSettingsPage() {
  return (
    <section className="glass-panel bg-white/95 p-10">
      <h2 className="text-2xl font-semibold text-slate-900">Account security preferences</h2>
      <p className="mt-2 text-sm text-slate-500">
        Manage the safeguards that protect your AviCure account across devices and roles.
      </p>
      <div className="mt-8 space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Multi-factor authentication</h3>
          <p className="mt-2 text-sm text-slate-600">
            Enforce step-up checks when signing in from new devices or sensitive hospital networks.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-sky-600" />
              Email confirmation links
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-sky-600" />
              SMS and WhatsApp codes
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600" />
              Security key (FIDO2 / Passkey)
            </label>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Session control</h3>
          <p className="mt-2 text-sm text-slate-600">
            Review active sessions across mobile, desktop, and hospital kiosks.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
              <span>MacBook Pro · Chrome · San Francisco</span>
              <button className="text-sm font-semibold text-sky-600">Sign out</button>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
              <span>iPhone · AviCure Mobile · Last active 2 mins ago</span>
              <button className="text-sm font-semibold text-sky-600">Sign out</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
