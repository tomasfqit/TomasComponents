import { Select } from "antd";
import type { SelectProps } from "antd/es/select";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { FormErrorLabel } from "../FormErrorLabel";

export interface FormSelectProps<TFieldValues extends FieldValues>
  extends Omit<SelectProps, "value" | "onChange" | "onBlur" | "name"> {
  name: Path<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  placeholder?: string;
  disabled?: boolean;
  onChange?: SelectProps["onChange"];
  onBlur?: SelectProps["onBlur"];
}

export const FormSelect = <TFieldValues extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  disabled = false,
  onChange,
  onBlur,
  ...selectProps
}: FormSelectProps<TFieldValues>) => {
  const {
    style,
    showSearch = true,
    optionFilterProp = "label",
    filterOption = (input, option) => {
      const label = typeof option?.label === "string" ? option.label : "";
      return label.toLowerCase().includes(input.toLowerCase());
    },
    ...restProps
  } = selectProps;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full gap-0.5 text-start items-start">
          <FormLabel title={label} />
          <Select
            {...restProps}
            value={field.value}
            showSearch={showSearch}
            optionFilterProp={optionFilterProp}
            filterOption={filterOption}
            onChange={(value, option) => {
              field.onChange(value);
              onChange?.(value, option);
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
