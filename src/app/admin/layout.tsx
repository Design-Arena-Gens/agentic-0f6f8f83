import type { ReactNode } from "react";
import { RoleShell } from "@/components/role-shell";
import { roleRegistry } from "@/config/navigation";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RoleShell role="Admin" config={roleRegistry.admin}>{children}</RoleShell>;
}
