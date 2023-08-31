import { useEffect, useState } from "react";

import Hamburguer from "../../Hamburguer";
import NavList from "./NavList";
import { useLocation, Location } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const location: Location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="flex w-max items-center justify-between text-[1.5rem] text-forest-50 md:text-[2rem]">
      <NavList open={open} />
      <Hamburguer open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
