import Brand from "./brand";

export default function Footer() {
  return (
    <footer className="mt-8 border-t-2 border-t-divider">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-6 p-6 text-[13px] text-neutral-700">
        <Brand />
      </div>
    </footer>
  );
}
