interface TimelineItem {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  status?: "success" | "warning" | "info";
}

const statusClasses = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  info: "bg-sky-500",
};

export function Timeline({ items, title }: { items: TimelineItem[]; title: string }) {
  return (
    <section className="glass-panel bg-white/95 p-6">
      <h2 className="section-heading">{title}</h2>
      <ol className="mt-6 space-y-6">
        {items.map((item, index) => (
          <li key={item.id} className="relative pl-8">
            <span className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-slate-300" aria-hidden />
            {index !== items.length - 1 ? (
              <span className="absolute left-1.5 top-5 h-full w-px bg-slate-200" aria-hidden />
            ) : null}
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold text-slate-800">{item.title}</p>
              {item.status ? (
                <span
                  className={`${statusClasses[item.status]} inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold text-white`}
                >
                  {item.status}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{item.timestamp}</p>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
