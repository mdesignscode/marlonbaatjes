import FCCProjects from "./components/fccProjects";

export default function Page() {
  return (
    <>
      <div className="absolute h-screen w-screen z-0 top-0 left-0">
        <div className="bg-image blur-[8px]" />
        <div className="overlay opacity-60" />
      </div>
      <main className="p-4 md:text-lg space-y-4 main">
        <h1 className="font-bold text-2xl md:text-4xl">My Projects</h1>

        <div>
          <FCCProjects />
        </div>
      </main>
    </>
  );
}
