import ProjectCard, { IProjectCardProps } from "./projectCard";

export default function ProjectsList({
  title,
  projects,
}: {
  title: string;
  projects: Omit<IProjectCardProps, "index">[];
}) {
  return (
    <section className="space-y-4">
      <strong className="text-xl md:text-2xl">{title}</strong>

      <div className="flex flex-col items-center gap-8 md:gap-7 md:flex-wrap md:flex-row md:justify-center">
        {projects.map(({ title, source, preview, live }, i) => (
          <ProjectCard
            index={i}
            key={title}
            preview={preview}
            live={live}
            title={title}
            source=""
          />
        ))}
      </div>
    </section>
  );
}
