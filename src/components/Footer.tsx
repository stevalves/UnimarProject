import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-4 w-full bg-forest-900 h-[90px]">
      <div className="container flex text-forest-50 mx-auto items-center justify-between h-full p-2 font-semibold text-xl">
        <Logo className="w-1/3 md:w-[10%]" />
        <p className="w-max text-center">2023</p>
        <Link to="me" className="hover:underline hover:text-forest-100 w-1/3 md:w-[10%] text-end">Saiba mais</Link>
      </div>
    </footer>
  );
};

export default Footer;
