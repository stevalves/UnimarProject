import { useEffect } from "react";
import { InitialDashboard, Characteristics, Challenges } from ".";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Unimar - Dashboard";
  }, []);

  return (
    <main className="bg-forest-500">
      <InitialDashboard />
      <Characteristics />
      <Challenges />
      <section className="min-h-screen flex items-center justify-center">
        <div className="container h-[80vh] rounded bg-forest-50 mx-auto shadow-lg p-2">
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
            A pesquisa também destaca que o crescimento da EaD ocorre
            principalmente na rede privada, com um aumento de 23,3% entre 2020 e
            2021, enquanto os cursos presenciais tiveram uma redução de 16,5% no
            ingresso. A tendência de crescimento da EaD é clara, e em 2019, pela
            primeira vez, a EaD superou a graduação presencial em instituições
            privadas, com 70,5% dos estudantes optando por cursos remotos.
          </p>
          <p>
            Além disso, o Censo de 2021 registrou que a maioria das instituições
            de ensino superior (87,68%) é privada, oferecendo 96,4% das vagas,
            enquanto as instituições públicas correspondem a 12,2% das
            instituições e 3,6% das vagas. O número total de matrículas
            ultrapassou 8,9 milhões, com 76,9% dos alunos matriculados em
            instituições privadas.
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
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
