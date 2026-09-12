"use client";

import { Star } from "lucide-react";
import { useState } from "react";

interface StatsProps {
  ai: number;
  reader: number;
  isTracking: boolean;
}

export default function Stats({
  ai,
  reader,
  isTracking: tracking,
}: StatsProps) {
  const [isTracking, setIsTracking] = useState<boolean>(tracking);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="font-heading text-[15px] font-extrabold">
        {ai + reader} 項改變
      </div>
      <div className="text-[11px] text-neutral-600">
        AI {ai} · 讀者 {reader}
      </div>
      <button
        className={`btn btn-secondary gap-1.25 px-2 py-1 text-xs leading-1.2 ${isTracking ? "bg-text text-bg" : "bg-transparent text-text"}`}
        onClick={() => setIsTracking(!isTracking)}
      >
        <Star size={13} /> {isTracking ? "追蹤中" : "追蹤"}
      </button>
    </div>
  );
}
