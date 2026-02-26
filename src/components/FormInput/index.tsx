import { Input } from "antd";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { FormErrorLabel } from "../FormErrorLabel";
import type { InputProps } from "antd/es/input";

export interface IInputProps<TFieldValues extends FieldValues> extends Omit<InputProps, 'form' | 'name'> {
  name: Path<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email';
}

export const FormInput = <TFieldValues extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  autoComplete = 'off',
  disabled = false,
  type = 'text',
}: IInputProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div
          className="flex flex-col gap-0.5 text-start items-start"
        >
          <FormLabel title={label} />
          <Input
            {...field}
            status={fieldState.error ? "error" : undefined}
            aria-invalid={Boolean(fieldState.error)}
            aria-describedby={fieldState.error ? `${name}-error` : undefined}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete}
            disabled={disabled}
          />
          {fieldState.error && (
            <FormErrorLabel error={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
}