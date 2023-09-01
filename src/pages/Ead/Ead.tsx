import { InitialEad, Characteristics, Challenges, EadBr } from ".";
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
    </main>
  );
};

export default Ead;
