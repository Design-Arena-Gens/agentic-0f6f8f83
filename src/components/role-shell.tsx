"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";
import type { RoleConfig } from "@/types/navigation";
import clsx from "clsx";

interface RoleShellProps {
  role: string;
  config: RoleConfig;
  children: ReactNode;
}

export function RoleShell({ role, config, children }: RoleShellProps) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-10 lg:px-12">
      <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
        <div
          className={clsx(
            "absolute inset-0 z-0 bg-gradient-to-r",
            config.theme.gradientFrom,
            config.theme.gradientTo,
            "opacity-80"
          )}
          aria-hidden
        />
        <div className="relative z-10 grid gap-10 p-10 lg:grid-cols-[1.8fr_1fr]">
          <div className="space-y-5 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
              {config.subtitle}
            </div>
            <h1 className="text-3xl font-semibold sm:text-4xl">{config.title}</h1>
            <p className="max-w-2xl text-base text-white/80">{config.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              {config.quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={clsx(
                    "group inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition",
                    action.emphasis === "primary"
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-transparent text-white hover:bg-white/15"
                  )}
                >
                  <Icon
                    name={action.icon}
                    className={clsx(
                      "h-4 w-4",
                      action.emphasis === "primary" ? "text-sky-600" : "text-white"
                    )}
                  />
                  <span>{action.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="glass-panel bg-white/90">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Need to switch?</p>
                <p className="text-base font-medium text-slate-900">Choose a different workspace.</p>
              </div>
              <Icon name="sparkle" className="h-5 w-5 text-sky-500" />
            </div>
            <div className="mt-6 space-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                <Icon name="users" className="h-4 w-4 text-white" />
                Role Selection
              </Link>
              <Link
                href="/auth/settings"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
              >
                <Icon name="settings" className="h-4 w-4 text-slate-400" />
                Manage account preferences
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[19rem_1fr] xl:grid-cols-[22rem_1fr]">
        <aside>
          <nav className="glass-panel sticky top-8 flex max-h-[80vh] flex-col overflow-hidden bg-white/90 p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {role} navigation
            </span>
            <div className="mt-4 flex-1 space-y-6 overflow-y-auto pr-2">
              {config.nav.map((section) => (
                <div key={section.title} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {section.title}
                  </p>
                  <ul className="space-y-2">
                    {section.items.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={clsx(
                              "group flex items-start gap-3 rounded-2xl border px-3 py-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                              active
                                ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                                : "border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 hover:bg-white"
                            )}
                          >
                            <Icon
                              name={item.icon}
                              className={clsx(
                                "mt-0.5 h-4 w-4 flex-none",
                                active ? "text-white" : "text-sky-500"
                              )}
                            />
                            <span className="flex-1 text-left font-medium">
                              {item.label}
                              {item.badge ? (
                                <span className="ml-2 inline-flex rounded-full bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-600">
                                  {item.badge}
                                </span>
                              ) : null}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <section className="mt-6 space-y-4">
            {config.resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="glass-panel flex gap-4 bg-white/95 p-6 transition hover:shadow-2xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
                  <Icon name={resource.icon} className="h-5 w-5 text-sky-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{resource.title}</h3>
                  <p className="text-sm text-slate-500">{resource.description}</p>
                </div>
              </Link>
            ))}
          </section>
        </aside>

        <div className="space-y-10">
          {children}
        </div>
      </div>
    </div>
  );
}
