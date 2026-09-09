import Stat from "./stat";

const stats: { label: string; value: number }[] = [
  { label: "收錄事件", value: 13 },
  { label: "改變條目", value: 70 },
  { label: "今日新增", value: 3 },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 border-t-2 border-t-divider pt-4">
      {stats.map((stat) => (
        <Stat key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
}
