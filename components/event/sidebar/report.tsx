import { TriangleAlert } from "lucide-react";

export default function Report() {
  return (
    <>
      <div className="mt-6 border-t-2 border-t-divider pt-3 text-xs leading-1.6 text-pretty text-neutral-700">
        看到錯的地方？點任一條目右側的「回報」，或整頁回報。
      </div>
      <button className="btn btn-secondary mt-3 gap-1.5 text-[13px]">
        <TriangleAlert size={14} />
        回報整頁問題
      </button>
    </>
  );
}
