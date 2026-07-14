import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-8xl font-black text-transparent">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-white">Page Not Found</h2>

      <p className="mt-3 max-w-md text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
      >
        Go Home
      </Link>
    </main>
  );
}
