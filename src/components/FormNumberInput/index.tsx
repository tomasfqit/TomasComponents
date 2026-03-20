import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { FormErrorLabel } from "../FormErrorLabel";

export interface FormNumberInputProps<TFieldValues extends FieldValues>
  extends Omit<InputNumberProps, "value" | "onChange" | "name"> {
  name: Path<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  placeholder?: string;
  disabled?: boolean;
  onChange?: InputNumberProps["onChange"];
  onBlur?: InputNumberProps["onBlur"];
}

export const FormNumberInput = <TFieldValues extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  disabled = false,
  onChange,
  onBlur,
  ...inputProps
}: FormNumberInputProps<TFieldValues>) => {
  const { style, ...restProps } = inputProps;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full gap-0.5 text-start items-start">
          <FormLabel title={label} />
          <InputNumber
            {...restProps}
            value={field.value}
            onChange={(value) => {
              field.onChange(value);
              onChange?.(value);
            }}
            onBlur={(event) => {
              field.onBlur();
              onBlur?.(event);
            }}
            ref={field.ref}
            placeholder={placeholder}
            disabled={disabled}
            style={{ width: "100%", ...style }}
            status={fieldState.error ? "error" : undefined}
            aria-invalid={Boolean(fieldState.error)}
            aria-describedby={fieldState.error ? `${name}-error` : undefined}
          />
          {fieldState.error && (
            <FormErrorLabel error={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
};
