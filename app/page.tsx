import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/hero"));

export default function Home() {
  return (
    <main className="h-full grid place-content-center">
      <Hero />
    </main>
  );
}
