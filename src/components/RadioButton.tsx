import { InputHTMLAttributes, forwardRef } from "react";

export interface iRadioButtonDivProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string | number;
  defaultChecked?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, iRadioButtonDivProps>(
  ({ label, id, value, defaultChecked, ...rest }, ref) => {

    return (
      <>
        <input
          className="appearance-none absolute peer"
          type="radio"
          id={id}
          ref={ref}
          value={value}
          defaultChecked={defaultChecked}
          onClick={() => {console.log(value);
          }}
          {...rest}
        />
        <label htmlFor={id} className="peer-checked:bg-red-500 rounded flex justify-center items-center p-4 w-full h-12 cursor-pointer bg-white text-forest-800 border-2 border-forest-800">{label}</label>
      </>
    );
  }
);
