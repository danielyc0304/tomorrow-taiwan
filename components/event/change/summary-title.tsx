interface SummaryTitleProps {
  title: string;
}

export default function SummaryTitle({ title }: SummaryTitleProps) {
  return (
    <div className="font-heading text-lg leading-1.25 font-extrabold tracking-[-0.01em] text-pretty">
      {title}
    </div>
  );
}
