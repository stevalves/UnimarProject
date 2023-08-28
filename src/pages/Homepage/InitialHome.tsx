import { TbArrowDown } from "react-icons/tb";
import logo from "../../assets/logo-test.png"

const InitialHome = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center relative">
      <div className="p-4 md:p-16 flex flex-col items-center justify-center rounded bg-forest-900/20 shadow-2xl">
        <img data-aos="zoom-in-down" src={logo} alt="logo_exam" title="Unimar Vestibular 2024" />
      </div>
      <div className="absolute xl:block hidden bottom-12 text-forest-50 text-5xl animate-goDown">
        <TbArrowDown />
      </div>
    </section>
  );
};

export default InitialHome;
