"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export interface IProjectCardProps {
  preview: string;
  live: string;
  source: string;
  title: string;
  index: number;
}

export default function ProjectCard({
  source,
  live,
  preview,
  title,
  index,
}: IProjectCardProps) {
  const ref = useRef(null),
    isInView = useInView(ref),
    cardVariants = {
      show: {
        opacity: 1,
        scale: [1.2, 1, 1.1, 1],
        transition: {
          duration: 1,
          type: "spring",
          stifness: 10,
        },
      },
      hide: {
        opacity: 0,
      },
    };

  return (
    <div
      className="flex-none w-full md:w-[40%] lg:w-[33%] bg-white group text-dark relative text-center shadow-card shadow-neutral-800"
      id="card"
    >
      <p className="text-lg uppercase tracking-widest text-gray-500">{title}</p>

      <div className="relative w-full h-auto aspect-video">
        <Image fill src={preview} alt="Project preview" />
      </div>
    </div>
  );
}
