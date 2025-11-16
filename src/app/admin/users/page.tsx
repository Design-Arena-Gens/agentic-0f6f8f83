const users = [
  {
    name: "Alex Rivera",
    role: "Patient",
    status: "Active",
  },
  {
    name: "Dr. Amara Desai",
    role: "Doctor",
    status: "Active",
  },
  {
    name: "Rina Patel",
    role: "Lab",
    status: "Pending verification",
  },
];

export default function UserManagementPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">User management</h2>
      <p className="subtext">Adjust roles, enforce suspensions, or trigger re-verification.</p>
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        {users.map((user) => (
          <div key={user.name} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="font-semibold text-slate-800">{user.name}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{user.role}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{user.status}</span>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                Manage access
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
