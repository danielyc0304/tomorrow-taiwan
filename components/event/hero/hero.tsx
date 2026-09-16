import { ChevronLeft } from "lucide-react";
import CTA from "./cta";
import Title from "./title";

interface HeroProps {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
}

export default function Hero({
  startDate,
  endDate,
  title,
  description,
}: HeroProps) {
  return (
    <div className="mx-auto my-0 max-w-7xl px-6 pt-6 pb-8">
      <button className="btn btn-ghost mb-4 gap-1.5 pl-0">
        <ChevronLeft size={14} />
        回大事件列表
      </button>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6">
        <Title
          startDate={startDate}
          endDate={endDate}
          title={title}
          description={description}
        />
        <CTA />
      </div>
    </div>
  );
}
