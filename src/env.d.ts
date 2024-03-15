/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type TProjectInfo = {
  live?: string;
  source?: string;
  preview: string;
  title: string;
  summary: string;
  description: string
  techStack: string[],
  features?: string[],
  technicalDetails?: string[],
  isFeatured?: boolean;
}
