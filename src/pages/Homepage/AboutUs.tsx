import { BsBookFill, BsRocketTakeoffFill, BsEyeFill, BsStarFill } from "react-icons/bs"

const AboutUs = () => {
  return (
    <section className="mt-8 w-full" id="aboutus">
      <div className="container px-4 py-12 md:px-12 h-full text-forest-50 flex flex-col bg-forest-600 mx-auto rounded-bottom">
        {/* Sobre/Dados/Adendos/UltimasAtualizaçoes */}
        <div className="p-4">
          <h6 className="text-4xl flex items-center gap-2"><BsBookFill />História</h6>
          <p className="text-lg mt-4 leading-6">
            A Universidade de Marília (Unimar) tem mais de 65 anos dedicados à formação de profissionais altamente qualificados para atuar no mercado de trabalho.<br />
            Com cursos de Graduação e Pós-Graduação nas modalidades presencial e a distância, a Universidade está no grupo de excelência do Ministério da Educação (MEC) e é considerada um importante centro gerador e transmissor de conhecimentos a várias gerações.<br />
            Em seu Campus na cidade de Marília, a UNIMAR possui laboratórios de alta tecnologia e importantes cenários de aprendizado como o Hospital Beneficente Unimar, Hospital Veterinário, Núcleo de Apoio Fiscal (NAF), Centro Judiciário de Solução de Conflitos e Cidadania (Cejusc), Farmácia Industrial, Escritório Modelo de Arquitetura, Clínica de Psicologia, entre outros.<br />
            Fundamentais na formação acadêmica, os docentes da UNIMAR são mestres e doutores em suas áreas e possuem carreira sólida no mercado. O contato diário entre acadêmico e professor irá potencializar as qualidades e habilidades do futuro profissional alavancando sua carreira.
          </p>
        </div>
        <div className="mt-12 p-4 flex md:flex-row flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h6 className="text-3xl flex items-center gap-2"><BsRocketTakeoffFill />Missão</h6>
            <p className="text-lg mt-4 leading-6">
              A Universidade de Marília (Unimar) tem mais de 65 anos dedicados à formação de profissionais altamente qualificados para atuar no mercado de trabalho.<br />
              Com cursos de Graduação e Pós-Graduação nas modalidades presencial e a distância, a Universidade está no grupo de excelência do Ministério da Educação (MEC) e é considerada um importante centro gerador e transmissor de conhecimentos a várias gerações.<br />
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="text-3xl flex items-center gap-2"><BsEyeFill />Visão</h6>
            <p className="text-lg mt-4 leading-6">
              A Universidade de Marília (Unimar) tem mais de 65 anos dedicados à formação de profissionais altamente qualificados para atuar no mercado de trabalho.<br />
              Com cursos de Graduação e Pós-Graduação nas modalidades presencial e a distância, a Universidade está no grupo de excelência do Ministério da Educação (MEC) e é considerada um importante centro gerador e transmissor de conhecimentos a várias gerações.<br />
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="text-3xl flex items-center gap-2"><BsStarFill />Valores</h6>
            <p className="text-lg mt-4 leading-6">
              A Universidade de Marília (Unimar) tem mais de 65 anos dedicados à formação de profissionais altamente qualificados para atuar no mercado de trabalho.<br />
              Com cursos de Graduação e Pós-Graduação nas modalidades presencial e a distância, a Universidade está no grupo de excelência do Ministério da Educação (MEC) e é considerada um importante centro gerador e transmissor de conhecimentos a várias gerações.<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs