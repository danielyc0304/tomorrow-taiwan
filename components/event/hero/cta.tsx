"use client";

import { Plus, Star } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [isTracking, setIsTracking] = useState<boolean>(false);

  return (
    <div className="flex w-[min(280px,100%)] flex-col items-stretch gap-2">
      <div className="grid grid-cols-2 gap-2">
        <button
          className={`btn justify-start gap-1.5 ${isTracking ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setIsTracking(!isTracking)}
        >
          <Star size={15} />
          {isTracking ? "追蹤中" : "追蹤這個事件"}
        </button>
        <button className="btn btn-secondary justify-start gap-1.5">
          <Plus size={15} />
          投稿新進展
        </button>
      </div>
      <div className="border-t border-t-divider pt-2 text-xs leading-1.6 text-pretty text-neutral-600">
        追蹤後，這個事件有新進展會出現在你的通知列表。
      </div>
    </div>
  );
}
