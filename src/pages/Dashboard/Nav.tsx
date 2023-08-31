import { AiOutlineMail } from "react-icons/ai";
import { BiHash, BiMoneyWithdraw } from "react-icons/bi";
import { PiHouseBold, PiSuitcaseDuotone, PiTargetDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="xl:w-1/6 flex flex-col items-center h-max sm:sticky sm:top-28 fixed bottom-0 left-0 right-0">
          <ul className="text-2xl w-full py-2 px-4 bg-forest-700 sm:rounded-left flex sm:justify-normal justify-between sm:flex-col gap-4 text-forest-50">
            <li className="border-b border-forest-50">
              <Link
                to="/dashboard"
                className="flex gap-2 items-center py-2 hover:text-forest-100"
              >
                <PiHouseBold /> <span className="hidden xl:inline">Home</span>
              </Link>
            </li>
            <li className="border-b border-forest-50">
              <Link
                to="/dashboard"
                className="flex gap-2 items-center py-2 hover:text-forest-100"
              >
                <BiHash /> <span className="hidden xl:inline">Explorar</span>
              </Link>
            </li>
            <li className="border-b border-forest-50">
              <Link
                to="/dashboard"
                className="flex gap-2 items-center py-2 hover:text-forest-100"
              >
                <PiSuitcaseDuotone />{" "}
                <span className="hidden xl:inline">Vagas</span>
              </Link>
            </li>
            <li className="border-b border-forest-50">
              <Link
                to="/dashboard"
                className="flex gap-2 items-center py-2 hover:text-forest-100"
              >
                <PiTargetDuotone />{" "}
                <span className="hidden xl:inline">Aplicadas</span>
              </Link>
            </li>
            <li className="border-b border-forest-50">
              <Link
                to="/dashboard"
                className="flex gap-2 items-center py-2 hover:text-forest-100"
              >
                <AiOutlineMail />{" "}
                <span className="hidden xl:inline">Mensagens</span>
              </Link>
            </li>
            <li className="border-b border-forest-50">
              <Link
                to="/dashboard"
                className="flex gap-2 items-center py-2 hover:text-forest-100"
              >
                <BiMoneyWithdraw />{" "}
                <span className="hidden xl:inline">Contribuir</span>
              </Link>
            </li>
          </ul>
        </nav>
  );
};

export default Nav;