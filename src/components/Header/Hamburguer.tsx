import { tv } from "tailwind-variants";

interface iHamburguer {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}

const Hamburguer = ({ open, setOpen }: iHamburguer) => {
  const button_tv = tv({
    base: "w-[36px] z-10 sm:hidden h-8 border-t-4 border-forest-200 relative after:absolute after:content-[''] after:bottom-0 after:right-0 after:left-0 after:border-b-4 after:border-forest-200 after:transition-transform after:duration-[.3s] before:content-[''] before:absolute before:left-0 before:right-0 before:top-[10px] before:border-b-4 before:border-forest-200 before:transition-transform before:duration-[.3s]",
    variants: {
      open: {
        true: "after:rotate-[45deg] after:-translate-y-[12px] before:rotate-[135deg] before:translate-y-[6px] border-none",
      },
    },
    defaultVariants: {
      open: false,
    },
  });

  return (
    <button
      onClick={() => {
        setOpen((value) => !value);
      }}
      className={button_tv({ open })}
    />
  );
};

export default Hamburguer;
