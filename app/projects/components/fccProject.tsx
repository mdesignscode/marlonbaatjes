"use client";

import { buttonVariants } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import useIsMobile from "@/app/hooks/isMobile";
import { cn } from "@/utils/cn";
import { motion, useInView } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface IFCCProjectProps {
  project: {
    demo: string;
    source: string;
    title: string;
    preview: string;
  };
  index: number;
}

export default function FCCProject({ project, index }: IFCCProjectProps) {
  const isMobile = useIsMobile(),
    mobileStyles = {
      initial: {
        x: -100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
    },
    desktopStyles = {
      initial: {
        y: 100,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
    };

  return (
    <motion.div
      className="md:flex-none md:w-60"
      initial={isMobile ? mobileStyles.initial : desktopStyles.initial}
      whileInView={isMobile ? mobileStyles.animate : desktopStyles.animate}
      viewport={{ once: !isMobile }}
      transition={{
        type: "spring",
        stiffness: 50,
        delay: isMobile ? 0 : index * 0.15,
      }}
    >
      <Card className="md:h-full flex flex-col">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>

        <CardContent className="mt-auto">
          <Image
            src={project.preview}
            width={400}
            height={200}
            alt={`Preview for ${project.title}`}
            className="w-full h-auto rounded-lg"
          />
        </CardContent>

        <CardFooter>
          <Link
            href={project.demo}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2 justify-center w-full"
            )}
            target="_blank"
          >
            Visit <ExternalLinkIcon width={50} />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
