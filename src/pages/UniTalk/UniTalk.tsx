import { useEffect } from "react";
import unitalk from "../../assets/unitalk-logo.png";
import { Link } from "react-router-dom";

const UniTalk = () => {
  useEffect(() => {
    document.title = "UniTalk";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-forest-700 to-forest-800 flex flex-col">
      <section className="container min-h-screen flex md:items-center md:justify-between p-2 mx-auto">
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
          <Link to="register"
            data-aos="fade-left"
            data-aos-delay="600"
            className="w-max py-2 px-12 border rounded overflow-hidden before:z-[-1] isolate relative before:content-[''] before:flex before:items-center before:justify-center before:top-0 before:bottom-0 before:left-0 before:right-0 before:absolute before:bg-forest-50 before:-translate-x-[300px] hover:before:-translate-x-0 hover:text-forest-800 border-forest-50 hover:border-forest-800 before:duration-500 hover:shadow-2xl"
          >
            Vamos lá
          </Link>
        </div>
        <img
          data-aos="flip-right"
          data-aos-delay="900"
          src={unitalk}
          alt="UniTalk logo"
          className="max-w-[400px] xl:max-w-[520px] max-h-[400px] md:flex xl:max-h-[520px] hidden items-end"
        />
      </section>
      <section className="h-[340px] w-full">
        <div className="container mx-auto bg-forest-900 rounded p-2 flex justify-center items-center flex-row-reverse h-full">
          <h3 className="text-forest-50 text-2xl font-medium w-1/3 leading-loose justify-center text-center">Nós iremos disparar sua chance de ingressar no mercado, com ajuda das empresas parceiras disponibilizando dezenas de vagas diariamente.</h3>
        </div>
      </section>
      <section className="h-[340px] w-full"></section>
      {/* Ver secão da kenzie para fazer essa parte */}
      {/* Buscar promover o máximo */}
    </main>
  );
};

export default UniTalk;
