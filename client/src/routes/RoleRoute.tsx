import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RoleRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}

export default function RoleRoute({ allowedRoles, children }: RoleRouteProps) {
  const userRole = "admin";

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
