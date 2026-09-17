import { motion, AnimatePresence } from "motion/react";
import { ImageIcon } from "lucide-react";
import InputField from "./inputField";
import { useUserContext } from "@/hooks/useUser";
import { useCreateUser } from "@/hooks/useCreateUser";

export function ProfileForm() {
  const { user } = useUserContext();
  const {
    handleSubmit,
    handleAvatarClick,
    setIsHovering,
    avatarUrl,
    isHovering,
    register,
    onSubmit,
    errors,
    isSubmitting,
  } = useCreateUser();

  return (
    <div className="w-full rounded-2xl overflow-hidden mt-10 pb-4">
      <div className="px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8 p-6 bg-[#fafafa] rounded-lg">
          <p className="w-28 shrink-0 text-sm text-gray-500">Profile picture</p>

          <motion.button
            type="button"
            onClick={handleAvatarClick}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-24 h-24 shrink-0 overflow-hidden rounded-2xl outline-none
                     focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
          >
            {user && user.profilePicture ? (
              <img
                src={`${user.profilePicture}`}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-200" />
            )}

            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/55"
                >
                  <motion.div
                    initial={{ y: 4 }}
                    animate={{ y: 0 }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <ImageIcon
                      className="h-5 w-5 text-white"
                      strokeWidth={1.75}
                    />
                    <span className="text-xs font-medium text-white">
                      Change Image
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <p className="text-xs leading-relaxed text-gray-400">
            Image must be below 1024x1024px.
            <br />
            Use PNG, JPG, or BMP format.
          </p>
        </div>
      </div>

      {/* Fields */}
      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="px-6 md:px-10">
            <div className="bg-[#fafafa] flex flex-col gap-5 p-6 rounded-lg">
              <InputField
                name="firstName"
                label="First name"
                required
                register={register}
                error={errors.firstName}
              />
              <InputField
                name="lastName"
                label="Last name"
                required
                register={register}
                error={errors.lastName}
              />
              <InputField
                name="email"
                label="Email"
                register={register}
                error={errors.email}
              />
            </div>
          </div>
          <div className="h-px bg-gray-100 mt-10" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="self-end mx-10 rounded-lg bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white
                   transition-colors duration-150 hover:bg-indigo-600 disabled:opacity-50"
          >
            {isSubmitting ? "processing..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
