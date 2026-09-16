import Stats from "./stats";
import Title from "./title";

export default function Hero() {
  return (
    <section className="mx-auto my-0 grid max-w-7xl grid-cols-1 items-start gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-end lg:gap-8">
      <Title />
      <Stats />
    </section>
  );
}
