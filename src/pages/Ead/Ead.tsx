import { InitialEad, Characteristics, Challenges, EadBr, EadHere } from ".";
import { useEffect } from "react";

const Ead = () => {
  useEffect(() => {
    document.title = "Unimar - EAD";
  }, []);

  return (
    <main className="bg-forest-500">
      <InitialEad />
      <Characteristics />
      <Challenges />
      <EadBr />
      <EadHere />
    </main>
  );
};

export default Ead;
