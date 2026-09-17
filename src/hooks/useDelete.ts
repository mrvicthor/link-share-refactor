import { toast } from "react-toastify";
import { useUserContext } from "./useUser";

export const useDeleteLink = (linkId: string) => {
  const { dispatch } = useUserContext();
  const deleteOne = () => {
    dispatch({ type: "delete_link", id: linkId });
    toast.success("Link deleted successfully");
  };

  return {
    deleteOne,
  };
};
