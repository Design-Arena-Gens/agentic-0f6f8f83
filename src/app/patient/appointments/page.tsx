import { DataTable } from "@/components/data-table";

const columns = [
  { key: "date", header: "Date" },
  { key: "type", header: "Type" },
  { key: "provider", header: "Provider" },
  { key: "status", header: "Status", align: "center" as const },
  { key: "actions", header: "Actions", align: "right" as const },
];

const rows = [
  {
    id: "1",
    cells: {
      date: "16 Jul · 02:00 PM",
      type: "Telemedicine",
      provider: "Dr. Amara Desai",
      status: <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">Confirmed</span>,
      actions: <button className="text-sm font-semibold text-sky-600">Join call</button>,
    },
  },
  {
    id: "2",
    cells: {
      date: "21 Jul · 09:30 AM",
      type: "Lab visit",
      provider: "MedLab Central",
      status: <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">Preparation</span>,
      actions: <button className="text-sm font-semibold text-sky-600">Reschedule</button>,
    },
  },
  {
    id: "3",
    cells: {
      date: "02 Aug · 11:15 AM",
      type: "Clinic",
      provider: "Dr. Eric Park",
      status: <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Waitlist</span>,
      actions: <button className="text-sm font-semibold text-sky-600">Manage</button>,
    },
  },
];

export default function PatientAppointmentsPage() {
  return (
    <section>
      <DataTable caption="Appointments & bookings" columns={columns} rows={rows} />
    </section>
  );
}
