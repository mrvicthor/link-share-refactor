import { ToastContainer } from "react-toastify";
import { Button } from "./ui/button";
import { Controller } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { PLATFORM_OPTIONS } from "@/domain/platform.ts";
import Platform from "@/components/platform.tsx";
import { Input } from "@/components/ui/input.tsx";
import PlatformValue from "@/components/platformValue.tsx";
import Board from "./board";
import { useCreateLink } from "@/hooks/useCreateLink";

const FormBoard = () => {
  const { isOpen, setIsOpen, append, form, onSubmit, fields, remove } =
    useCreateLink();

  return (
    <div>
      <ToastContainer />
      <div className="pt-8 px-6 md:px-10">
        <h1 className="font-bold text-2xl">Customize your links</h1>
        <p className="text-[#737373] opacity-80 text-sm mt-4">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button
          className="mt-6 w-full border-[#633cff] border bg-white text-[#633cff] font-bold hover:bg-[#EFEBFF]"
          onClick={() => {
            setIsOpen(true);
            if (isOpen) append({ platform: "FRONTENDMENTOR", url: "" });
          }}
        >
          + Add new link
        </Button>
      </div>
      <form
        className="mt-6 relative h-120"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {isOpen ? (
          <div className="space-y-2 overflow-y-auto max-h-96 md:px-4">
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="mx-6 px-4 py-4 bg-[#fafafa] rounded-md"
              >
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#737373]">
                      Link #{index + 1}
                    </span>
                  </div>
                  <button
                    role="button"
                    className="block hover:cursor-pointer text-[#737373] opacity-50"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                </div>

                <Controller
                  control={form.control}
                  name={`links.${index}.platform` as const}
                  render={({ field, fieldState }) => {
                    const selectedOption = PLATFORM_OPTIONS.find(
                      (option) => option.value === field.value,
                    );
                    return (
                      <Field data-invalid={fieldState.invalid} className="mt-3">
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-[#333333] font-extralight"
                        >
                          Platform
                        </FieldLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            className="hover:border-[#633cff] select-shadow"
                          >
                            <SelectValue placeholder="Select a platform">
                              {selectedOption && (
                                <PlatformValue
                                  title={selectedOption.label}
                                  icon={selectedOption.icon}
                                />
                              )}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {PLATFORM_OPTIONS.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                <Platform
                                  title={option.label}
                                  icon={option.icon}
                                />
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    );
                  }}
                />

                <Controller
                  control={form.control}
                  name={`links.${index}.url` as const}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="mt-2">
                      <FieldLabel
                        htmlFor={field.name}
                        className="text-[#333333] font-extralight"
                      >
                        Link
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="url"
                        aria-invalid={fieldState.invalid}
                        className={`${
                          fieldState.invalid ? "border-red-500" : ""
                        } hover:border-[#633cff] select-shadow`}
                        placeholder="🔗  https://github.com/benwright"
                      />
                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-[#ea5555] text-xs"
                        />
                      )}
                    </Field>
                  )}
                />
              </div>
            ))}
          </div>
        ) : (
          <Board />
        )}

        <hr className="absolute bottom-18 w-full" />
        <Button
          type="submit"
          className={`absolute ${
            isOpen ? "bg-[#633cff]" : "bg-[#beadff]"
          } bottom-4.5 right-8.5 h-10 px-6 hover:bg-[#beadff]`}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default FormBoard;
