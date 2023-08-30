import { Link, useLocation, Location } from "react-router-dom";
import Header from "../../../components/Header/Header";
import unitalk from "../../../assets/unitalk-onlydraw1.png";
import { tv } from "tailwind-variants";
import { useEffect, useState } from "react";
import Hamburguer from "../../../components/Header/Hamburguer";

const list_tv = tv({
  base: "absolute py-1 sm:border-l sm:pl-4 overflow-hidden flex transition-all sm:static sm:h-max text-[.75rem] sm:text-[1.5rem] justify-evenly sm:gap-4 w-0 sm:bg-transparent sm:w-max sm:visible overflow-x-hidden bg-forest-800 invisible -bottom-9 h-max right-0",
  variants: {
    open: {
      true: "w-full visible z-10",
    },
  },
  defaultVariants: {
    open: false,
  },
});

const UniTalkHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const location: Location = useLocation();
  useEffect(() => {
    setOpen(false)
  }, [location]);

  return (
    <Header>
      <Link to="/unitalk" className="flex items-center gap-2 md:w-max w-12">
        <img src={unitalk} alt="UniTalk logo" />
        <h1 className="font-logo md:text-5xl text-2xl">UniTalk</h1>
      </Link>
      {/* <div className="flex border-l border-forest-50 pl-4 text-2xl font-logo gap-2"></div> */}
      <ul className={list_tv({ open })}>
        <Link
          to="/unitalk/register"
          className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors sm:w-max w-1/3 text-center"
        >
          Registro
        </Link>
        <Link
          to="/unitalk/login"
          className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors sm:w-max w-1/3 text-center"
        >
          Login
        </Link>
      </ul>
      <Hamburguer open={open} setOpen={setOpen} />
    </Header>
  );
};

export default UniTalkHeader;
