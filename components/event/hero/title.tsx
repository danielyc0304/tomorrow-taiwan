import { getYearMonth } from "@/utils/format";

interface TitleProps {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
}

export default function Title({
  startDate,
  endDate,
  title,
  description,
}: TitleProps) {
  const startYearMonth = getYearMonth(startDate);
  const endYearMonth = getYearMonth(endDate);

  return (
    <div>
      <div className="mb-3 text-xs leading-1.6 font-bold tracking-[0.16em] text-accent-700 uppercase tabular-nums">
        {startYearMonth} – {endYearMonth}
      </div>
      <h1 className="mx-0 mt-0 mb-4 text-[clamp(30px,6vw,52px)] leading-1.03 tracking-[-0.03em] text-pretty">
        {title}
      </h1>
      <p className="m-0 max-w-[60ch] text-[17px] text-pretty text-neutral-800">
        {description}
      </p>
    </div>
  );
}
