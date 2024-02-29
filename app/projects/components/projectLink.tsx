import { buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/utils/cn";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function ProjectLink({
  link,
  width,
  children
}: {
  link: string;
  width?: string;
  children: ReactNode
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        buttonVariants({ variant: "outline" }),
        "flex items-center gap-2 justify-center",
        width
      )}
    >
      {children}
    </Link>
  );
}
