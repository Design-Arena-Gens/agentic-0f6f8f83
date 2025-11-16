const faqs = [
  {
    question: "How do I reach 24/7 emergency triage?",
    answer: "Tap Emergency Assist to connect with our triage nurses within 30 seconds. We coordinate ambulance dispatch if required.",
  },
  {
    question: "Can I reschedule a lab home collection?",
    answer: "Yes. Visit the Lab Booking Confirmation screen to adjust slots or request a new phlebotomist.",
  },
  {
    question: "Where are my insurance documents stored?",
    answer: "All uploads appear inside Medical Timeline with AES-256 encryption and role-based access controls.",
  },
];

const contactOptions = [
  {
    channel: "Live chat",
    target: "Care Navigator",
    eta: "< 2 min",
    note: "Ideal for follow-up questions and prescription clarifications.",
  },
  {
    channel: "Voice hotline",
    target: "Nurse Command",
    eta: "< 4 min",
    note: "Escalate urgent symptoms or procedure concerns.",
  },
  {
    channel: "Email",
    target: "support@avicure.health",
    eta: "Within 1 hr",
    note: "Share records, claims, or administrative queries.",
  },
];

export default function PatientSupportPage() {
  return (
    <div className="space-y-8">
      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Support center</h2>
        <p className="subtext">We monitor this queue round the clock with clinical and insurance specialists.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contactOptions.map((option) => (
            <div key={option.channel} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{option.channel}</p>
              <p className="text-xs uppercase tracking-wide text-sky-500">{option.target}</p>
              <p className="mt-2 text-sm">{option.note}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-emerald-500">Response {option.eta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel bg-white/95 p-6">
        <h2 className="section-heading">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-800">{item.question}</summary>
              <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glass-panel bg-slate-900/95 p-6 text-white">
        <h2 className="section-heading text-white">Status & SLA commitments</h2>
        <dl className="mt-4 grid gap-4 text-sm text-slate-200 md:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-widest text-sky-300">Platform uptime</dt>
            <dd className="text-lg font-semibold">99.98% • last 30 days</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-sky-300">Critical response</dt>
            <dd className="text-lg font-semibold">Under 45 seconds</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-sky-300">Average claim reimbursement</dt>
            <dd className="text-lg font-semibold">6.4 days</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
