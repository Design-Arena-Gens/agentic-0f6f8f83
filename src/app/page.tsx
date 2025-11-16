import Link from "next/link";
import { Icon } from "@/components/icon";

const roles = [
  {
    id: "patient",
    title: "Patient",
    description: "Book appointments, manage prescriptions, and access personal health records.",
    href: "/patient/dashboard",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    id: "doctor",
    title: "Doctor",
    description: "Review charts, launch telemedicine visits, and coordinate with your care team.",
    href: "/doctor/dashboard",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    id: "lab",
    title: "Lab",
    description: "Monitor sample flow, assign technicians, and publish diagnostic reports securely.",
    href: "/lab/dashboard",
    accent: "from-purple-500 to-indigo-400",
  },
  {
    id: "hospital",
    title: "Hospital",
    description: "Oversee departments, rosters, pharmacy stock, and ambulance dispatch in real time.",
    href: "/hospital/dashboard",
    accent: "from-blue-600 to-sky-400",
  },
  {
    id: "admin",
    title: "Admin",
    description: "Manage global metrics, user governance, compliance, and broadcast communications.",
    href: "/admin/dashboard",
    accent: "from-slate-900 to-slate-600",
  },
];

export default function RoleSelection() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-20">
      <header className="glass-panel bg-white/90 p-10 text-slate-900">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-600">
              <Icon name="sparkle" className="h-4 w-4" />
              AviCure Healthcare Operating System
            </span>
            <div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Choose your workspace</h1>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                AviCure synchronizes patient journeys across clinics, labs, telemedicine, and population health. Pick the role that best matches how you engage with the platform.
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
              HIPAA-ready infrastructure with 256-bit encryption.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-500" aria-hidden />
              OAuth, passwordless OTP, and SSO supported at launch.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" aria-hidden />
              Accessibility-first design: WCAG 2.2 AA alignment.
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {roles.map((role) => (
          <article
            key={role.id}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition hover:shadow-2xl focus-within:ring-2 focus-within:ring-sky-500"
          >
            <div
              className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r ${role.accent} opacity-20`}
              aria-hidden
            />
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-slate-900">{role.title}</h2>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                {role.id}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{role.description}</p>
            <Link
              href={role.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Enter {role.title} Panel
              <Icon name="sparkle" className="h-4 w-4 text-white" />
            </Link>
          </article>
        ))}
      </section>

      <footer className="glass-panel bg-slate-900/95 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest">Unified Care Engine</p>
            <p className="mt-1 max-w-xl text-sm text-slate-200">
              AviCure connects appointments, diagnostics, billing, and population health into one orchestrated operating system. Switch roles anytime for a continuous, patient-first experience.
            </p>
          </div>
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100"
          >
            Continue to secure login
            <Icon name="shield" className="h-4 w-4 text-slate-700" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
