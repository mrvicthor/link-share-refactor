import { reorderLinks } from "../helpers/reorderLinks";
import type { Platform } from "./platform";

import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z
    .string({ message: "First name is required" })
    .min(2, { message: "Can't be empty" }),
  lastName: z
    .string({ message: "Last name is required" })
    .min(2, { message: "Can't be empty" }),
  email: z.string().email({ message: "Invalid email" }),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export type Link = {
  id: string;
  platform: Platform;
  url: string;
  displayOrder: number;
};

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
  links: Link[];
}

export type ActionType =
  | {
      type: "changed_name";
      firstName: string;
      lastName: string;
      email: string;
      profilePicture: string;
    }
  | { type: "add_link"; link: Link[] }
  | { type: "delete_link"; id: string }
  | { type: "update_link"; link: Pick<Link, "platform" | "url" | "id"> }
  | { type: "reorder_link"; link: Link };

export function userReducer(state: User, action: ActionType) {
  switch (action.type) {
    case "changed_name": {
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        profilePicture: action.profilePicture,
      };
    }
    case "add_link": {
      return {
        ...state,
        links: [...state.links, ...action.link],
      };
    }
    case "delete_link": {
      return {
        ...state,
        links: state.links.filter((link) => link.id !== action.id),
      };
    }
    case "update_link": {
      return {
        ...state,
        links: state.links.map((link) =>
          link.id === action.link.id
            ? { ...link, platform: action.link.platform, url: action.link.url }
            : link,
        ),
      };
    }
    case "reorder_link": {
      return {
        ...state,
        links: reorderLinks(state.links, action.link),
      };
    }
    default: {
      return state;
    }
  }
}
