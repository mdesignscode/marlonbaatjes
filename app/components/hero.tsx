"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Paytone_One, Poppins } from "next/font/google";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";

const patone = Paytone_One({ weight: ["400"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

const AnimateTitle = ({ text, delay }: { delay?: number; text: string }) => (
  <Animate
    classNames={cn(
      "text-2xl text-gray-200 text-center mt-2 tracking-widest uppercase",
      poppins.className
    )}
    delay={3 + (delay || 0)}
  >
    {text}
  </Animate>
);

export default function Hero() {
  return (
    <motion.div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2 items-center">
        <Animate>
          <Image
            src="/images/marlon.png"
            width={200}
            height={200}
            alt="Marlon"
          />
        </Animate>

        <div>
          <div className="flex justify-center gap-2">
            <Animate
              classNames={cn("text-4xl text-center", patone.className)}
              delay={1}
            >
              Hi,
            </Animate>

            <Animate
              classNames={cn("text-4xl text-center", patone.className)}
              delay={1.8}
            >
              I am Marlon
            </Animate>
          </div>

          <div className="flex gap-2">
            <AnimateTitle text="full" />
            <AnimateTitle text="stack" delay={0.5} />
            <AnimateTitle text="web" delay={1} />
            <AnimateTitle text="developer" delay={1.5} />
          </div>
        </div>
      </div>

      <Button>
        <Link href="/projects">My Projects</Link>
      </Button>
    </motion.div>
  );
}

function Animate({
  children,
  classNames,
  delay,
}: {
  children: ReactNode;
  classNames?: string;
  delay?: number;
}) {
  return (
    <motion.p
      className={classNames}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay }}
    >
      {children}
    </motion.p>
  );
}
