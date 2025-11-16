import type { ReactNode } from "react";
import { RoleShell } from "@/components/role-shell";
import { roleRegistry } from "@/config/navigation";

export default function DoctorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RoleShell role="Doctor" config={roleRegistry.doctor}>{children}</RoleShell>;
}
