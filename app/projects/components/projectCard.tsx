"use client";

import Image from "next/image";

export interface IProjectCardProps {
  preview: string;
  live: string;
  source?: string;
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
  return (
    <div className="flex-none w-full md:w-[40%] lg:w-[33%] bg-neutral-200 group text-dark relative text-center shadow-card shadow-neutral-800">
      <p className="uppercase tracking-widest text-gray-500">{title}</p>

      <div className="relative w-full h-auto aspect-video">
        <Image
          fill
          src={preview}
          className="shadow-inner"
          alt="Project preview"
        />
        <div
          aria-hidden="true"
          className="w-full h-full shadow-inner absolute"
        />
      </div>
    </div>
  );
}
