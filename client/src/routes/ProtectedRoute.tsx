import { Navigate, useLocation } from "react-router-dom";

import Spinner from "../components/common/Spinner";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { loading, isAuthenticated } = useAuth();

  const location = useLocation();

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

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Logged In
  |--------------------------------------------------------------------------
  */

  return children;
}
