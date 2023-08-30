import { InputHTMLAttributes } from "react";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  pattern?: string;
  value?: string;
  defaultValue?: string;
  errorMessage: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
}