import { TriangleAlert } from "lucide-react";

interface ReportProps {
  isOpen: boolean;
}

export default function Report({ isOpen }: ReportProps) {
  return (
    <button
      className={`btn btn-ghost shrink-0 gap-1.25 text-xs leading-1.2 ${isOpen ? "opacity-100" : "opacity-55"}`}
    >
      <TriangleAlert size={13} />
      回報
    </button>
  );
}
