"use client";

import { ReactNode } from "react";

interface GoldCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GoldCard({ children, className = "", hover = true }: GoldCardProps) {
  return (
    <div className={`
      relative bg-white rounded-2xl shadow-md overflow-hidden border border-[#C5A059]/20
      ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#C5A059]' : ''}
      ${className}
    `}>
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C5A059] to-[#A68A46]" />
      
      {/* Gold corner accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#C5A059]/50" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#C5A059]/50" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#C5A059]/50" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#C5A059]/50" />
      
      {children}
    </div>
  );
}
