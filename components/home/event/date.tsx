import { getYearMonth } from "@/utils/format";

interface DateProps {
  startDate: string;
  endDate: string;
}

export default function Date({ startDate, endDate }: DateProps) {
  const startYearMonth = getYearMonth(startDate);
  const endYearMonth = getYearMonth(endDate);

  return (
    <div>
      <div className="font-heading text-4xl leading-1 font-extrabold tabular-nums">
        {startYearMonth.split(".")[0]}
      </div>
      <div className="mt-1.5 text-xs leading-1.6 text-neutral-600 tabular-nums">
        {startYearMonth} – {endYearMonth}
      </div>
    </div>
  );
}
