import { FiLink2 } from "react-icons/fi";

const Aside = () => {
  return (
    <aside className="h-max w-1/6 hidden xl:flex flex-col bg-forest-700 p-2 rounded-right sticky top-28 text-forest-50">
      <h3 className="py-3">Últimas notícias:</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col">
          <h4 className="flex items-center gap-2">
            <FiLink2 /> Nutrição
          </h4>
          <a
            className="hover:underline"
            target="_blank"
            href="https://blog.unimar.br/2023/08/30/35-anos-de-nutricao-unimar-celebrando-conhecimento-e-inovacao-na-semana-academica/"
          >
            35 Anos de Nutrição Unimar: Celebrando Conhecimento e Inovação na
            Semana Acadêmica
          </a>
        </li>
        <li className="flex flex-col">
          <h4 className="flex items-center gap-2">
            <FiLink2 /> Med Veterinária
          </h4>
          <a
            className="hover:underline"
            target="_blank"
            href="https://blog.unimar.br/2023/08/23/academicos-do-curso-de-medicina-veterinaria-da-unimar-realizam-acao-solidaria-em-ong-de-protecao-animal/"
          >
            Acadêmicos do curso de Medicina Veterinária da Unimar realizam ação
            solidária em ONG de proteção animal
          </a>
        </li>
        <li className="flex flex-col">
          <h4 className="flex items-center gap-2">
            <FiLink2 /> Programação
          </h4>
          <a
            className="hover:underline"
            target="_blank"
            href="https://blog.unimar.br/2023/08/17/unimar-abre-inscricoes-para-o-bootcamp-jovem-programador/"
          >
            Unimar abre inscrições para o Bootcamp Jovem Programador
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
