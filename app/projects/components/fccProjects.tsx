"use client";

import ExternalLinkIcon from "@/app/components/icons/externalLink";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useIsMobile from "@/app/hooks/isMobile";
import FCCProject from "./fccProject";

export default function FCCProjects() {
  const codepenPreviewBase = "https://cdpn.io/Marlon-B/fullpage/",
    codePenSourceBase = "https://codepen.io/Marlon-B/pen/",
    publicBase = "/images/projects/fcc/",
    projects = [
      {
        demo: "RwEwjaM?nocache=true&view=fullpage",
        source: codePenSourceBase + "RwEwjaM",
        title: "Random Quote Machine",
        preview: publicBase + "Random Quote Machine.png",
      },
      {
        demo: codepenPreviewBase + "MWZWVVK?nocache=true&view=fullpage",
        source: codePenSourceBase + "MWZWVVK",
        title: "Markdown Previewer",
        preview: publicBase + "Markdown Previewer.png",
      },
      {
        demo: codepenPreviewBase + "OJrJZPL?nocache=true&view=fullpage",
        source: codePenSourceBase + "OJrJZPL",
        title: "JavaScript Calculator",
        preview: publicBase + "JavaScript Calculator.png",
      },
      {
        demo: codepenPreviewBase + "NWeWEXV?nocache=true&view=fullpage",
        source: codePenSourceBase + "NWeWEXV",
        title: "Drum Machine",
        preview: publicBase + "Drum Machine.png",
      },
      {
        demo: codepenPreviewBase + "PoXqbKG?nocache=true&view=fullpage",
        source: codePenSourceBase + "PoXqbKG",
        title: "25 5 Clock",
        preview: publicBase + "25 5 Clock.png",
      },
      {
        demo: codepenPreviewBase + "oNVNjRe?nocache=true&view=fullpage",
        source: codePenSourceBase + "oNVNjRe",
        title: "D3 Bar Chart",
        preview: publicBase + "D3 Bar Chart.png",
      },
    ],
    isMobile = useIsMobile(),
    [showProjects, setShowProjects] = useState(false)

  useEffect(() => {
    setShowProjects(!isMobile);
  }, [isMobile]);

  return (
    <motion.article
      className="space-y-3"
      animate={{ y: [50, 0], opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 1.2 }}
    >
      <motion.p>
        Let&apos;s start with projects I completed through{" "}
        <Link
          className="inline-flex gap-1 items-center underline underline-offset-2"
          href="https://www.freecodecamp.org/"
          target="_blank"
        >
          FreeCodeCamp
          <ExternalLinkIcon />
        </Link>
        {", "}these are aimed at learning the basics of Frontend Libraries, such
        as React, Sass and Bootstrap
        {isMobile ? ", the small stuff." : "."}
      </motion.p>

      <Button
        onClick={() => setShowProjects(!showProjects)}
        className="md:hidden"
        variant="outline"
      >
        {showProjects ? "Hide the small stuff" : "Show me the small stuff"}
      </Button>

      {showProjects && (
        <motion.section
          initial="hidden"
          animate="visible"
          className="p-2 flex flex-col md:flex-row gap-2 md:gap-6 width:full overflow-x-auto overflow-y-hidden"
        >
          {projects.map((project, i) => (
            <FCCProject index={i} project={project} key={project.title} />
          ))}
        </motion.section>
      )}
    </motion.article>
  );
}
