interface ContentProps {
  title: string;
  description: string;
}

export default function Content({ title, description }: ContentProps) {
  return (
    <div>
      <h3 className="mb-1.5 text-2xl leading-1.12 tracking-[-0.02em]">
        {title}
      </h3>
      <p className="m-0 max-w-[62ch] text-pretty text-neutral-800">
        {description}
      </p>
    </div>
  );
}
