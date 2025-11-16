import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AviCure Healthcare Super-App",
  description:
    "AviCure unifies patient, doctor, lab, hospital, and admin experiences with secure care coordination.",
  metadataBase: new URL("https://agentic-0f6f8f83.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="relative min-h-screen bg-gradient-radial from-slate-100 via-white to-slate-50">
          <div className="absolute left-1/2 top-16 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute inset-0 -z-20 bg-[url('/grid.svg')] bg-center opacity-10" aria-hidden />
          <main className="relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
