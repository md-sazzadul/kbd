import { LogOut, Mail, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import Logo from "../../components/common/Logo";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useAuth } from "../../hooks/useAuth";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/login", { replace: true });
  }

  if (!user) {
    return <FullScreenLoader message="Loading your dashboard..." />;
  }

  return (
    <DashboardLayout>
      <main className="min-h-screen px-6 py-10">
        <div className="mx-auto max-w-5xl">
          {/* Header */}

          <div className="mb-10 flex items-center justify-between">
            <Logo />

            <Button variant="secondary" onClick={handleLogout}>
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>

          {/* Welcome Card */}

          <Card className="space-y-8">
            <div>
              <h1 className="text-4xl font-black text-white">
                Hello {user.name} 👋
              </h1>

              <p className="mt-2 text-gray-400">
                Welcome to the KBD Tournament Platform.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-cyan-400" />

                  <h2 className="font-semibold text-white">Email</h2>
                </div>

                <p className="text-gray-300">{user.email}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />

                  <h2 className="font-semibold text-white">Role</h2>
                </div>

                <span
                  className="
                  inline-flex
                  rounded-full
                  bg-blue-500/15
                  px-4
                  py-1
                  text-sm
                  font-semibold
                  capitalize
                  text-blue-300
                "
                >
                  {user.role}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </DashboardLayout>
  );
}
