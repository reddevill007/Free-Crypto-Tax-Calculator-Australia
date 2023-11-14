import Cta from "@/components/cta/Cta";
import GettingStarted from "@/components/hero/GettingStarted";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="container mx-auto m-7 md:p-0 p-5">
      <Hero />
      <Cta />
    </main>
  );
}
