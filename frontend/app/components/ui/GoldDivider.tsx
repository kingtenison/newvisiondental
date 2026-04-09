"use client";

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
      <div className="mx-4">
        <div className="w-2 h-2 bg-[#C5A059] rotate-45"></div>
      </div>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
    </div>
  );
}
