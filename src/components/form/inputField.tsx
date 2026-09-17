import { motion } from "motion/react";
import type { CreateUserDTO } from "@/domain/user.ts";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { useState } from "react";

type InputFieldProps = {
  name: keyof CreateUserDTO;
  label: string;
  required?: boolean;
  register: UseFormRegister<CreateUserDTO>;
  error?: FieldError;
};

const InputField = ({
  name,
  label,
  required,
  error,
  register,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { onBlur, ...registerRest } = register(name);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
        <label htmlFor={name} className="w-28 shrink-0 text-sm text-gray-500">
          {label}
          {required && <span className="text-gray-400">*</span>}
        </label>

        <motion.input
          id={name}
          type="text"
          {...registerRest}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur(e);
          }}
          animate={{
            borderColor: error ? "#f87171" : isFocused ? "#818cf8" : "#e5e7eb",
            boxShadow: isFocused
              ? "0 0 0 4px rgba(199, 210, 254, 0.5)"
              : "0 0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="flex-1 rounded-xl border px-4 py-2.5 text-sm text-gray-800 outline-none"
        />
      </div>

      {error && <p className="ml-36 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
