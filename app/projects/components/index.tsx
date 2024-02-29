"use client";

import FullStackProjects from "./fullStackProjects";
import { motion } from "framer-motion";
import FCCProjects from "./fccProjects";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delayChildren: 0.7 }}
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
