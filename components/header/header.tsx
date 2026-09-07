import Brand from "./brand";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-b-divider bg-bg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-3">
        <Brand />
        <Navbar />
      </div>
    </header>
  );
}
