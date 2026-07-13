"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

interface ReadMoreListProps {
  items: string[];
  limit?: number;
  badgeClassName: string;
  checkClassName: string;
  textClassName: string;
  buttonClassName: string;
}

export function ReadMoreList({
  items,
  limit = 4,
  badgeClassName,
  checkClassName,
  textClassName,
  buttonClassName,
}: ReadMoreListProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > limit;
  const visible = expanded ? items : items.slice(0, limit);
  const hiddenCount = items.length - limit;

  return (
    <div>
      <ul className="space-y-4">
        {visible.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`w-6 h-6 ${badgeClassName} rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
              <Check className={`w-3.5 h-3.5 ${checkClassName}`} />
            </div>
            <span className={`font-medium ${textClassName}`}>{item}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${buttonClassName}`}
        >
          {expanded ? "Read less" : `Read more (${hiddenCount})`}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
}
