"use client";

import FullStackProjects from "./fullStackProjects";
import { motion } from "framer-motion";
import FCCProjects from "./fccProjects";

export const parentVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        duration: 1,
      },
    },
    hide: {
      opacity: 0,
    },
  },
  childrenVariants = {
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
    hide: { opacity: 0, y: 50 },
  };

export default function Projects() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hide"
      animate="show"
      className="space-y-4"
    >
      <h1 className="font-bold text-2xl md:text-4xl">My Projects</h1>

      <div className="space-y-6">
        <FCCProjects />

        <FullStackProjects />
      </div>
    </motion.div>
  );
}
