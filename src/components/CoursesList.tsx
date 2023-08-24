const courses: iCourse[] = [
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
    url: "https://oficial.unimar.br/cursos/engenharia-eletrica/"
  },
  {
    id: 14,
    name: "Farmácia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/farmacia/"
  },
  {
    id: 15,
    name: "Fisioterapia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/fisioterapia/"
  },
  {
    id: 16,
    name: "Medicina",
    photo: "",
    url: "https://oficial.unimar.br/cursos/medicina/"
  },
  {
    id: 17,
    name: "Medicina Veterinária",
    photo: "",
    url: "https://oficial.unimar.br/cursos/medicina-veterinaria/"
  },
  {
    id: 18,
    name: "Nutrição",
    photo: "",
    url: "https://oficial.unimar.br/cursos/nutricao/"
  },
  {
    id: 19,
    name: "Odontologia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/odontologia/"
  },
  {
    id: 20,
    name: "Psicologia",
    photo: "",
    url: "https://oficial.unimar.br/cursos/psicologia/"
  },
  {
    id: 21,
    name: "Publicidade e Propaganda",
    photo: "",
    url: "https://oficial.unimar.br/cursos/publicidade-e-propaganda/",
  },
]

type iCourse = {
  id: number
  name: string
  photo: string
  url: string
  desc?: string
}

const CourseCard = ({ course }: { course: iCourse }) => {

  const { name, url } = course

  return (
    <div className="w-[360px] min-w-[360px] h-full bg-white">
      <h4>{name}</h4>
      <a href={url}>Descobrir</a>
    </div>
  )
}

const CoursesList = () => {
  return (
    <section className="h-[400px] bg-forest-600/90 p-4 flex flex-col justify-between">
      <div className="container pb-2 px-4 mx-auto text-forest-50 flex justify-between items-center">
        <h3 className="text-2xl">Nossos cursos</h3>
        <ul className="flex text-forest-800 gap-4">
          <li className="relative">
            <input className="sr-only peer" type="radio" value="presencial" name="courseType" id="presencial" />
            <label className="flex px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="presencial">Presencial</label>
          </li>
          <li className="relative">
            <input className="sr-only peer" type="radio" value="ead" name="courseType" id="ead" />
            <label className="flex px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="ead">EAD</label>
          </li>
        </ul>
      </div>
      <ul className="container pb-2 px-4 h-5/6 mx-auto flex gap-2 items-end overflow-x-auto">
        {courses.map(course => <CourseCard course={course} key={course.id} />)}
        <div className="w-[360px] min-w-[360px] h-full bg-white"></div>
        <div className="w-[360px] min-w-[360px] h-full bg-white"></div>
        <div className="w-[360px] min-w-[360px] h-full bg-white"></div>
        <div className="w-[360px] min-w-[360px] h-full bg-white"></div>
        <div className="w-[360px] min-w-[360px] h-full bg-white"></div>
        <div className="w-[360px] min-w-[360px] h-full bg-white"></div>
      </ul>
    </section>
  )
}

export default CoursesList