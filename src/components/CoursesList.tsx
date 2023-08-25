import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const coursesIn: iCourse[] = [
  {
    id: 1,
    name: "Administração",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/adm.jpg",
    url: "https://oficial.unimar.br/cursos/administracao/",
  },
  {
    id: 2,
    name: "Análise e desenvolvimento de sistemas",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/ands-e1644500942830.jpg",
    url: "https://oficial.unimar.br/cursos/analise-e-desenvolvimento-de-sistemas/",
  },
  {
    id: 3,
    name: "Arquitetura e Urbanismo",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/arq.jpg",
    url: "https://oficial.unimar.br/cursos/arquitetura-e-urbanismo/",
  },
  {
    id: 4,
    name: "Ciência da Computação",
    photo: "https://oficial.unimar.br/wp-content/uploads/2022/08/ciencia-da-computacao-2-e1661889313598.jpg",
    url: "https://oficial.unimar.br/cursos/ciencia-da-computacao/",
  },
  {
    id: 5,
    name: "Biomedicina",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/biomed.jpg",
    url: "https://oficial.unimar.br/cursos/biomedicina/",
  },
  {
    id: 6,
    name: "Ciência Contábeis",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/contabeis-2.jpg",
    url: "https://oficial.unimar.br/cursos/ciencias-contabeis/",
  },
  {
    id: 7,
    name: "Direito",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/direito.jpg",
    url: "https://oficial.unimar.br/cursos/direito/",
  },
  {
    id: 8,
    name: "Educação Física",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/edfisica-1.jpg",
    url: "https://oficial.unimar.br/cursos/educacao-fisica/",
  },
  {
    id: 9,
    name: "Enfermagem",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/enf.jpg",
    url: "https://oficial.unimar.br/cursos/enfermagem/",
  },
  {
    id: 10,
    name: "Engenharia Agronômica",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/engagro.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-agronomica/",
  },
  {
    id: 11,
    name: "Engenharia Civil",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/engcivil.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-civil/",
  },
  {
    id: 12,
    name: "Engenharia de Produção Mecânica",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/edprod.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-de-producao-mecanica/",
  },
  {
    id: 13,
    name: "Engenharia Elétrica",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/engeletrica.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-eletrica/",
  },
  {
    id: 14,
    name: "Farmácia",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/farmaciaa.jpg",
    url: "https://oficial.unimar.br/cursos/farmacia/",
  },
  {
    id: 15,
    name: "Fisioterapia",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/fisio.jpg",
    url: "https://oficial.unimar.br/cursos/fisioterapia/",
  },
  {
    id: 16,
    name: "Medicina",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/07/medicina-1.jpg",
    url: "https://oficial.unimar.br/cursos/medicina/",
  },
  {
    id: 17,
    name: "Medicina Veterinária",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/vet.jpg",
    url: "https://oficial.unimar.br/cursos/medicina-veterinaria/",
  },
  {
    id: 18,
    name: "Nutrição",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/nutricao.jpg",
    url: "https://oficial.unimar.br/cursos/nutricao/",
  },
  {
    id: 19,
    name: "Odontologia",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/odonto-1.jpg",
    url: "https://oficial.unimar.br/cursos/odontologia/",
  },
  {
    id: 20,
    name: "Psicologia",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/psico-e1595345018825.jpg",
    url: "https://oficial.unimar.br/cursos/psicologia/",
  },
  {
    id: 21,
    name: "Publicidade e Propaganda",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/pp.jpg",
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
  const { name, photo } = course;

  return (
    <div className="bg-white relative">
      <img src={photo} alt={name+" cover image"} className="w-[calc(100% - 20px)] mx-auto px-10 h-[140px] md:h-[320px] object-cover bg-[center_center]" />
      <button
        onClick={() => console.log(name)}
        className="absolute w-full top-0 bottom-0 bg-black/60 hover:bg-black/50 transition-colors duration-300 text-white flex items-center pt-4 flex-col"
      >
        <h4>{name}</h4>
      </button>
    </div>
  );
};

const CoursesList = () => {
  return (
    <section className="bg-forest-600/90 p-2 flex flex-col justify-between">
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
          showIndicators={false}
          showStatus={false}
          transitionTime={800}
          interval={6000}
          showThumbs={false}
          infiniteLoop
          className="rounded-xl overflow-hidden"
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
