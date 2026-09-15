import { ChevronLeft } from "lucide-react";

export default function Hero() {
  return (
    <div className="mx-auto my-0 max-w-7xl px-6 pt-6 pb-8">
      <button className="btn btn-ghost mb-4 gap-1.5 pl-0">
        <ChevronLeft size={14} />
        回大事件列表
      </button>
    </div>
  );
}
