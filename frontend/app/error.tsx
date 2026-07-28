'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#0D2A60] via-[#F2F4F8] to-white">
      <div className="text-center px-4">
        <h1 className="text-6xl sm:text-7xl font-bold text-red-500 mb-4">!</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Something Went Wrong</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold bg-[#E8B830] text-[#0A0A0A] hover:shadow-lg hover:shadow-[#E8B830]/25 transition-all duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold border-2 border-[#1A4FAD] text-[#1A4FAD] hover:bg-[#1A4FAD]/5 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
