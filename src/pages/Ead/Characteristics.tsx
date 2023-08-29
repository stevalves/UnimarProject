import womanPc from "../../assets/woman-pc.svg";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { GrYoga } from "react-icons/gr";
import { PiLightbulbFilamentBold } from "react-icons/pi";

const Characteristics = () => {
  return (
    <section
        id="char"
        className="min-h-screen w-full flex items-end py-4 xl:py-0 border-b-2 border-forest-50"
      >
        <div className="container h-full mx-auto flex xl:h-screen items-center justify-between gap-4 xl:flex-row flex-col-reverse">
          <div
            data-aos="flip-left"
            data-aos-once
            className="max-w-[360px] md:max-w-[400px] xl:max-w-[480px] h-full flex items-end"
          >
            <img src={womanPc} alt="teacher" className="w-full" />
          </div>
          <div className="w-full h-max overflow-hidden shadow-lg flex flex-col gap-2">
            <h4 className="text-forest-50 font-bold text-2xl w-full text-center md:text-end">
              Características
            </h4>
            <div className="bg-forest-50 rounded xl:p-4 p-2 flex w-full">
              <p>
                Em geral, o ensino a distância é baseado em algumas
                características-chave, como <strong>flexibilidade</strong>,{" "}
                <strong>economia</strong>, <strong>comodidade</strong> e{" "}
                <strong>inovação</strong>.
              </p>
            </div>
            <div className="bg-forest-50 w-full h-max flex md:flex-wrap md:flex-row flex-col text-forest-900 rounded p-2">
              <div
                data-aos="fade-right"
                data-aos-once
                className="md:w-1/2 min-h-[200px] border-b border-r border-forest-900 p-2 rounded"
              >
                <h6 className="flex items-center gap-2 font-medium text-lg">
                  <GrYoga /> Flexibilidade
                </h6>
                <p>
                  O EAD oferece flexibilidade, permitindo que os alunos escolham
                  quando, onde e por meio de qual plataforma desejam assistir às
                  aulas. Isso difere da educação tradicional, onde aulas têm
                  horários e locais fixos. Essa flexibilidade permite que os
                  estudantes determinem seu próprio horário e ritmo de estudo,
                  reconhecendo que cada pessoa tem métodos de aprendizado
                  distintos.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once
                className="md:w-1/2 min-h-[200px] border-b border-l border-forest-900 p-2 rounded"
              >
                <h6 className="flex items-center gap-2 font-medium text-lg">
                  <BsCurrencyDollar />
                  Economia
                </h6>
                <p>
                  O ensino a distância (EAD) é mais econômico do que a educação
                  tradicional devido às mensalidades mais baixas, que podem ser
                  cerca de R$200 por mês em cursos de graduação. Além disso, o
                  EAD permite economizar em despesas como transporte, materiais
                  e alimentação, tornando-o uma escolha financeiramente
                  vantajosa.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-once
                className="md:w-1/2 min-h-[200px] border-t border-r border-forest-900 p-2 rounded"
              >
                <h6 className="flex items-center gap-2 font-medium text-lg">
                  <BiSolidCoffeeAlt />
                  Comodidade
                </h6>
                <p>
                  O ensino a distância (EAD) é conveniente, pois permite que os
                  alunos aprendam a partir do conforto de suas casas, evitando
                  as distrações e o barulho comuns em salas de aula
                  tradicionais.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once
                className="md:w-1/2 min-h-[200px] border-t border-l border-forest-900 p-2 rounded"
              >
                <h6 className="flex items-center gap-2 font-medium text-lg">
                  <PiLightbulbFilamentBold />
                  Inovação
                </h6>
                <p>
                  O ensino a distância (EAD) é altamente inovador devido à sua
                  base tecnológica. As instituições de ensino investem em aulas
                  envolventes que utilizam vídeos, jogos, conteúdos interativos
                  e outras tecnologias para engajar os alunos de maneira
                  criativa e eficaz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Characteristics;