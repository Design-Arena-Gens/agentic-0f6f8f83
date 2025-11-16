import type { ReactNode } from "react";
import { RoleShell } from "@/components/role-shell";
import { roleRegistry } from "@/config/navigation";

export default function HospitalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RoleShell role="Hospital" config={roleRegistry.hospital}>{children}</RoleShell>;
}
