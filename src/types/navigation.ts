export type IconKey =
  | "home"
  | "calendar"
  | "stethoscope"
  | "hospital"
  | "pill"
  | "file"
  | "users"
  | "message"
  | "chart"
  | "settings"
  | "shield"
  | "bell"
  | "heart"
  | "microscope"
  | "ambulance"
  | "wallet"
  | "book"
  | "clipboard"
  | "phone"
  | "lifeBuoy"
  | "sparkle";

export interface NavItem {
  label: string;
  href: string;
  icon: IconKey;
  description?: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface QuickAction {
  label: string;
  href: string;
  icon: IconKey;
  emphasis?: "primary" | "secondary";
}

export interface ResourceCard {
  title: string;
  description: string;
  href: string;
  icon: IconKey;
}

export interface RoleConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  theme: {
    gradientFrom: string;
    gradientTo: string;
    ring: string;
  };
  nav: NavSection[];
  quickActions: QuickAction[];
  resources: ResourceCard[];
}

export type RoleRegistry = Record<string, RoleConfig>;
