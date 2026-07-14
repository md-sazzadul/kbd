import { Trophy } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 p-3 shadow-lg shadow-blue-500/30">
        <Trophy className="h-7 w-7 text-white" />
      </div>

      <div>
        <h1 className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-black text-transparent">
          KBD
        </h1>

        <p className="-mt-1 text-xs uppercase tracking-widest text-gray-400">
          Tournament Platform
        </p>
      </div>
    </div>
  );
}
