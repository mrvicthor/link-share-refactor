import { useForm } from "react-hook-form";
import {
  type Platform,
  type UpdateLinkDTO,
  updateLinkSchema,
} from "@/domain/platform.ts";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { useUserContext } from "./useUser";

export const useUpdateLink = (
  id: string,
  platform: Platform,
  url: string,
  displayOrder: number,
) => {
  const { dispatch } = useUserContext();
  const form = useForm<UpdateLinkDTO>({
    resolver: zodResolver(updateLinkSchema),
    defaultValues: {
      id,
      platform,
      url,
      displayOrder,
    },
  });

  const onSubmit = (data: UpdateLinkDTO) => {
    dispatch({
      type: "update_link",
      link: { ...data, platform: data.platform, url: data.url },
    });
    toast.success("Link updated successfully");
  };

  return {
    form,
    onSubmit,
  };
};
