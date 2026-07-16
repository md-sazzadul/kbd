import { Navigate, useLocation } from "react-router-dom";

import FullScreenLoader from "../components/common/FullScreenLoader";
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
    return <FullScreenLoader message="Checking your session..." />;
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
