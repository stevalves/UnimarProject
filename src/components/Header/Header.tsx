import { tv } from "tailwind-variants";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import MotionScroll from "../Scroll";
import { Link } from "react-router-dom";

const Header = () => {
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

  const header = tv({
    base: "bg-transparent fixed right-0 left-0 top-0 text-[2rem] text-gray-300 transition-[3s] flex items-center justify-center z-10",
    variants: {
      see: {
        true: "py-2 opacity-[0.85] backdrop-blur shadow-xl",
        false: "py-1",
      },
    },
    defaultVariants: {
      see: false,
    },
  });

  return (
    <header
      className={header({
        see: scrollY > 40 ? true : false,
      })}
    >
      <div className="container mx-auto flex w-full items-center justify-between p-2">
        <Link to="/">
          <h1 className="text-[1.5rem] tracking-wide md:text-[2rem] text-forest-100">
            Logo
          </h1>
        </Link>
        <NavBar />
        <MotionScroll />
      </div>
    </header>
  );
};

export default Header;
