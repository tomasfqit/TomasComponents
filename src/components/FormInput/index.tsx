import { Input } from "antd";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { FormErrorLabel } from "../FormErrorLabel";

export interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  title: string;
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  placeholder?: string;
  type?: "text" | "password" | "email";
}

export function FormInput<TFieldValues extends FieldValues = FieldValues>({
  title,
  control,
  name,
  placeholder,
  type = "text",
}: FormInputProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-0.5">
          <FormLabel title={title} />
          <Input
            {...field}
            status={fieldState.error ? "error" : undefined}
            aria-invalid={Boolean(fieldState.error)}
            aria-describedby={fieldState.error ? `${name}-error` : undefined}
            placeholder={placeholder}
            type={type}
          />
          {fieldState.error && (
            <FormErrorLabel error={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
}
