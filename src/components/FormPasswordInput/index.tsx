import { Input } from "antd";
import type { PasswordProps } from "antd/es/input/Password";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { FormErrorLabel } from "../FormErrorLabel";

export interface FormPasswordInputProps<TFieldValues extends FieldValues>
  extends Omit<PasswordProps, "form" | "name" | "type"> {
  name: Path<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
}

export const FormPasswordInput = <TFieldValues extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  autoComplete = "off",
  disabled = false,
  onChange,
  onBlur,
  ...passwordProps
}: FormPasswordInputProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-0.5 text-start items-start">
          <FormLabel title={label} />
          <Input.Password
            {...passwordProps}
            {...field}
            status={fieldState.error ? "error" : undefined}
            aria-invalid={Boolean(fieldState.error)}
            aria-describedby={fieldState.error ? `${name}-error` : undefined}
            placeholder={placeholder}
            autoComplete={autoComplete}
            disabled={disabled}
            onChange={(event) => {
              field.onChange(event);
              onChange?.(event);
            }}
            onBlur={(event) => {
              field.onBlur();
              onBlur?.(event);
            }}
          />
          {fieldState.error && (
            <FormErrorLabel error={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
};
