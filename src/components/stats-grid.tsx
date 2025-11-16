import clsx from "clsx";

export interface StatMetric {
  label: string;
  value: string;
  change?: {
    value: string;
    direction: "up" | "down";
  };
  helperText?: string;
  accent?: string;
}

export function StatsGrid({ stats }: { stats: StatMetric[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="glass-panel flex flex-col justify-between bg-white/95 p-6"
          aria-live="polite"
        >
          <div className="flex items-start justify-between">
            <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
            {stat.change ? (
              <span
                className={clsx(
                  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
                  stat.change.direction === "up"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-rose-50 text-rose-500"
                )}
              >
                {stat.change.direction === "up" ? "▲" : "▼"} {stat.change.value}
              </span>
            ) : null}
          </div>
          <p className={clsx("mt-4 text-3xl font-semibold", stat.accent ?? "text-slate-900")}>{stat.value}</p>
          {stat.helperText ? (
            <p className="mt-2 text-sm text-slate-500">{stat.helperText}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
