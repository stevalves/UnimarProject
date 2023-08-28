import { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

const Me = () => {
  useEffect(() => {
    document.title = "Unimar - Eu";
  }, []);

  return (
    <main className="w-full max-w-[100vw] overflow-hidden min-h-[calc(100vh)] bg-forest-500 flex items-center justify-center">
      <div
        data-aos="fade-down"
        data-aos-delay="50"
        className="w-full max-w-[600px] bg-forest-50 p-2 my-24 md:my-0 rounded shadow-2xl flex flex-col justify-between gap-4"
      >
        <div className="h-[55px] w-full bg-forest-600 rounded-xl flex items-center px-4 text-forest-50 font-semibold text-xl">
          <h4>Detalhes</h4>
        </div>
        <div className="md:p-2 text-forest-900 flex flex-col gap-2">
          <p>
            Esta aplicação foi desenvolvida durante um bootcamp oferecido pela{" "}
            <a
              target="_blank"
              href="https://oficial.unimar.br/"
              className="text-forest-500 hover:underline"
            >
              Unimar
            </a>
            , no qual aprendemos desde os fundamentos do HTML/CSS e JavaScript
            até a construção de uma aplicação completa em React.
          </p>
          <p>
            Dividi a aplicação em duas vertentes: uma delas tem o propósito de
            apresentar a universidade de forma mais simplificada, com o objetivo
            de fornecer informações rápidas e concisas sobre os cursos e sua
            relevância no mercado, além de oferecer uma breve visão sobre a
            universidade.
          </p>
          <p>
            Já a outra parte que ainda está em construção visa alinhar com o
            público leitor a ideia de que a faculdade EAD é uma formação que
            auxilia muito quem não consegue ir todos os dias à faculdade e que é
            possível sim assimilar todo o conhecimento passado de casa, além de
            desmistificar o estigma que as empresas têm em relação à formação
            EAD.
          </p>
        </div>
        <div className="text-forest-600">
          <h5 className="font-semibold text-xl text-center">Minhas redes:</h5>
          <ul className="flex justify-center gap-4 my-4">
            <li>
              <a target="_blank" href="https://owl-tau.vercel.app/" className="flex flex-col items-center text-lg hover:underline">
                <h6>Portfólio</h6>
                <TbWorld />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <a target="_blank" href="https://www.linkedin.com/in/stevalves/" className="flex flex-col items-center text-lg hover:underline">
                <h6>LinkedIn</h6>
                <AiFillLinkedin />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <a target="_blank" href="https://github.com/stevalves" className="flex flex-col items-center text-lg hover:underline">
                <h6>GitHub</h6>
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Me;
