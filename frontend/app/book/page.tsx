"use client";

import { useEffect } from "react";
import { BOOKING_URL } from "@/app/lib/constants/booking";
import { Calendar, ExternalLink } from "lucide-react";

export default function BookPage() {
  useEffect(() => {
    window.location.href = BOOKING_URL;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D2A60] via-[#1A4FAD] to-[#0D2A60] flex items-center justify-center px-4">
      <div className="text-center text-white max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#E8B830]/20 flex items-center justify-center mx-auto mb-6 border border-[#E8B830]/40">
          <Calendar className="w-8 h-8 text-[#E8B830] animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold mb-3">Redirecting to Booking System...</h1>
        <p className="text-white/70 text-sm mb-6">
          Taking you to New Vision Dental's online appointment scheduler.
        </p>
        <a
          href={BOOKING_URL}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8B830] text-[#0A0A0A] font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-[#E8B830]/30"
        >
          <span>Continue to Booking</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
