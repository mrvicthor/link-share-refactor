import { z } from "zod";
import { getIcon } from "../helpers/getIcon";

export const platforms = [
  "GITHUB",
  "FRONTENDMENTOR",
  "TWITTER",
  "LINKEDIN",
  "YOUTUBE",
  "FACEBOOK",
  "TWITCH",
  "DEVTO",
  "CODEWARS",
  "FREECODECAMP",
  "GITLAB",
  "HASHNODE",
  "STACKOVERFLOW",
] as const;

export const PlatformEnum = z.enum(platforms);

export type Platform = z.infer<typeof PlatformEnum>;

const linkSchema = z.object({
  platform: PlatformEnum,
  url: z.url("Must be a valid URL"),
});

export type CreateLinkFormData = z.infer<typeof linkSchema>;

export const createLinkSchema = z.object({
  links: z.array(linkSchema),
});

export type CreateLinkDTO = z.infer<typeof createLinkSchema>;

export const updateLinkSchema = z.object({
  id: z.number().int(),
  ...linkSchema.shape,
  displayOrder: z.number(),
});

export type UpdateLinkDTO = z.infer<typeof updateLinkSchema>;

export interface PlatformOptions {
  value: Platform;
  label: string;
  icon: string;
}

export const PLATFORM_OPTIONS: PlatformOptions[] = [
  { value: "GITHUB", label: "GitHub", icon: getIcon("GitHub") },
  {
    value: "FRONTENDMENTOR",
    label: "Frontend Mentor",
    icon: getIcon("Frontend Mentor"),
  },
  { value: "TWITTER", label: "Twitter", icon: getIcon("Twitter") },
  { value: "LINKEDIN", label: "LinkedIn", icon: getIcon("LinkedIn") },
  { value: "YOUTUBE", label: "YouTube", icon: getIcon("YouTube") },
  { value: "FACEBOOK", label: "Facebook", icon: getIcon("Facebook") },
  { value: "TWITCH", label: "Twitch", icon: getIcon("Twitch") },
  { value: "DEVTO", label: "Dev.to", icon: getIcon("Dev.to") },
  { value: "CODEWARS", label: "Codewars", icon: getIcon("Codewars") },
  {
    value: "FREECODECAMP",
    label: "freeCodeCamp",
    icon: getIcon("freeCodeCamp"),
  },
  { value: "GITLAB", label: "GitLab", icon: getIcon("GitLab") },
  { value: "HASHNODE", label: "Hashnode", icon: getIcon("Hashnode") },
  {
    value: "STACKOVERFLOW",
    label: "Stack Overflow",
    icon: getIcon("Stack Overflow"),
  },
];
