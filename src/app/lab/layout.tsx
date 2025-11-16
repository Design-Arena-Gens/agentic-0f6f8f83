import type { ReactNode } from "react";
import { RoleShell } from "@/components/role-shell";
import { roleRegistry } from "@/config/navigation";

export default function LabLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RoleShell role="Lab" config={roleRegistry.lab}>{children}</RoleShell>;
}
