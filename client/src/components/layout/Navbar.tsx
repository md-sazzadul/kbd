import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Shield,
  User,
  UserPlus,
} from "lucide-react";

import Button from "../common/Button";
import Logo from "../common/Logo";

import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/login", {
      replace: true,
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="flex items-center gap-3">
          {!isAuthenticated && (
            <>
              <NavLink to="/login">
                {({ isActive }) => (
                  <Button variant={isActive ? "primary" : "secondary"}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                )}
              </NavLink>

              <NavLink to="/register">
                {({ isActive }) => (
                  <Button variant={isActive ? "primary" : "secondary"}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                )}
              </NavLink>
            </>
          )}

          {isAuthenticated && (
            <>
              <NavLink to="/dashboard">
                {({ isActive }) => (
                  <Button variant={isActive ? "primary" : "secondary"}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                )}
              </NavLink>

              <NavLink to="/profile">
                {({ isActive }) => (
                  <Button variant={isActive ? "primary" : "secondary"}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                )}
              </NavLink>

              {user?.role === "admin" && (
                <NavLink to="/admin">
                  {({ isActive }) => (
                    <Button variant={isActive ? "primary" : "secondary"}>
                      <Shield className="mr-2 h-4 w-4" />
                      Admin
                    </Button>
                  )}
                </NavLink>
              )}

              <Button variant="danger" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
