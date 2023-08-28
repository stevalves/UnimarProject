import { TbArrowDown } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-test.png"

const InitialHome = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="p-4 md:p-16 flex flex-col items-center justify-center rounded bg-forest-900/20 shadow-2xl">
        <img data-aos="zoom-in-down" src={logo} alt="logo_exam" title="Unimar Vestibular 2024"/>
        <div className="flex flex-col md:flex-row-reverse gap-4 w-full mt-16 px-4 justify-evenly text-forest-50">
          <Link
            to="dashboard"
            data-aos="zoom-in-right"
            data-aos-delay="500"
            className="px-4 py-2 text-xl rounded border-forest-50 hover:underline text-center"
          >
            Vamos lá
          </Link>
          <a
            href="#aboutus"
            data-aos="zoom-in-left"
            data-aos-delay="500"
            className="px-4 py-2 text-xl rounded border-forest-50 hover:underline text-center"
          >
            Sobre
          </a>
        </div>
      </div>
      <div className="absolute bottom-12 text-forest-50 text-5xl animate-goDown">
        <TbArrowDown />
      </div>
    </section>
  );
};

export default InitialHome;
