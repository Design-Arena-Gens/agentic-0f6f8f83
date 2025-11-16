const weeklySchedule = [
  { day: "Monday", clinic: "9:00 AM – 12:00 PM", telemedicine: "2:00 PM – 5:00 PM" },
  { day: "Tuesday", clinic: "8:30 AM – 11:30 AM", telemedicine: "1:30 PM – 4:30 PM" },
  { day: "Wednesday", clinic: "Blocked for research", telemedicine: "Tele rounds 3:00 PM" },
  { day: "Thursday", clinic: "10:00 AM – 2:00 PM", telemedicine: "Virtual care 4:00 PM – 6:00 PM" },
  { day: "Friday", clinic: "9:30 AM – 12:30 PM", telemedicine: "1:30 PM – 3:30 PM" },
];

export default function DoctorSchedulePage() {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">Availability & schedule</h2>
      <p className="subtext">Syncs automatically with patient booking flow and Microsoft 365 calendars.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {weeklySchedule.map((entry) => (
          <div key={entry.day} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">{entry.day}</p>
            <p className="mt-2">Clinic: {entry.clinic}</p>
            <p className="mt-2">Telemedicine: {entry.telemedicine}</p>
            <button className="mt-3 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              Edit slots
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
        <p className="font-semibold text-slate-800">Advanced rules</p>
        <ul className="mt-3 list-disc space-y-2 pl-4">
          <li>Auto-block slots when lab reviews pending beyond 24 hours.</li>
          <li>Sync in-person capacity with hospital room scheduling.</li>
          <li>Enable telemedicine waitlist when &gt;10 patients join queue.</li>
        </ul>
      </div>
    </section>
  );
}
