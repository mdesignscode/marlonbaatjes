"use client";

import Tooltip from "@/ui/tooltip";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from ".";
import AirBnBClone from "./airbnbClone";

export default function FullStackProjects() {
  return (
    <motion.article variants={parentVariants} className="space-y-3">
      <motion.p variants={childrenVariants}>
        But those are not very impressive, just simple projects, I&apos;m a{" "}
        <Tooltip
          trigger="Full Stack developer"
          content="A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets."
          className="underline underline-offset-2"
        />
        , so let&apos;s look at some full stack projects.
      </motion.p>

      <motion.div variants={childrenVariants}>
        <AirBnBClone />
      </motion.div>
    </motion.article>
  );
}
