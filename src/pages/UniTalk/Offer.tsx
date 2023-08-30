import { GiCoffeeCup } from "react-icons/gi";
import { MdPeopleAlt, MdUpdate } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";

const Offer = () => {
  return (
    <section className="my-16 overflow-hidden">
      <div className="container mx-auto sm:px-2 py-12 gap-4 rounded bg-forest-50 flex flex-col">
        <h4
          data-aos="flip-down"
          data-aos-once
          className="pb-4 font-bold text-4xl text-center text-forest-900"
        >
          O que oferecemos
        </h4>
        <ul className="flex gap-4 sm:flex-row flex-col flex-wrap justify-around text-forest-50 overflow-hidden">
          <li
            data-aos="fade-left"
            data-aos-once
            data-aos-delay="200"
            className="sm:min-h-[320px] shadow-black min-h-[180px] flex flex-col justify-between sm:w-[280px] bg-forest-600 rounded p-2"
          >
            <h6 className="py-2 flex items-center justify-between text-2xl">
              Comunidade <MdPeopleAlt />
            </h6>
            <p className="self-center h-max my-auto">
              Nossa plataforma proporciona uma oportunidade única de ampliar sua
              rede de contatos. Conecte-se com estudantes talentosos,
              professores engajados e empresas inovadoras da nossa comunidade
              universitária.
            </p>
          </li>
          <li
            data-aos="fade-left"
            data-aos-once
            data-aos-delay="400"
            className="sm:min-h-[320px] min-h-[180px] flex flex-col justify-between sm:w-[280px] bg-forest-600 rounded p-2"
          >
            <h6 className="py-2 flex items-center justify-between text-2xl">
              Atualizado <MdUpdate />
            </h6>
            <p className="self-center h-max my-auto">
              Atualizamos regularmente nossa plataforma com novas e emocionantes
              oportunidades de estágio e emprego, garantindo que você tenha
              acesso às mais recentes vagas disponíveis.
            </p>
          </li>
          <li
            data-aos="fade-left"
            data-aos-once
            data-aos-delay="600"
            className="sm:min-h-[320px] min-h-[180px] flex flex-col justify-between sm:w-[280px] bg-forest-600 rounded p-2"
          >
            <h6 className="py-2 flex items-center justify-between text-2xl">
              Apoio <TbHealthRecognition />
            </h6>
            <p className="self-center h-max my-auto">
              Nossa plataforma é apoiada por um conjunto de parceiros
              corporativos que valorizam a qualidade da educação e estão
              comprometidos em fornecer oportunidades excepcionais para
              estudantes e futuros profissionais.
            </p>
          </li>
          <li
            data-aos="fade-left"
            data-aos-once
            data-aos-delay="800"
            className="sm:min-h-[320px] min-h-[180px] flex flex-col justify-between sm:w-[280px] bg-forest-600 rounded p-2"
          >
            <h6 className="py-2 flex items-center justify-between text-2xl">
              Simplicidade <GiCoffeeCup />
            </h6>
            <p className="self-center h-max my-auto">
              Tornamos o UniTalk fácil de usar para todos os membros da nossa
              comunidade. Nossa interface intuitiva e acessível garante que você
              possa navegar e aproveitar ao máximo todas as funcionalidades da
              plataforma, independentemente do seu nível de experiência.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Offer;
