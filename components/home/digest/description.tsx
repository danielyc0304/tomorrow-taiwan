import { History } from "lucide-react";

export default function Description() {
  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase">
        <History size={14} />
        近期收錄條目
      </div>
      <div className="mt-3 text-xs leading-1.6 opacity-85">
        近七日新增至各事件時間軸的改變條目
      </div>
    </div>
  );
}
