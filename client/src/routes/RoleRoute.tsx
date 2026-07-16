import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import Spinner from "../components/common/Spinner";
import { useAuth } from "../hooks/useAuth";
import type { Role } from "../types";

interface RoleRouteProps {
  children: ReactNode;
  allowedRoles: Role[];
}

export default function RoleRoute({ children, allowedRoles }: RoleRouteProps) {
  const { user, loading, isAuthenticated } = useAuth();

  /*
  |--------------------------------------------------------------------------
  | Still Restoring Session
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | User Not Logged In
  |--------------------------------------------------------------------------
  */

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  /*
  |--------------------------------------------------------------------------
  | Wrong Role
  |--------------------------------------------------------------------------
  */

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  /*
  |--------------------------------------------------------------------------
  | Authorized
  |--------------------------------------------------------------------------
  */

  return <>{children}</>;
}
