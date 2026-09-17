import { createContext } from "react";
import type { ActionType, User } from "../domain/user";

type UserWithoutDBContextType = {
  user: User;
  dispatch: React.ActionDispatch<[action: ActionType]>;
};

export const UserContext = createContext<UserWithoutDBContextType | undefined>(
  undefined,
);
