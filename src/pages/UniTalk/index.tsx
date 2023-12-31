import { Link } from "react-router-dom";
import { useEffect } from "react";
import HowHelp from "./HowHelp";
import InitialUniTalk from "./InitialUniTalk";
import Offer from "./Offer";
import { VscLink } from "react-icons/vsc";

const UniTalk = () => {
  useEffect(() => {
    document.title = "UniTalk";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-forest-700 to-forest-800 flex flex-col">
      <InitialUniTalk />
      <HowHelp />
      <Offer />
      <div className="w-full my-8 flex justify-center">
        <Link
          to="/unimar"
          className="w-max text-center rounded-xl flex flex-col py-2 px-4 border font-logo items-center border-forest-50 text-forest-50"
        >
          Universo Unimar!
          <VscLink className="text-xl" /> 
        </Link>
      </div>
    </main>
  );
};

export default UniTalk;
