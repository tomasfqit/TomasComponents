import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { FormErrorLabel } from "../FormErrorLabel";

dayjs.extend(customParseFormat);

const DEFAULT_FORMAT = "YYYY-MM-DD";

function primaryFormatToken(
  format: DatePickerProps["format"] | undefined,
  fallback: string,
): string {
  if (format == null) return fallback;
  if (typeof format === "string") return format;
  if (Array.isArray(format)) {
    const first = format[0];
    return typeof first === "string" ? first : fallback;
  }
  if (
    typeof format === "object" &&
    format !== null &&
    "format" in format &&
    typeof (format as { format: unknown }).format === "string"
  ) {
    return (format as { format: string }).format;
  }
  return fallback;
}

function parseFormString(
  value: unknown,
  formatToken: string,
): dayjs.Dayjs | null {
  if (value === "" || value == null) return null;
  if (dayjs.isDayjs(value)) return value.isValid() ? value : null;
  const str = String(value);
  const strict = dayjs(str, formatToken, true);
  if (strict.isValid()) return strict;
  const loose = dayjs(str);
  return loose.isValid() ? loose : null;
}

function toStoredString(
  date: dayjs.Dayjs | null,
  dateString: string | string[] | null | undefined,
  formatToken: string,
): string {
  if (date == null) return "";
  const ds = Array.isArray(dateString)
    ? (dateString[0] ?? "")
    : (dateString ?? "");
  if (typeof ds === "string" && ds.length > 0) {
    return ds;
  }
  return date.format(formatToken);
}

export interface FormDatePickerProps<TFieldValues extends FieldValues>
  extends Omit<DatePickerProps, "value" | "onChange" | "onBlur" | "name"> {
  name: Path<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  placeholder?: string;
  disabled?: boolean;
  onChange?: DatePickerProps["onChange"];
  onBlur?: DatePickerProps["onBlur"];
}

export const FormDatePicker = <TFieldValues extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  disabled = false,
  onChange,
  onBlur,
  ...pickerProps
}: FormDatePickerProps<TFieldValues>) => {
  const { style, format, ...restProps } = pickerProps;
  const formatToken = primaryFormatToken(format, DEFAULT_FORMAT);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full gap-0.5 text-start items-start">
          <FormLabel title={label} />
          <DatePicker
            {...restProps}
            format={format}
            value={parseFormString(field.value, formatToken)}
            onChange={(date, dateString) => {
              const single =
                date == null
                  ? null
                  : Array.isArray(date)
                    ? date[0] ?? null
                    : date;
              const next = toStoredString(single, dateString, formatToken);
              field.onChange(next);
              onChange?.(date, dateString);
            }}
            onBlur={(event, index) => {
              field.onBlur();
              onBlur?.(event, index);
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
