import Report from "./report";
import SummaryDetails from "./summary-details";
import SummaryTitle from "./summary-title";

interface SummaryProps {
  type: string;
  contributor: "ai" | "reader";
  reviewed?: boolean;
  title: string;
  isOpen: boolean;
}

export default function Summary({
  type,
  contributor,
  reviewed,
  title,
  isOpen,
}: SummaryProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="min-w-0 flex-1">
        <SummaryTitle title={title} />
        <SummaryDetails
          type={type}
          contributor={contributor}
          reviewed={reviewed}
        />
      </div>
      <Report isOpen={isOpen} />
    </div>
  );
}
