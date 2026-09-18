import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Use userContext inside user context");
  }
  return context;
};
