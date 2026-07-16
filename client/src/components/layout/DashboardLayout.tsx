import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  );
}
