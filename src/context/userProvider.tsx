import { useReducer, type ReactNode } from "react";
import { UserContext } from "./userContext";
import { userReducer, type User } from "../domain/user";

const initialState = {
  email: "victoreleanya89@gmail.com",
  firstName: "victor",
  id: "117e9430-9362-4b63-b88d-f84c6cf32851",
  lastName: "Eleanya",
  links: [
    {
      id: "12837622-e1fc-42f4-be46-32a6dfffc0a6",
      platform: "FRONTENDMENTOR",
      url: "https://www.frontendmentor.io/profile/mrvicthor",
      displayOrder: 0,
    },
    {
      id: "50867363-129e-483d-8fbe-023232764333",
      platform: "TWITTER",
      url: "https://x.com/eva_skillz",
      displayOrder: 1,
    },
    {
      id: "5edce3e9-074b-4933-b399-f8d694484870",
      platform: "LINKEDIN",
      url: "https://www.linkedin.com/in/victor-eleanya-87a06543/",
      displayOrder: 2,
    },
    {
      id: "5c4beb05-96ec-4ac9-8d20-6144591ad7c8",
      platform: "GITHUB",
      url: "https://github.com/mrvicthor",
      displayOrder: 3,
    },
  ],
  profilePicture: "https://placehold.net/avatar-5.svg",
} satisfies User;

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);
  return <UserContext value={{ user, dispatch }}>{children}</UserContext>;
};
