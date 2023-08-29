import { VariantProps, tv } from "tailwind-variants";
import { ComponentProps, useEffect, useState } from "react";
import MotionScroll from "../Scroll";

const header = tv({
  base: "bg-transparent fixed right-0 left-0 top-0 text-[2rem] text-gray-300 transition-[3s] flex items-center justify-center z-20",
  variants: {
    see: {
      true: "py-2 opacity-[0.85] backdrop-blur shadow-xl bg-black/50",
      false: "py-1",
    },
  },
  defaultVariants: {
    see: false,
  },
});

export type iHeaderProps = ComponentProps<"header"> & VariantProps<typeof header>;

const Header = ({ children, className }: iHeaderProps) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const newScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollY(newScroll);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={header({
        see: scrollY > 40 ? true : false,
        className
      })}
    >
      <div className="container mx-auto flex w-full items-center justify-between p-2">
        {children}
        <MotionScroll />
      </div>
    </header>
  );
};

export default Header;
