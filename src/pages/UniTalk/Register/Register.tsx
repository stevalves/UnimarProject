import { Link } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidFactory } from "react-icons/bi";
import company from "../../../assets/company.jpg";
import student from "../../../assets/student.webp";

const Register = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-forest-700 to-forest-800 flex items-center font-logo py-28">
      <div className="container flex gap-8 md:gap-4 md:justify-evenly flex-col text-forest-900 md:flex-row mx-auto">
        <Link
          data-aos="zoom-in-down"
          to="user"
          className="bg-white rounded md:w-[400px] overflow-hidden"
        >
          <img
            src={student}
            alt="company"
            className="w-full h-[320px] inset-0 bg-cover bg-center object-cover"
          />
          <div className="flex flex-col gap-2 px-2 py-4">
            <h4 className="text-center text-lg flex items-center justify-between">
              Sou Estudante
              <PiStudentFill />
            </h4>
            <p className="">
              Quero facilidade de encontrar vagas que condizem com minha
              formação.
            </p>
          </div>
        </Link>
        <Link
          data-aos="zoom-in-down"
          to="company"
          className="bg-white rounded md:w-[400px] h-full overflow-hidden"
        >
          <img
            src={company}
            alt="company"
            className="w-full h-[320px] inset-0 bg-cover bg-center object-cover"
          />
          <div className="flex flex-col gap-2 px-2 py-4">
            <h4 className="text-center text-lg flex items-center justify-between">
              Sou Empresa
              <BiSolidFactory />
            </h4>
            <p className="">
              Quero assertividade na hora de encontrar profissionais
              qualificados para minha organização.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Register;
