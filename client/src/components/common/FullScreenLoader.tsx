import { motion } from "framer-motion";

import Logo from "./Logo";
import Spinner from "./Spinner";

interface FullScreenLoaderProps {
  message?: string;
}

export default function FullScreenLoader({
  message = "Loading...",
}: FullScreenLoaderProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Logo />
        </motion.div>

        <div className="my-8">
          <Spinner size={48} />
        </div>

        <p className="text-lg font-medium text-gray-300">{message}</p>
      </motion.div>
    </main>
  );
}
