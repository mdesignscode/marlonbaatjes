"use client";

import { useState } from "react";
import { IProjectCardProps } from "./projectCard";
import ProjectsList from "./projectsList";

const personalProjects: Omit<IProjectCardProps, "index">[] = [
    {
      live: "https://triviamania.vercel.app",
      source: "https://github.com/mdesignscode/trivia_mania",
      preview: "/images/projects/personal/triviamania/Trivia Mania.png",
      title: "Trivia Mania",
    },
    {
      live: "https://mdesigns-estore.vercel.app/",
      source: "https://github.com/mdesignscode/ecommerce-store",
      preview: "/images/projects/personal/estore/E-Commerce Store.png",
      title: "E-commerce store",
    },
    {
      live: "https://random-stuff-one.vercel.app/",
      source: "https://github.com/mdesignscode/passthetime/",
      preview: "/images/projects/personal/randomstuff/Pass The Time.png",
      title: "Random Stuff",
    },
    {
      live: "https://random-stuff-one.vercel.app/",
      source: "https://github.com/mdesignscode/spots_flask",
      preview: "/images/projects/personal/spots/Spots.png",
      title: "Spots",
    },
  ],
  cloneProjects: Omit<IProjectCardProps, "index">[] = [
    {
      live: "https://airbnb-clone-js-beta.vercel.app/hbnb",
      source: "https://github.com/mdesignscode/airbnb-clone-js/",
      preview:
        "/images/projects/clones/airbnb/airbnb-clone-js-beta.vercel.app.png",
      title: "AirBnB Clone",
    },
    {
      live: "https://challenge-1dc17.web.app/",
      preview: "/images/projects/clones/amazon/Amazon Clone.png",
      title: "Amazon Clone",
    },
    {
      live: "https://game-info-page.onrender.com/",
      source: "https://github.com/mdesignscode/game-info-page",
      preview: "/images/projects/clones/game-info/Stardew Valley Info.png",
      title: "Game Info Page",
    },
  ];

export default function Projects() {
  const [firstProjectInView, setFirstProjectInView] = useState(false),
    [projectsInView, setProjectsInView] = useState(
      personalProjects.map(() => 1)
    );

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-2 border-b-2 border-neutral-200">
        My Projects
      </h1>

      <div className="space-y-8">
        <ProjectsList projects={personalProjects} title="Personal projects" />

        <ProjectsList projects={cloneProjects} title="Clone projects" />
      </div>
    </div>
  );
}
