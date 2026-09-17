import { useForm } from "react-hook-form";
import { type CreateUserDTO, createUserSchema } from "@/domain/user.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import IconChangesSaved from "@/assets/images/icon-changes-saved.svg";
import { useUserContext } from "./useUser";
import { toast } from "react-toastify";

const MAX_IMAGE_SIZE = 1024 * 1024;
export const useCreateUser = () => {
  const userId = localStorage.getItem("userId");
  const [isHovering, setIsHovering] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const { user, dispatch } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserDTO>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      firstName: user ? user.firstName : "",
      lastName: user ? user.lastName : "",
      email: user ? user.email : "",
    },
  });

  const onSubmit = async (data: CreateUserDTO) => {
    dispatch({
      type: "changed_name",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      profilePicture: avatarUrl || "",
    });
    toast.success("Profile updated successfully", {
      position: "top-center",
      icon: <img src={IconChangesSaved} alt="Changes saved" />,
    });
  };

  const handleAvatarClick = () => {
    if (!userId) {
      toast.error("Save your profile first, then add a picture", {
        position: "top-center",
      });
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/jpeg,image/bmp";
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const allowedTypes = ["image/png", "image/jpeg", "image/bmp"];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Unsupported file type", { position: "top-center" });
        return;
      }
      if (file.size >= MAX_IMAGE_SIZE) {
        toast.error("Image must be less than 1MB", { position: "top-center" });
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      //setAvatarFile(file);
      setAvatarUrl(previewUrl);
    };
    input.click();
  };

  return {
    isHovering,
    setIsHovering,
    avatarUrl,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    handleAvatarClick,
  };
};
