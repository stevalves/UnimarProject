const HowHelp = () => {
  return (
    <section className="w-full h-max bg-forest-900 text-forest-50">
      <div className="container p-2 mx-auto py-8 h-full flex-col overflow-hidden">
        <h4
          data-aos="flip-down"
          data-aos-once
          className="pb-4 font-bold text-4xl"
        >
          Como iremos te ajudar?
        </h4>
        <div className="flex flex-col gap-4 overflow-hidden">
          <p data-aos="fade-left" data-aos-once>
            <strong>Para empresa:</strong> Aqui, estamos dedicados a facilitar a
            sua busca por talentos excepcionais. Nossa plataforma permite que
            você identifique rapidamente os alunos mais qualificados em sua
            área, de acordo com as necessidades específicas do seu projeto.
            Oferecemos acesso rápido a indivíduos que já possuem habilidades e
            experiência com as tecnologias necessárias. Encontre o candidato
            ideal e impulsione o sucesso do seu projeto com o UniTalk!
          </p>
          <p data-aos="fade-left" data-aos-once>
            <strong>Para alunos:</strong> Aqui, estamos aqui para ajudar você a
            encontrar a oportunidade de estágio ou trabalho ideal. Nós cuidamos
            de tudo, filtrando vagas de acordo com as suas necessidades e a
            disponibilidade das empresas parceiras. Nosso objetivo é alinhar os
            perfis e criar o match perfeito entre você e a sua próxima grande
            oportunidade. Junte-se a nós e impulsione a sua carreira no UniTalk!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowHelp;
