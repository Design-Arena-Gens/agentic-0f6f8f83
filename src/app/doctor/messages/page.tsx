const threads = [
  {
    id: "alex",
    patient: "Alex Rivera",
    lastMessage: "Thank you doctor, will log post-meal reading.",
    status: "Awaiting response",
  },
  {
    id: "leo",
    patient: "Leo Martinez",
    lastMessage: "Uploaded ECG for review.",
    status: "Reviewed",
  },
  {
    id: "anika",
    patient: "Anika Mehra",
    lastMessage: "Experiencing mild dizziness in evenings.",
    status: "Needs triage",
  },
];

export default function DoctorMessagesPage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Patient communication center</h2>
      <p className="subtext">Assign messages to team members or respond directly.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-3">
          {threads.map((thread) => (
            <button
              key={thread.id}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-600 hover:border-sky-400 hover:bg-sky-50"
            >
              <p className="font-semibold text-slate-800">{thread.patient}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{thread.status}</p>
              <p className="mt-2 text-sm">{thread.lastMessage}</p>
            </button>
          ))}
        </aside>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Selected conversation</p>
          <div className="mt-3 space-y-3">
            <div className="rounded-2xl bg-white px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Alex Rivera • 09:42</p>
              <p className="mt-1 text-sm text-slate-700">Morning fasting glucose was 98 mg/dL.</p>
            </div>
            <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">
              <p className="text-xs uppercase tracking-wide text-slate-300">Dr. Amara • 09:45</p>
              <p className="mt-1 text-sm">Great progress! Continue with current plan.</p>
            </div>
          </div>
          <textarea
            rows={3}
            placeholder="Type your response"
            className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none"
          />
          <div className="mt-3 flex items-center justify-between">
            <button className="text-xs font-semibold text-slate-500">Insert template</button>
            <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              Send reply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
