import { formatDate, getYearMonth } from "@/utils/format";
import Detail from "./detail";

interface DetailsProps {
  startDate: string;
  endDate: string;
  contributor: { ai: number; reader: number };
  lastUpdatedAt: string;
}

export default function Details({
  startDate,
  endDate,
  contributor,
  lastUpdatedAt,
}: DetailsProps) {
  const startYearMonth = getYearMonth(startDate);
  const endYearMonth = getYearMonth(endDate);

  const details = [
    { label: "期間", value: `${startYearMonth} – ${endYearMonth}` },
    { label: "改變項目", value: `${contributor.ai + contributor.reader} 項` },
    {
      label: "資料來源",
      value: `AI ${contributor.ai} · 讀者 ${contributor.reader}`,
    },
    { label: "最後更新", value: formatDate(lastUpdatedAt) },
  ];

  return (
    <>
      <div className="mb-4 text-[11px] font-bold tracking-[0.16em] text-neutral-600 uppercase">
        事件檔案
      </div>
      {details.map((detail) => (
        <Detail key={detail.label} label={detail.label} value={detail.value} />
      ))}
    </>
  );
}
