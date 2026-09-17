import {
  type Platform as IPlatform,
  PLATFORM_OPTIONS,
} from "@/domain/platform.ts";
import { Controller } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DialogFooter, DialogClose } from "@/components/ui/dialog.tsx";
import PlatformValue from "../platformValue";
import Platform from "../platform";
import { useUpdateLink } from "@/hooks/useUpdateLink";
import { useDeleteLink } from "@/hooks/useDelete";

type EditProps = {
  id: string;
  url: string;
  platform: IPlatform;
  displayOrder: number;
};

const EditForm = ({ id, url, platform, displayOrder }: EditProps) => {
  const { form, onSubmit } = useUpdateLink(id, platform, url, displayOrder);
  const { deleteOne } = useDeleteLink(id);
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid gap-4 py-4">
        <Controller
          control={form.control}
          name="platform"
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
                <Select value={field.value} onValueChange={field.onChange}>
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
                      <SelectItem key={option.value} value={option.value}>
                        <Platform title={option.label} icon={option.icon} />
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
          name="url"
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
                aria-invalid={fieldState.invalid}
                className="hover:border-[#633cff] select-shadow"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <DialogFooter>
        <DialogClose
          render={<Button variant="destructive" onClick={() => deleteOne()} />}
        >
          Delete
        </DialogClose>
        <DialogClose
          render={
            <Button
              type="submit"
              variant="secondary"
              className="bg-[#633cff]"
            />
          }
        >
          Save changes
        </DialogClose>
      </DialogFooter>
    </form>
  );
};

export default EditForm;
