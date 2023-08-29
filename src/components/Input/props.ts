import { InputHTMLAttributes } from "react";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  pattern?: string;
  value?: string;
  defaultValue?: string;
  errorMessage?: string;
}