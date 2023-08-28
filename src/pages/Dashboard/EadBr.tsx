const EadBr = () => {
  return (
    <section id="braz" className="min-h-screen flex items-center justify-center border-b border-forest-50">
      <div className="container mx-auto flex flex-col gap-2">
        <h4 className="text-forest-50 font-bold text-2xl w-full text-center">
          No Brasil
        </h4>
        <div className="flex flex-col shadow-lg gap-2 xl:gap-4 bg-forest-50 rounded px-2 py-6 xl:py-14">
          <p>
            O Censo da Educação Superior de 2021, realizado pelo Instituto
            Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep)
            e pelo Ministério da Educação (MEC), revela um aumento significativo
            na educação a distância (EaD) no Brasil. Entre 2011 e 2021, o número
            de ingressantes em cursos de graduação a distância aumentou
            impressionantes 474%, enquanto os cursos presenciais diminuíram
            23,4%. Em 2011, a EaD representava 18,4% do total de ingressos, mas
            em 2021, esse número subiu para 62,8%.
          </p>
          <p>
            A tendência de crescimento da EaD é clara, e em 2019, pela
            primeira vez, a EaD superou a graduação presencial em instituições
            privadas, com 70,5% dos estudantes optando por cursos remotos.
          </p>
          <p>
            O presidente do Inep destaca a importância da supervisão, regulação
            e avaliação de cursos de EaD para garantir qualidade. Ele também
            observa a expansão da EaD como uma oportunidade para a educação
            superior ser acessível em todo o país, mas ressalta a necessidade de
            refletir sobre o modelo e as políticas educacionais em meio a essas
            mudanças. A formação de docentes em cursos de EaD também é
            mencionada, com 61% das matrículas nessa modalidade.
          </p>
          <p>
            O Censo da Educação Superior é essencial para orientar políticas
            públicas e fornece uma visão detalhada do cenário da educação
            superior no Brasil, incluindo indicadores de qualidade como o
            Conceito Preliminar de Curso (CPC) e o Índice Geral de Cursos
            Avaliados da Instituição (IGC).
          </p>
          <div className="self-center flex flex-col shadow-2xl p-2 rounded gap-2">
            <h6>Resumindo, o apontamento levantou que entre 2011 a 2012 teve:</h6>
            <p data-aos="fade-down" data-aos-delay="300" data-aos-once className="underline">Um aumento de <strong>474%</strong> de ingressantes;</p>
            <p data-aos="fade-down" data-aos-delay="600" data-aos-once className="underline">Uma diminuição dos cursos presenciais em <strong>23,4%</strong>;</p>
            <p data-aos="fade-down" data-aos-delay="900" data-aos-once className="underline">Um aumento no total de ingressos de <strong>18,4%</strong> para <strong>62,8%</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EadBr