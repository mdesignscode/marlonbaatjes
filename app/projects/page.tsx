import dynamic from "next/dynamic";

const Projects = dynamic(() => import("./components"), { ssr: false });

export default function Page() {
  return (
    <>
      <div className="absolute h-screen w-screen z-0 top-0 left-0">
        <div className="bg-image blur-[8px]" />
        <div className="overlay opacity-70" />
      </div>
      <main className="px-6 py-4 md:text-lg main">
        <Projects />
      </main>
    </>
  );
}
