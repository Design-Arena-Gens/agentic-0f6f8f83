import type { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-10 px-4 py-16 sm:px-8">
      <div className="flex flex-col gap-3 text-center text-slate-700">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600">AviCure Access</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Unified authentication with strong security</h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-500">
          Continue with the most convenient method. Passwordless flows, adaptive MFA, and first-time onboarding are all supported out of the box.
        </p>
      </div>
      {children}
    </div>
  );
}
