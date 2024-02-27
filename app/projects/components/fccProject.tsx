"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Image from "next/image";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface IFCCProjectProps {
  project: {
    demo: string;
    source: string;
    title: string;
    preview: string;
  };
}

export default function FCCProject({ project }: IFCCProjectProps) {
  return (
    <motion.div
      className="md:flex-none md:w-60"
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <Card className="md:h-full flex flex-col">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>

        <CardContent className="my-auto">
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
