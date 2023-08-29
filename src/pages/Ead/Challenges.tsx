import { AiOutlineCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";
import { HiArrowSmRight } from "react-icons/hi";
import womanThink from "../../assets/thinking-woman.svg";

const Challenges = () => {
  return (
    <section id="chal" className="min-h-screen w-full flex items-end border-b border-forest-50">
      <div className="container h-full mx-auto flex flex-col xl:flex-row gap-4 xl:h-screen items-center">
        <div className="w-full h-max shadow-lg flex flex-col gap-2">
          <h4 className="text-forest-50 font-bold text-2xl text-center md:text-start">
            Exemplos de
          </h4>
          <div className="bg-forest-50 rounded xl:p-4 p-2 flex w-full flex-col sm:flex-row">
            <div className="sm:w-1/2 xl:hover:w-[55%] duration-300 md:border-r border-forest-900 p-2">
              <h6 className="flex gap-2 items-center font-medium underline">
                <AiOutlineCheckSquare />
                Benefícios
              </h6>
              <ul>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Flexibilidade de horários
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Economia de tempo e dinheiro
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Acesso a conteúdo diversificado
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Possibilidade de interação e colaboração
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Maior autonomia e independência do estudante
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Adaptação às novas tecnologias
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Mensalidades mais em conta
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Mesma qualidade do curso presencial
                  </h4>
                </li>
              </ul>
            </div>
            <div className="sm:w-1/2 xl:hover:w-[55%] duration-300 md:border-l border-forest-900 p-2">
              <h6 className="flex gap-2 items-center font-medium underline">
                <AiOutlineCloseSquare />
                Desafios
              </h6>
              <ul>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Falta de interação presencial
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Dependência de tecnologia e internet
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Falta de disciplina e motivação
                  </h4>
                </li>
                <li>
                  <h4 className="flex items-center gap-1">
                    <HiArrowSmRight />
                    Dispersão física dos participantes
                  </h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-forest-50 rounded xl:p-4 p-2 flex w-full">
            <p>
              Apesar dos desafios do ensino EAD, como a necessidade de
              autodisciplina e motivação por parte dos alunos, a falta de
              interação presencial e a dependência de recursos tecnológicos, ele
              continua a ser uma opção valiosa e crescente no cenário
              educacional, oferecendo flexibilidade, acessibilidade e
              oportunidades de aprendizado significativas para muitos
              estudantes.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-once
          className="max-w-[360px] md:max-w-[400px] xl:max-w-[480px] h-full flex items-end"
        >
          <img src={womanThink} alt="teacher" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Challenges;
