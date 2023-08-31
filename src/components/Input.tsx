import { tv } from "tailwind-variants";
import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  pattern?: string;
  value?: string;
  defaultValue?: string;
  errorMessage:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl>
    | undefined;
}

const tv_input = tv({
  base: "py-2 px-3 placeholder:text-forest-600 border-2 border-forest-900 outline-none",
  variants: {
    error: {
      true: "border-red-700 placeholder:text-red-700",
    },
  },
  defaultVariants: {
    error: false,
  },
});

const Input = forwardRef<HTMLInputElement, iInputProps>(
  (
    {
      type,
      label,
      id,
      placeholder,
      value,
      pattern,
      errorMessage,
      required,
      ...rest
    },
    ref
  ) => {
    return (
      <fieldset className="flex flex-col gap-1 w-full">
        <label htmlFor={id} className="text-lg w-max p-1">
          {label}
          {required && <i className="text-red-700">*</i>}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          pattern={pattern}
          defaultValue={value}
          className={tv_input({ error: Boolean(errorMessage) })}
        />
        {errorMessage && (
          <p className="text-sm text-red-700">{String(errorMessage)}</p>
        )}
      </fieldset>
    );
  }
);

export default Input;
