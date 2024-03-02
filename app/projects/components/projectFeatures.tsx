"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export default function ProjectFeatures({
  stack,
  features,
}: {
  stack: {
    icon: JSX.Element;
    title: string;
  }[];
  features: string[];
}) {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      exit={{ y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <strong>Features</strong>
        <ul className="ml-8">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <strong>Tech Stack</strong>
      <ul className="px-4 py-2 flex gap-6 w-full overflow-y-hidden overflow-x-auto">
        {stack.map(({ icon, title }, i) => (
          <li className={cn("group relative grid place-content-center")} key={i}>
            <div className="group-hover:blur-[1px] transition-all w-10 md:w-14 group-hover:text-secondary">
              {icon}
            </div>
            <strong
              aria-hidden="true"
              className="invisible group-hover:visible transition-all absolute top-full group-hover:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary text-center"
            >
              {title}
            </strong>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
