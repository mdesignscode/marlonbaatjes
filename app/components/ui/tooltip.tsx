"use client";

import { cn } from "@/utils/cn";
import { Content, Provider, Root, Trigger } from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

const TooltipProvider = Provider;
const TooltipBase = Root;
const TooltipTrigger = Trigger;

const TooltipContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-accent px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-w-sm",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = Content.displayName;

export default function Tooltip({
  trigger,
  content,
  className,
}: {
  trigger: string;
  content: string;
  className: string;
}) {
  return (
    <TooltipProvider>
      <TooltipBase>
        <TooltipTrigger>
          <p className={className}>{trigger}</p>
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}
