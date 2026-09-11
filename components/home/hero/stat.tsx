interface StatProps {
  label: string;
  value: number;
}

export default function Stat({ label, value }: StatProps) {
  return (
    <div>
      <div className="font-heading text-[34px] leading-1 font-extrabold tabular-nums">
        {value}
      </div>
      <div className="mt-1.5 text-[11px] tracking-widest text-neutral-600 uppercase">
        {label}
      </div>
    </div>
  );
}
