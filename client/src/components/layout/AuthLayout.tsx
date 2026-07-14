import { motion } from "framer-motion";
import type { ReactNode } from "react";

import Logo from "../common/Logo";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
      {/* Glow 1 */}

      <div
        className="
          absolute
          -left-40
          top-0
          h-96
          w-96
          rounded-full
          bg-blue-600/20
          blur-[120px]
        "
        style={{
          animation: "floatGlow 8s ease-in-out infinite",
        }}
      />

      {/* Glow 2 */}

      <div
        className="
          absolute
          right-0
          bottom-0
          h-120
          w-120
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
        style={{
          animation: "floatGlow 10s ease-in-out infinite",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-10 flex justify-center">
          <Logo />
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-white">{title}</h1>

          <p className="mt-3 text-gray-400">{subtitle}</p>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {children}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} KBD Tournament Platform
        </p>
      </motion.div>
    </main>
  );
}
