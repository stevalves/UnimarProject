import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from "../assets/bg1.jpg";

const coursesIn: iCourse[] = [
  {
    id: 1,
    name: "Administração",
    photo: "",
    url: "https://oficial.unimar.br/cursos/administracao/",
  },
  {
    id: 2,
    name: "Análise e desenvolvimento de sistemas",
    photo: "",
    url: "https://oficial.unimar.br/cursos/analise-e-desenvolvimento-de-sistemas/",
  },
  {
    id: 3,
    name: "Arquitetura e Urbanismo",
    photo: "",
    url: "https://oficial.unimar.br/cursos/arquitetura-e-urbanismo/",
  },
  {
    id: 4,
    name: "Ciência da Computação",
    photo: "",
    url: "https://oficial.unimar.br/cursos/ciencia-da-computacao/",
  },
  {
    id: 5,
    name: "Biomedicina",
    photo: "",
    url: "https://oficial.unimar.br/cursos/biomedicina/",
  },
  {
    id: 6,
    name: "Ciência Contábeis",
    photo: "",
    url: "https://oficial.unimar.br/cursos/ciencias-contabeis/",
  },
  {
    id: 7,
    name: "Direito",
    photo: "",
    url: "https://oficial.unimar.br/cursos/direito/",
  },
  {
    id: 8,
    name: "Educação Física",
    photo: "",
    url: "https://oficial.unimar.br/cursos/educacao-fisica/",
  },
  {
    id: 9,
    name: "Enfermagem",
    photo: "",
    url: "https://oficial.unimar.br/cursos/enfermagem/",
  },
  {
    id: 10,
    name: "Engenharia Agronômica",
    photo: "",
    url: "https://oficial.unimar.br/cursos/engenharia-agronomica/",
  },
  {
    id: 11,
    name: "Engenharia Civil",
    photo: "",
    url: "https://oficial.unimar.br/cursos/engenharia-civil/",
  },
  {
    id: 12,
    name: "Engenharia de Produção Mecânica",
    photo: "",
    url: "https://oficial.unimar.br/cursos/engenharia-de-producao-mecanica/",
  },
  {
    id: 13,
    name: "Engenharia Elétrica",
    photo: "",
    url: "https://oficial.unimar.br/cursos/engenharia-eletrica/",
  },
  {
    id: 14,
    name: "Farmácia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/farmacia/",
  },
  {
    id: 15,
    name: "Fisioterapia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/fisioterapia/",
  },
  {
    id: 16,
    name: "Medicina",
    photo: "",
    url: "https://oficial.unimar.br/cursos/medicina/",
  },
  {
    id: 17,
    name: "Medicina Veterinária",
    photo: "",
    url: "https://oficial.unimar.br/cursos/medicina-veterinaria/",
  },
  {
    id: 18,
    name: "Nutrição",
    photo: "",
    url: "https://oficial.unimar.br/cursos/nutricao/",
  },
  {
    id: 19,
    name: "Odontologia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/odontologia/",
  },
  {
    id: 20,
    name: "Psicologia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/psicologia/",
  },
  {
    id: 21,
    name: "Publicidade e Propaganda",
    photo: "",
    url: "https://oficial.unimar.br/cursos/publicidade-e-propaganda/",
  },
];

type iCourse = {
  id: number;
  name: string;
  photo: string;
  url: string;
  desc?: string;
};

const CourseCard = ({ course }: { course: iCourse }) => {
  const { name } = course;

  return (
    <div className="h-[320px] bg-gray-500 relative">
      <img src={a} alt="aasd" className="w-full" />
      <button
        onClick={() => console.log(name)}
        className="absolute left-0 right-0 top-0 bottom-0 bg-black/60 text-white flex items-center pt-4 flex-col"
      >
        <h4>{name}</h4>
      </button>
    </div>
  );
};

const CoursesList = () => {
  return (
    <section className="h-[400px] bg-forest-600/90 p-2 flex flex-col justify-between">
      <div className="h-full container mx-auto flex flex-col gap-4">
        <div className="pb-2 text-forest-50 flex justify-between items-center">
          <h3 className="text-2xl">Nossos cursos</h3>
          <ul className="flex text-forest-800 gap-4">
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="presencial"
                name="courseType"
                id="presencial"
                defaultChecked
              />
              <label
                className="flex px-4 py-2 bg-transparent text-forest-50 font-semibold border-2 border-forest-50 rounded cursor-pointer focus:outline-none hover:bg-forest-100/20 transition-colors duration-300 peer-checked:border-forest-800 peer-checked:bg-forest-100 peer-checked:text-forest-800"
                htmlFor="presencial"
              >
                Presencial
              </label>
            </li>
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="ead"
                name="courseType"
                id="ead"
              />
              <label
                className="flex px-4 py-2 bg-transparent text-forest-50 font-semibold border-2 border-forest-50 rounded cursor-pointer focus:outline-none hover:bg-forest-100/20 transition-colors duration-300 peer-checked:border-forest-800 peer-checked:bg-forest-100 peer-checked:text-forest-800"
                htmlFor="ead"
              >
                EAD
              </label>
            </li>
          </ul>
        </div>
        <Carousel
          showArrows
          autoPlay
          centerMode
          transitionTime={1000}
          interval={5000}
          showThumbs={false}
          className="rounded overflow-hidden"
        >
          {coursesIn.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CoursesList;
