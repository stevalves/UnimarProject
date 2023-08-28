import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const tv_logo = tv({
  base: "w-1/2 md:w-4/6",
});

export type iLogoProps = ComponentProps<"img"> & VariantProps<typeof tv_logo>;

const Logo = ({ className, ...props }: iLogoProps) => {
  return (
    <img
      src="https://oficial.unimar.br/wp-content/themes/universo-unimar/images/logo.svg"
      alt="Unimar Logo"
      className={tv_logo({ className })}
      {...props}
    />
  );
};

export default Logo;
