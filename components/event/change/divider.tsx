interface DividerProps {
  isOpen: boolean;
}

export default function Divider({ isOpen }: DividerProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-2.5 w-0.5 bg-divider" />
      <div
        className={`absolute top-5 left-1 size-3.5 border-2 border-text ${isOpen ? "bg-accent" : "bg-bg"}`}
      />
    </div>
  );
}
