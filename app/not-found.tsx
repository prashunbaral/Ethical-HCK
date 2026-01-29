import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-9xl font-bold text-transparent">
            404
          </h1>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3 font-medium text-white transition-all hover:from-indigo-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            <FaHome className="h-5 w-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 font-medium text-gray-300 transition-all hover:border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            <FaArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>

        {/* Helpful links */}
        <div className="mt-12">
          <p className="mb-4 text-sm text-gray-500">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Events
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/team"
              className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Team
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/gallery"
              className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Gallery
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/contact"
              className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
