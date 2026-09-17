interface DetailProps {
  label: string;
  value: string;
}

export default function Detail({ label, value }: DetailProps) {
  return (
    <div className="flex justify-between gap-3 border-b border-b-divider px-0 py-2 text-[13px]">
      <span className="text-neutral-600">{label}</span>
      <span className="text-right font-semibold">{value}</span>
    </div>
  );
}
