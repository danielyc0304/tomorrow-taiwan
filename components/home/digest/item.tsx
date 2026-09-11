import { formatDate } from "@/utils/format";
import Link from "next/link";

const typeLabelMap: Record<string, string> = {
  action: "公民行動與遊行",
  administration: "行政與制度改革",
  economy: "產業與經濟",
  judiciary: "司法判決",
  legislation: "立法／修法",
  media: "媒體與輿論",
  opinion: "民意與觀念轉變",
  relation: "國際關係",
};

interface ItemProps {
  date: string;
  type: string;
  title: string;
  description: string;
}

export default function Item({ date, type, title, description }: ItemProps) {
  return (
    <Link
      href="/"
      className="grid cursor-pointer grid-cols-1 items-baseline gap-1.5 border-t border-t-[rgba(255,255,255,0.35)] py-3 text-inherit hover:bg-[rgba(255,255,255,0.12)] md:grid-cols-[96px_minmax(0,1fr)_auto] md:gap-4"
    >
      <span className="text-xs tabular-nums opacity-85">
        {formatDate(date)}
      </span>
      <span>
        <span className="font-heading text-base leading-1.6 font-extrabold">
          {title}
        </span>
        <span className="opacity-90">　 {description}</span>
      </span>
      <span className="-order-1 text-[11px] tracking-[0.08em] whitespace-nowrap uppercase opacity-85 md:order-0">
        {typeLabelMap[type]}
      </span>
    </Link>
  );
}
