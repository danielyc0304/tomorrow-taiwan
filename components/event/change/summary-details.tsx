import {
  BarChart,
  Check,
  FileText,
  Flag,
  Globe,
  Home,
  MessageSquare,
  Scale,
  Sparkle,
  TrendingUp,
  UserPen,
} from "lucide-react";

const typeLabelMap: Record<string, { label: string; icon: React.ReactNode }> = {
  action: { label: "公民行動與遊行", icon: <Flag size={13} /> },
  administration: { label: "行政與制度改革", icon: <Home size={13} /> },
  economy: { label: "產業與經濟", icon: <BarChart size={13} /> },
  judiciary: { label: "司法判決", icon: <Scale size={13} /> },
  legislation: { label: "立法／修法", icon: <FileText size={13} /> },
  media: { label: "媒體與輿論", icon: <MessageSquare size={13} /> },
  opinion: { label: "民意與觀念轉變", icon: <TrendingUp size={13} /> },
  relation: { label: "國際關係", icon: <Globe size={13} /> },
};

interface SummaryDetailsProps {
  type: string;
  contributor: "ai" | "reader";
  reviewed?: boolean;
}

export default function SummaryDetails({
  type,
  contributor,
  reviewed,
}: SummaryDetailsProps) {
  const isAI = contributor === "ai";

  return (
    <div className="mt-2 flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1.25 text-xs leading-1.6 font-semibold text-neutral-700">
        {typeLabelMap[type].icon}
        {typeLabelMap[type].label}
      </span>
      <span
        className={`tag inline-flex items-center gap-1.25 text-[11px] ${isAI ? "tag-accent" : "tag-neutral"}`}
      >
        {isAI ? <Sparkle size={12} /> : <UserPen size={12} />}
        {isAI ? "AI 摘要" : "讀者投稿"}
      </span>
      {reviewed && (
        <span className="tag tag-outline inline-flex items-center gap-1.25 text-[11px]">
          <Check size={12} />
          已複核
        </span>
      )}
    </div>
  );
}
