import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      className="mr-auto flex cursor-pointer flex-col leading-1.05"
    >
      <span className="font-heading text-xl font-extrabold tracking-[-0.02em] text-text">
        明日台灣
      </span>
      <span className="text-[10px] tracking-[0.18em] text-neutral-600 uppercase">
        Tomorrow Taiwan
      </span>
    </Link>
  );
}
