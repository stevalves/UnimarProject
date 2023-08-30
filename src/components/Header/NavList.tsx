import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";

interface iNavValues {
  id: string;
  value: React.ReactNode;
  href: string;
}

const navValues: iNavValues[] = [
  {
    id: "Home",
    value: (
      <>
        <h4 className="flex mt-1 text-[1.5rem] tracking-wide">Home</h4>
      </>
    ),
    href: "/",
  },
  {
    id: "UniTalk",
    value: (
      <>
        <h4 className="flex mt-1 text-[1.5rem] tracking-wide">UniTalk</h4>
      </>
    ),
    href: "/unitalk",
  },
  {
    id: "EAD",
    value: (
      <>
        <h4 className="flex mt-1 text-[1.5rem] tracking-wide">EAD</h4>
      </>
    ),
    href: "/ead",
  },
  {
    id: "Sobre",
    value: (
      <>
        <h4 className="flex mt-1 text-[1.5rem] tracking-wide">Sobre</h4>
      </>
    ),
    href: "/me",
  },
];

const NavList = ({ open }: { open: boolean }) => {
  const list_tv = tv({
    base: "absolute sm:py-4 overflow-hidden flex flex-col transition-all sm:static sm:h-max text-[.75rem] sm:text-[1.5rem] justify-between py-24 sm:gap-4 w-0 sm:bg-transparent sm:flex-row sm:w-max sm:visible overflow-x-hidden bg-forest-800/90 invisible top-0 h-screen right-0",
    variants: {
      open: {
        true: "w-full visible z-10",
      },
    },
    defaultVariants: {
      open: false,
    },
  });

  return (
    <ul className={list_tv({ open })}>
      {navValues.map((value) => (
        <li
          className="flex items-center justify-center"
          key={value.id}
          title={value.id}
        >
          <Link
            to={value.href}
            className="flex flex-col items-center transition-colors duration-[.3s] text-white hover:text-forest-50 hover:underline"
          >
            {value.value}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
