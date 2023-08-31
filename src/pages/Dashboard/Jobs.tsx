import PostCard, { Post } from "../../components/PostCard";
import job1 from "../../assets/jobsImages/job1.jpg";
import job2 from "../../assets/jobsImages/job2.jpg";
import job3 from "../../assets/jobsImages/job3.jpeg";
import job4 from "../../assets/jobsImages/job4.jpg";
import job5 from "../../assets/jobsImages/job5.webp";
import job6 from "../../assets/jobsImages/job6.png";
import job7 from "../../assets/jobsImages/job7.jpg";
import job8 from "../../assets/jobsImages/job8.jpg";
import job9 from "../../assets/jobsImages/job9.jpeg";
import job10 from "../../assets/jobsImages/job10.jpg";

const PostsData: Post[] = [
  {
    id: "job1",
    user: "TechSolutions Ltda",
    title: "Estágio em Desenvolvimento",
    desc: "Estamos buscando uma pessoa com perfil ativo, que consiga trabalhar bem em equipe e seja proativa.",
    img: job1,
  },
  {
    id: "job2",
    user: "InovaSoft S.A",
    title: "Oportunidade de Estágio em Marketing Digital",
    desc: "Você é apaixonado por marketing digital? Junte-se a nós como estagiário e aprenda com os melhores profissionais do setor.",
    img: job2,
  },
  {
    id: "job3",
    user: "EnergiaVerde Inc",
    title: "Analista de Dados Sênior",
    desc: "Estamos em busca de um analista de dados sênior para liderar nossa equipe de análise e impulsionar insights valiosos.",
    img: job3,
  },
  {
    id: "job4",
    user: "EcoTech Solutions",
    title: "Vaga de Engenheiro de Software",
    desc: "Junte-se à nossa equipe de engenharia de software e trabalhe em projetos emocionantes que estão transformando a indústria.",
    img: job4,
  },
  {
    id: "job5",
    user: "CreativeDesign Studios",
    title: "Assistente de Recursos Humanos",
    desc: "Estamos contratando um assistente de RH dedicado para apoiar nossas operações de recrutamento e seleção.",
    img: job5,
  },
  {
    id: "job6",
    user: "SecureData Systems",
    title: "Gerente de Marketing Digital",
    desc: "Procure-se um líder inovador de marketing digital para impulsionar nossas estratégias de marketing e crescimento.",
    img: job6,
  },
  {
    id: "job7",
    user: "HealthCare Innovations",
    title: "Estágio em Desenvolvimento de Software",
    desc: "Oportunidade de estágio em desenvolvimento de software para estudantes de TI que desejam ganhar experiência prática.",
    img: job7,
  },
  {
    id: "job8",
    user: "SmartManufacture Co",
    title: "Designer Gráfico Criativo",
    desc: "Procuramos um designer gráfico talentoso para criar designs únicos e envolventes para nossa marca e produtos.",
    img: job8,
  },
  {
    id: "job9",
    user: "GreenTech Industries",
    title: "Analista de Marketing de Conteúdo",
    desc: "Se você é apaixonado por marketing de conteúdo e storytelling, esta vaga pode ser a oportunidade ideal para você.",
    img: job9,
  },
  {
    id: "job10",
    user: "GlobalConnections Ltda",
    title: "Vaga de Desenvolvedor Full-Stack",
    desc: "Estamos em busca de um desenvolvedor full-stack talentoso para se juntar à nossa equipe e criar aplicativos incríveis.",
    img: job10,
  },
];

const Jobs = () => {
  return (
    <main className="rounded-top z-10 w-full xl:w-4/6 lg:px-32 bg-black p-2 text-forest-50">
      <ul className="p-4 flex flex-col gap-16">
        {PostsData.map((post) => (
          <PostCard post={post} key={post.id} isJob />
        ))}
      </ul>
      <div className="flex flex-col my-8 w-full items-center">
        <h6>Parece que você chegou ao fim!</h6>
        <a href="#" className="w-max text-center hover:underline">
          Voltar ao topo
        </a>
      </div>
    </main>
  );
};

export default Jobs;
