import Link from "next/link";

const filters = {
  specialties: ["Endocrinology", "Cardiology", "Dermatology", "General Physician"],
  languages: ["English", "Spanish", "Hindi", "Mandarin"],
  consultTypes: ["In-person", "Telemedicine", "Home Visit"],
};

const doctors = [
  {
    id: "amara",
    name: "Dr. Amara Desai",
    specialty: "Endocrinologist",
    experience: "12 years",
    fee: "$35",
    rating: "4.9",
    languages: "English • Hindi",
  },
  {
    id: "eric",
    name: "Dr. Eric Park",
    specialty: "Cardiologist",
    experience: "18 years",
    fee: "$42",
    rating: "4.8",
    languages: "English • Korean",
  },
];

const labs = [
  {
    id: "medlab",
    name: "MedLab Central",
    tests: "150+ diagnostics",
    pickup: "Home sample ready",
    rating: "4.7",
    turnAround: "12-18 hrs",
  },
  {
    id: "healthplus",
    name: "HealthPlus Diagnostics",
    tests: "80+ diagnostics",
    pickup: "Walk-in / Drive-thru",
    rating: "4.6",
    turnAround: "Same day",
  },
];

export default function PatientSearchPage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel bg-white/95 p-6">
        <form className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <label htmlFor="search" className="text-sm font-semibold text-slate-600">
              Search specialists or labs
            </label>
            <input
              id="search"
              type="search"
              placeholder="e.g., Diabetes, MRI, Telemedicine"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Specialty</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none">
                <option>All</option>
                {filters.specialties.map((specialty) => (
                  <option key={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Language</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none">
                <option>Any</option>
                {filters.languages.map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mode</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-3 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none">
                <option>All</option>
                {filters.consultTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Doctor results</h2>
          <ul className="mt-4 space-y-4">
            {doctors.map((doctor) => (
              <li key={doctor.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{doctor.name}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-400">{doctor.specialty}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    ⭐ {doctor.rating}
                  </span>
                </div>
                <p className="mt-3 text-sm">Experience: {doctor.experience}</p>
                <p className="text-sm">Languages: {doctor.languages}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white">
                    {doctor.fee} consultation
                  </span>
                  <Link
                    href={`/patient/doctors/${doctor.id === "amara" ? "dr-amara-desai" : doctor.id}`}
                    className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                  >
                    View profile →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-panel bg-white/95 p-6">
          <h2 className="section-heading">Partner labs</h2>
          <ul className="mt-4 space-y-4">
            {labs.map((lab) => (
              <li key={lab.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{lab.name}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-400">{lab.tests}</p>
                  </div>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
                    ⭐ {lab.rating}
                  </span>
                </div>
                <p className="mt-3 text-sm">Pickup: {lab.pickup}</p>
                <p className="text-sm">Turnaround: {lab.turnAround}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link href="/patient/labs" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
                    Book tests →
                  </Link>
                  <button className="rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100">
                    Share documents
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
