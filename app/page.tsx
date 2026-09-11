import Digest from "@/components/home/digest/digest";
import Hero from "@/components/home/hero/hero";

export default function Home() {
  return (
    <div className="flex-1">
      <div>
        <Hero />
        <Digest />
      </div>
    </div>
  );
}
