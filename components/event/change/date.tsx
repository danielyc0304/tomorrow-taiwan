import { formatDate } from "@/utils/format";

interface DateProps {
  date: string;
}

export default function Date({ date }: DateProps) {
  return (
    <div className="col-auto px-0 py-4 text-right font-heading text-sm leading-1.6 font-extrabold text-neutral-800 tabular-nums">
      {formatDate(date)}
    </div>
  );
}
