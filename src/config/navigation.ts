import { type RoleRegistry } from "@/types/navigation";

export const roleRegistry: RoleRegistry = {
  patient: {
    id: "patient",
    title: "Patient Care Hub",
    subtitle: "Coordinate appointments, labs, and personal health goals",
    description:
      "Manage consultations, track prescriptions, and stay engaged with proactive care insights tailored to you.",
    theme: {
      gradientFrom: "from-sky-500",
      gradientTo: "to-cyan-400",
      ring: "ring-sky-100",
    },
    quickActions: [
      { label: "Book Doctor", href: "/patient/search", icon: "stethoscope", emphasis: "primary" },
      { label: "Upcoming Visits", href: "/patient/appointments", icon: "calendar" },
      { label: "Upload Records", href: "/patient/records", icon: "file" },
    ],
    nav: [
      {
        title: "Care Overview",
        items: [
          { label: "Dashboard", href: "/patient/dashboard", icon: "home" },
          { label: "Health Insights", href: "/patient/insights", icon: "heart" },
          { label: "Support Center", href: "/patient/support", icon: "lifeBuoy" },
          { label: "Emergency Assist", href: "/patient/emergency", icon: "ambulance" },
        ],
      },
      {
        title: "Doctor Visits",
        items: [
          { label: "Find Specialists", href: "/patient/search", icon: "stethoscope" },
          { label: "Doctor Profile", href: "/patient/doctors/dr-amara-desai", icon: "users" },
          { label: "Slot Selection", href: "/patient/booking/slots", icon: "calendar" },
          { label: "Pay & Confirm", href: "/patient/booking/payment", icon: "wallet" },
          { label: "Booking Success", href: "/patient/booking/confirmation", icon: "sparkle" },
          { label: "My Appointments", href: "/patient/appointments", icon: "book" },
        ],
      },
      {
        title: "Clinical Records",
        items: [
          { label: "e-Prescriptions", href: "/patient/prescriptions", icon: "file" },
          { label: "Medical Timeline", href: "/patient/records", icon: "clipboard" },
          { label: "Care Team Chat", href: "/patient/chat", icon: "message" },
        ],
      },
      {
        title: "Lab & Diagnostics",
        items: [
          { label: "Book Lab Tests", href: "/patient/labs", icon: "microscope" },
          { label: "Lab Payment", href: "/patient/labs/payment", icon: "wallet" },
          { label: "Booking Confirmation", href: "/patient/labs/confirmation", icon: "sparkle" },
          { label: "Home Collection", href: "/patient/labs/home-collection", icon: "ambulance" },
        ],
      },
    ],
    resources: [
      {
        title: "Telehealth Starter",
        description: "Prep your device for a smooth virtual consultation.",
        href: "/patient/support",
        icon: "phone",
      },
      {
        title: "Insurance Upload",
        description: "Securely attach policy documents for faster claims.",
        href: "/patient/records",
        icon: "shield",
      },
      {
        title: "Medication Reminders",
        description: "Stay on top of prescriptions and refill cycles.",
        href: "/patient/insights",
        icon: "bell",
      },
    ],
  },
  doctor: {
    id: "doctor",
    title: "Doctor Command Center",
    subtitle: "Deliver attentive care with streamlined daily workflows",
    description:
      "Monitor appointments, author prescriptions, and collaborate with the broader care team in real time.",
    theme: {
      gradientFrom: "from-emerald-500",
      gradientTo: "to-teal-400",
      ring: "ring-emerald-100",
    },
    quickActions: [
      { label: "Today's Schedule", href: "/doctor/dashboard", icon: "calendar", emphasis: "primary" },
      { label: "Write Rx", href: "/doctor/prescriptions", icon: "pill" },
      { label: "Triaging Inbox", href: "/doctor/messages", icon: "message" },
    ],
    nav: [
      {
        title: "Practice Overview",
        items: [
          { label: "Doctor Dashboard", href: "/doctor/dashboard", icon: "home" },
          { label: "Analytics & Earnings", href: "/doctor/analytics", icon: "chart" },
          { label: "Availability", href: "/doctor/schedule", icon: "calendar" },
        ],
      },
      {
        title: "Patient Care",
        items: [
          { label: "Appointment Notes", href: "/doctor/appointments/case-12345", icon: "clipboard" },
          { label: "Patient History", href: "/doctor/ehr", icon: "book" },
          { label: "Prescription Writer", href: "/doctor/prescriptions", icon: "pill" },
          { label: "Telemedicine Suite", href: "/doctor/telemedicine", icon: "phone" },
          { label: "Patient Messages", href: "/doctor/messages", icon: "message" },
        ],
      },
    ],
    resources: [
      {
        title: "Clinical Guidelines",
        description: "Evidence-based pathways surfaced at the point of care.",
        href: "/doctor/ehr",
        icon: "book",
      },
      {
        title: "Coding Shortcuts",
        description: "Use smart templates for compliant documentation.",
        href: "/doctor/appointments/case-12345",
        icon: "clipboard",
      },
      {
        title: "Peer Collaboration",
        description: "Discuss complex cases securely across teams.",
        href: "/doctor/messages",
        icon: "message",
      },
    ],
  },
  lab: {
    id: "lab",
    title: "Diagnostic Operations",
    subtitle: "Track sample flow, manage technicians, and publish reports",
    description:
      "Prioritize critical tests, coordinate pickups, and deliver accurate lab results with confidence.",
    theme: {
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-400",
      ring: "ring-purple-100",
    },
    quickActions: [
      { label: "Today’s Samples", href: "/lab/dashboard", icon: "microscope", emphasis: "primary" },
      { label: "Assign Technician", href: "/lab/technicians", icon: "users" },
      { label: "Upload Reports", href: "/lab/reports", icon: "file" },
    ],
    nav: [
      {
        title: "Operations",
        items: [
          { label: "Lab Dashboard", href: "/lab/dashboard", icon: "home" },
          { label: "Sample Tracking", href: "/lab/samples", icon: "microscope" },
          { label: "Technician Assignment", href: "/lab/technicians", icon: "users" },
          { label: "Inventory & Supplies", href: "/lab/inventory", icon: "clipboard" },
        ],
      },
      {
        title: "Finance",
        items: [
          { label: "Billing & Invoices", href: "/lab/billing", icon: "wallet" },
          { label: "Report Management", href: "/lab/reports", icon: "file" },
        ],
      },
    ],
    resources: [
      {
        title: "Quality Control",
        description: "Daily QC checklist keeps accuracy front and center.",
        href: "/lab/dashboard",
        icon: "shield",
      },
      {
        title: "Cold Chain Guide",
        description: "Ensure biologics stay within safe transport temps.",
        href: "/lab/samples",
        icon: "ambulance",
      },
      {
        title: "Insurance Billing",
        description: "Submit cashless claims seamlessly to partner payers.",
        href: "/lab/billing",
        icon: "wallet",
      },
    ],
  },
  hospital: {
    id: "hospital",
    title: "Hospital Command",
    subtitle: "Coordinate departments, resources, and emergency readiness",
    description:
      "Monitor bed occupancy, align rosters, and balance supply chains across the facility in real time.",
    theme: {
      gradientFrom: "from-blue-600",
      gradientTo: "to-sky-400",
      ring: "ring-blue-100",
    },
    quickActions: [
      { label: "Live Occupancy", href: "/hospital/dashboard", icon: "hospital", emphasis: "primary" },
      { label: "Manage Roster", href: "/hospital/staff", icon: "users" },
      { label: "Track Ambulance", href: "/hospital/ambulance", icon: "ambulance" },
    ],
    nav: [
      {
        title: "Facility Overview",
        items: [
          { label: "Admin Dashboard", href: "/hospital/dashboard", icon: "home" },
          { label: "Department Management", href: "/hospital/departments", icon: "hospital" },
          { label: "Staff Roster", href: "/hospital/staff", icon: "users" },
        ],
      },
      {
        title: "Operations",
        items: [
          { label: "Insurance Claims", href: "/hospital/insurance", icon: "shield" },
          { label: "Ambulance Fleet", href: "/hospital/ambulance", icon: "ambulance" },
          { label: "Pharmacy Stock", href: "/hospital/pharmacy", icon: "pill" },
        ],
      },
    ],
    resources: [
      {
        title: "Rapid Response",
        description: "Activate smart code-blue workflows in seconds.",
        href: "/hospital/ambulance",
        icon: "bell",
      },
      {
        title: "Credential Tracker",
        description: "Never miss a clinician license renewal again.",
        href: "/hospital/staff",
        icon: "shield",
      },
      {
        title: "Pharmacy Forecast",
        description: "Predict replenishment needs from live dispensing.",
        href: "/hospital/pharmacy",
        icon: "chart",
      },
    ],
  },
  admin: {
    id: "admin",
    title: "Platform Governance",
    subtitle: "Oversee compliance, messaging, and ecosystem integrations",
    description:
      "Maintain system resilience with granular controls across user access, audits, and partner APIs.",
    theme: {
      gradientFrom: "from-slate-900",
      gradientTo: "to-slate-600",
      ring: "ring-slate-200",
    },
    quickActions: [
      { label: "Global Metrics", href: "/admin/dashboard", icon: "chart", emphasis: "primary" },
      { label: "Manage Users", href: "/admin/users", icon: "users" },
      { label: "Send Broadcast", href: "/admin/notifications", icon: "bell" },
    ],
    nav: [
      {
        title: "Oversight",
        items: [
          { label: "Super Admin Dashboard", href: "/admin/dashboard", icon: "home" },
          { label: "Audit Logs", href: "/admin/audit", icon: "shield" },
          { label: "System Settings", href: "/admin/settings", icon: "settings" },
        ],
      },
      {
        title: "Engagement",
        items: [
          { label: "User Management", href: "/admin/users", icon: "users" },
          { label: "Broadcast Center", href: "/admin/notifications", icon: "bell" },
          { label: "Compliance Hub", href: "/admin/compliance", icon: "file" },
        ],
      },
    ],
    resources: [
      {
        title: "Integrations API",
        description: "Review sandbox credentials and live traffic.",
        href: "/admin/settings",
        icon: "settings",
      },
      {
        title: "Security Playbook",
        description: "Contain incidents with pre-approved workflows.",
        href: "/admin/audit",
        icon: "shield",
      },
      {
        title: "WhatsApp Alerts",
        description: "Sync omnichannel broadcasts to patient cohorts.",
        href: "/admin/notifications",
        icon: "message",
      },
    ],
  },
};
