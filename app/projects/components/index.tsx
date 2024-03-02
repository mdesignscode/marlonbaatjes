"use client";

import { motion } from "framer-motion";
import Background from "@/app/components/background";
import ProjectCard, { IProjectCardProps } from "./projectCard";
import { useState } from "react";

const containerVariants = {
    show: {
      rotateY: ["600deg", "0deg"],
      transition: {
        staggerChildren: 0.4,
        duration: 1,
        type: "spring",
        stifness: 100,
      },
    },
    hide: {},
  },
  visibilityVariants = {
    show: {
      opacity: [0, 1],
      margin: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  },
  textVariants = {
    show: {
      opacty: [0, 1],
      y: [50, 0],
      transition: {
        duration: 1,
      },
    },
  },
  personalProjects: Omit<
    IProjectCardProps,
    "index" | "setFirstProjectInView" | "firstProjectInView"
  >[] = [
    {
      live: "https://triviamania.vercel.app",
      source: "https://github.com/mdesignscode/trivia_mania",
      preview: "/images/projects/triviamania/Trivia Mania.png",
      title: "Trivia Mania",
    },
    {
      live: "https://mdesigns-estore.vercel.app/",
      source: "https://github.com/mdesignscode/ecommerce-store",
      preview: "/images/projects/estore/E-Commerce Store.png",
      title: "E-commerce store",
    },
    {
      live: "https://random-stuff-one.vercel.app/",
      source: "https://github.com/mdesignscode/passthetime/",
      preview: "/images/projects/randomstuff/Pass The Time.png",
      title: "Random Stuff",
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

      <section className="space-y-4">
        <strong className="text-xl md:text-2xl">Personal projects</strong>

        <div>
          <div className="flex flex-col items-center gap-8 md:gap-7 md:flex-wrap md:flex-row md:justify-center">
            {personalProjects.map(({ title, source, preview, live }, i) => (
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
        </div>
      </section>
    </div>
  );
}
