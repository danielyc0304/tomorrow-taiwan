import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CTA from "./cta";
import Title from "./title";

interface HeroProps {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  isTracking: boolean;
}

export default function Hero({
  startDate,
  endDate,
  title,
  description,
  isTracking,
}: HeroProps) {
  return (
    <div className="mx-auto my-0 max-w-7xl px-6 pt-6 pb-8">
      <Link href="/" className="btn btn-ghost mb-4 gap-1.5 pl-0">
        <ChevronLeft size={14} />
        回大事件列表
      </Link>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
        <Title
          startDate={startDate}
          endDate={endDate}
          title={title}
          description={description}
        />
        <CTA isTracking={isTracking} />
      </div>
    </div>
  );
}
