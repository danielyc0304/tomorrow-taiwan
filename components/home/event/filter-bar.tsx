"use client";

import { useState } from "react";
import Option from "./option";

const options: { label: string; value: string }[] = [
  { label: "全部", value: "all" },
  { label: "公民行動與遊行", value: "action" },
  { label: "行政與制度改革", value: "administration" },
  { label: "產業與經濟", value: "economy" },
  { label: "司法判決", value: "judiciary" },
  { label: "立法／修法", value: "legislation" },
  { label: "媒體與輿論", value: "media" },
  { label: "民意與觀念轉變", value: "opinion" },
  { label: "國際關係", value: "relation" },
];

export default function FilterBar() {
  const [active, setActive] = useState<string>("all");

  return (
    <div className="border-y-2 border-y-divider bg-neutral-100">
      <div className="mx-auto my-0 flex max-w-7xl flex-wrap items-center gap-4 px-6 py-3">
        <span className="text-[11px] font-bold tracking-[0.14em] text-neutral-600 uppercase">
          依改變類型篩選
        </span>
        <div className="flex flex-wrap gap-2">
          {options.map((option) => {
            const isActive = active === option.value;

            return (
              <Option
                key={option.value}
                label={option.label}
                isActive={isActive}
                onclick={() => setActive(option.value)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
