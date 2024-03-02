import dynamic from "next/dynamic";

const Projects = dynamic(() => import("./components"), { ssr: false });

export default function Page() {
  return (
    <main className="md:text-lg h-full overflow-y-auto px-10 sm:px-24 md:px-16 py-6 sm:py-10 md:py-14">
      <Projects />
    </main>
  );
}
