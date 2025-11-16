import type { ReactNode } from "react";
import { RoleShell } from "@/components/role-shell";
import { roleRegistry } from "@/config/navigation";

export default function PatientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RoleShell role="Patient" config={roleRegistry.patient}>{children}</RoleShell>;
}
