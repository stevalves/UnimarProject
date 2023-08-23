import { useEffect, useState } from "react";

import Hamburguer from "./Hamburguer";
import NavList from "./NavList";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");
  }, [open]);

  return (
    <nav className="flex w-max items-center justify-between text-[1.5rem] text-forest-50 md:text-[2rem]">
      <NavList open={open} />
      <Hamburguer open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
