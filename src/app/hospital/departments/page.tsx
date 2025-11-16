const departments = [
  {
    name: "Emergency",
    head: "Dr. Leah Kim",
    staff: "32 on shift",
    occupancy: "88%",
  },
  {
    name: "Cardiology",
    head: "Dr. Eric Park",
    staff: "18 on shift",
    occupancy: "76%",
  },
  {
    name: "Oncology",
    head: "Dr. Sofia Patel",
    staff: "22 on shift",
    occupancy: "69%",
  },
];

export default function DepartmentManagementPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Department management</h2>
      <p className="subtext">Monitor service line capacity, escalations, and leadership.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-slate-600">
        {departments.map((dept) => (
          <div key={dept.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold text-slate-900">{dept.name}</p>
            <p className="mt-2 text-sm">Head: {dept.head}</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">{dept.staff}</p>
            <p className="mt-2 text-xs font-semibold text-slate-500">Occupancy {dept.occupancy}</p>
            <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Open operations log
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
