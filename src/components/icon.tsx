import {
  Ambulance,
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardList,
  FileText,
  HeartPulse,
  Home,
  Hospital,
  LifeBuoy,
  LineChart,
  LucideIcon,
  MessageCircle,
  Microscope,
  Phone,
  Pill,
  Settings,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";
import type { IconKey } from "@/types/navigation";

const iconMap: Record<IconKey, LucideIcon> = {
  home: Home,
  calendar: CalendarDays,
  stethoscope: Stethoscope,
  hospital: Hospital,
  pill: Pill,
  file: FileText,
  users: Users,
  message: MessageCircle,
  chart: LineChart,
  settings: Settings,
  shield: ShieldCheck,
  bell: Bell,
  heart: HeartPulse,
  microscope: Microscope,
  ambulance: Ambulance,
  wallet: Wallet,
  book: BookOpen,
  clipboard: ClipboardList,
  phone: Phone,
  lifeBuoy: LifeBuoy,
  sparkle: Sparkles,
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Component = iconMap[name];
  return <Component className={className} aria-hidden focusable={false} />;
}
