import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import { createLinkSchema, type CreateLinkDTO } from "@/domain/platform.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from "./useUser";

export const useCreateLink = () => {
  const { dispatch } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<CreateLinkDTO>({
    resolver: zodResolver(createLinkSchema),
    defaultValues: {
      links: [
        {
          platform: "FRONTENDMENTOR",
          url: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  const onSubmit = (data: CreateLinkDTO) => {
    dispatch({
      type: "add_link",
      link: data.links.map((link, index) => ({
        id: crypto.randomUUID(), // Generate a new ID based on the current length of links
        platform: link.platform,
        url: link.url,
        displayOrder: index,
      })),
    });
  };

  return {
    isOpen,
    setIsOpen,
    fields,
    append,
    remove,
    onSubmit,
    form,
  };
};
