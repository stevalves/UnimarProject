import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { tv } from "tailwind-variants";

interface iNavValues {
  id: string;
  value: React.ReactNode;
  href: string;
}

const navValues: iNavValues[] = [
  {
    id: "Unimar Facebook",
    value: (
      <>
        <AiFillFacebook />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">
          Facebook
        </h4>
      </>
    ),
    href: "https://www.facebook.com/universidadedemarilia/",
  },
  {
    id: "Unimar Instagram",
    value: (
      <>
        <AiFillInstagram />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">
          Instagram
        </h4>
      </>
    ),
    href: "https://www.instagram.com/unimaroficial/",
  },
  {
    id: "Unimar Twitter",
    value: (
      <>
        <AiFillTwitterCircle />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">
          Twitter
        </h4>
      </>
    ),
    href: "https://twitter.com/unimar_oficial",
  },
  {
    id: "Unimar LinkedIn",
    value: (
      <>
        <AiFillLinkedin />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">
          LinkedIn
        </h4>
      </>
    ),
    href: "https://www.linkedin.com/school/universidade-de-mar%C3%ADlia/",
  },
  {
    id: "Unimar YouTube",
    value: (
      <>
        <AiFillYoutube />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">
          YouTube
        </h4>
      </>
    ),
    href: "https://www.youtube.com/user/UnimarTV",
  },
];

interface iNavList {
  open: boolean;
}

const NavList = ({ open }: iNavList) => {
  const list_tv = tv({
    base: "fixed sm:py-4 overflow-hidden flex flex-col transition-all sm:static sm:h-max text-[2rem] sm:text-[1.5rem] justify-between py-24 sm:gap-2 w-0 sm:bg-transparent sm:flex-row sm:w-max sm:visible overflow-x-hidden bg-forest-800/90 invisible top-0 h-screen right-0 duration-1",
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
          <a
            target="_blank"
            href={value.href}
            className="flex flex-col items-center transition-colors duration-[.3s] hover:text-forest-200"
          >
            {value.value}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
