import { InitialUniTalk, HowHelp, Offer } from ".";
import { useEffect } from "react";

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
        <a href="https://oficial.unimar.br/" className="w-max text-center rounded-xl py-2 px-4 border font-logo border-forest-50 text-forest-50">
          Saiba mais sobre a Unimar clicando aqui!
        </a>
      </div>
    </main>
  );
};

export default UniTalk;
