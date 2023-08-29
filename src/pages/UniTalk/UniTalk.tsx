import { useEffect } from "react";
import unitalk from "../../assets/unitalk-logo.png";

const UniTalk = () => {
  useEffect(() => {
    document.title = "UniTalk";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-forest-700 to-forest-800 flex items-center justify-center">
      <div className="container flex md:items-center md:justify-between p-2">
        <div className="md:w-1/2 text-forest-50 flex flex-col justify-between gap-8 overflow-hidden">
          <h4 data-aos="fade-left" className="font-semibold text-3xl">
            Bem-vindo ao <span className="font-logo underline">UniTalk</span>
          </h4>
          <p data-aos="fade-left" data-aos-delay="300">
            No UniTalk, somos a plataforma de conexão definitiva na Unimar.
            Aqui, estudantes buscam oportunidades de estágio e emprego
            oferecidas pelas empresas parceiras e estabelecidas na universidade.
            Se você está em busca da oportunidade perfeita para dar o próximo
            passo em sua carreira ou se é uma empresa em busca de talentos
            promissores, o UniTalk é o lugar certo. Venha se juntar à nossa
            comunidade e impulsione o seu futuro profissional!
          </p>
          <button
            data-aos="fade-left"
            data-aos-delay="600"
            className="w-max py-2 px-12 border rounded overflow-hidden before:z-[-1] isolate relative before:content-[''] before:flex before:items-center before:justify-center before:top-0 before:bottom-0 before:left-0 before:right-0 before:absolute before:bg-forest-50 before:-translate-x-[300px] hover:before:-translate-x-0 hover:text-forest-800 border-forest-50 hover:border-forest-800 before:duration-500 hover:shadow-2xl"
          >
            Vamos lá
          </button>
        </div>
        <img
          data-aos="flip-right"
          data-aos-delay="900"
          src={unitalk}
          alt="UniTalk logo"
          className="max-w-[400px] xl:max-w-[520px] max-h-[400px] md:flex xl:max-h-[520px] hidden items-end"
        />
      </div>
    </main>
  );
};

export default UniTalk;
