"use client";

import { useEffect, useRef } from "react";

interface ElfsightReviewsProps {
  className?: string;
}

export function ElfsightReviews({ className = "" }: ElfsightReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full ${className}`} style={{ border: 'none' }}>
      <div 
        className="elfsight-app-ba1e36f5-ddf2-4ade-9133-86fde51b25f1" 
        data-elfsight-app-lazy
        style={{ border: 'none !important' }}
      />
    </div>
  );
}
