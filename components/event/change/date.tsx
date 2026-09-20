import { formatDate } from "@/utils/format";

interface DateProps {
  date: string;
}

export default function Date({ date }: DateProps) {
  return (
    <div className="col-span-full px-0 pt-4 pb-0 text-left font-heading text-sm leading-1.6 font-extrabold text-neutral-800 tabular-nums md:col-auto md:px-0 md:py-4 md:text-right">
      {formatDate(date)}
    </div>
  );
}
