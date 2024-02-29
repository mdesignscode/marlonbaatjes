"use client";

import {
  ExpressJSIcon,
  MySQLIcon,
  NextJSIcon,
  NodeJSIcon,
  PrismaJSIcon,
  SassIcon,
} from "@/icons/languages";
import { Card, CardContent, CardFooter } from "@/ui/card";
import { cn } from "@/utils/cn";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import ProjectLink from "../projectLink";
import AirBnBExtendedInfo from "./extendedInfo";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";

const features = [
    "Quality assurance with Unit tests",
    "RESTful API",
    "A command line console for interacting with objects in storage",
    "A responsive UI with Hotels filter",
  ],
  techStack = [
    {
      icon: <NodeJSIcon />,
      title: "Node.js",
    },
    {
      icon: <NextJSIcon />,
      title: "Next.js",
    },
    {
      icon: <PrismaJSIcon />,
      title: "Prisma.js",
    },
    {
      icon: <ExpressJSIcon />,
      title: "Express.js",
    },
    {
      icon: <SassIcon />,
      title: "Sass",
    },
    {
      title: "MySQL",
      icon: <MySQLIcon />,
    },
  ]

export default function AirbnbCloneInfo() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="space-y-3">
      <Button onClick={() => setShowInfo(!showInfo)} variant="outline">
        {showInfo ? "Hide info" : "Show me"}
      </Button>

      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2"
          >
            <motion.div
              initial={{ y: 100, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -100, scale: 0.5 }}
            >
              <AirBnBCloneCard />
            </motion.div>

            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              exit={{ y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <AirBnBCloneFeatures />
            </motion.div>

            <motion.div
              initial={{ y: 25 }}
              whileInView={{ y: 0 }}
              exit={{ y: -25 }}
              transition={{ duration: 0.6 }}
            >
              <AirBnBExtendedInfo />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function AirBnBCloneFeatures() {
  return (
    <>
      <div>
        <strong>Features</strong>
        <ul className="ml-8">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Tech Stack</strong>
        <ul className="px-4 py-2 flex gap-6 w-full overflow-y-hidden overflow-x-auto">
          {techStack.map(({ icon, title }, i) => (
            <li className={cn("group relative")} key={i}>
              <div className="group-hover:blur-[1px] transition-all w-10 md:w-14 group-hover:text-secondary">
                {icon}
              </div>
              <strong
                aria-hidden="true"
                className="invisible group-hover:visible transition-all absolute top-full group-hover:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary"
              >
                {title}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function AirBnBCloneCard() {
  return (
    <Card className="max-w-max">
      <CardContent>
        <div className="flex gap-4 overflow-x-auto items-center pt-7 relative">
          <Image
            src="/images/projects/full-stack/airbnb/airbnb-clone-js-beta.vercel.app.png"
            alt="Project Preview"
            width={400}
            height={150}
            sizes="(min-width: 768px) 600px, (min-width: 1536px) 800px"
            className="rounded-lg w-[400px] md:w-[600px] h-auto 2xl:w-[800px]"
          />
          <Image
            className="rounded-lg w-[400px] md:w-[600px] h-auto 2xl:w-[800px]"
            src="/images/projects/full-stack/airbnb/airbnb-clone-js-beta.vercel.app-2.png"
            alt="Project Preview"
            width={400}
            height={150}
            sizes="(min-width: 769px) 600px, (min-width: 1536px) 800px"
          />
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex justify-between gap-2 overflow-x-auto w-full">
          <ProjectLink link="https://airbnb-clone-js-beta.vercel.app/hbnb">
            Visit <ExternalLinkIcon width={50} />
          </ProjectLink>
          <ProjectLink link="https://github.com/mdesignscode/airbnb-clone-js">
            Source code <ExternalLinkIcon width={50} />
          </ProjectLink>
        </div>
      </CardFooter>
    </Card>
  );
}
