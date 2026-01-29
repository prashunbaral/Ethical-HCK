"use client";

import { useEffect } from "react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-b from-red-500/20 to-transparent blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 backdrop-blur-sm">
            <FaExclamationTriangle className="h-12 w-12 text-red-500" />
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
            Something went wrong!
          </h2>
          <p className="mb-4 text-lg text-gray-400">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500">
              Error ID: <code className="rounded bg-gray-800 px-2 py-1">{error.digest}</code>
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3 font-medium text-white transition-all hover:from-indigo-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            <FaRedo className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
            Try Again
          </button>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 font-medium text-gray-300 transition-all hover:border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            Go to Homepage
          </a>
        </div>

        {/* Contact support */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            If the problem persists, please{" "}
            <a
              href="/contact"
              className="text-indigo-400 transition-colors hover:text-indigo-300"
            >
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
