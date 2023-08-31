import { useState } from "react";
import { Modal } from "../../components/Modal";

interface Post {
  id: string;
  user: string;
  title: string;
  desc: string;
  img?: string;
}

const PostsData: Post[] = [
  {
    id: "publi1",
    user: "TechSolutions Ltda",
    title: "Estágio em Desenvolvimento",
    desc: "Estamos buscando uma pessoa com perfil ativo, que consiga trabalhar bem em equipe e seja proativa.",
    img: "https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/eac8c6d69d1ce8ce0ff8824d/images/teaserImage_xxxx_croppedTeaserImage.jpg",
  },
  {
    id: "publi2",
    user: "InovaSoft S.A",
    title: "Oportunidade de Estágio em Marketing Digital",
    desc: "Você é apaixonado por marketing digital? Junte-se a nós como estagiário e aprenda com os melhores profissionais do setor.",
    img: "https://midiatix.com.br/wp-content/uploads/2020/04/shutterstock_1444236020-1024x493.jpg",
  },
  {
    id: "publi3",
    user: "EnergiaVerde Inc",
    title: "Analista de Dados Sênior",
    desc: "Estamos em busca de um analista de dados sênior para liderar nossa equipe de análise e impulsionar insights valiosos.",
    img: "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_780,h_450/https://blog.academiain1.com.br/wp-content/uploads/2022/05/post_thumbnail-a22896c6d59a1e3142f66251c955a55f-780x450.jpeg",
  },
  {
    id: "publi4",
    user: "EcoTech Solutions",
    title: "Vaga de Engenheiro de Software",
    desc: "Junte-se à nossa equipe de engenharia de software e trabalhe em projetos emocionantes que estão transformando a indústria.",
    img: "https://img.imageboss.me/revista-cdn/cdn/41144/4651d2a2d188dadf1fa0af405f0f722a25517843.jpg?1660153136",
  },
  {
    id: "publi5",
    user: "CreativeDesign Studios",
    title: "Assistente de Recursos Humanos",
    desc: "Estamos contratando um assistente de RH dedicado para apoiar nossas operações de recrutamento e seleção.",
    img: "https://www.hostinger.com.br/blog/wp-content/uploads/sites/20/2021/08/GestAo-de-Pessoas-VS-Recursos-Humanos-Qual-a-diferenca-.webp",
  },
  {
    id: "publi6",
    user: "SecureData Systems",
    title: "Gerente de Marketing Digital",
    desc: "Procure-se um líder inovador de marketing digital para impulsionar nossas estratégias de marketing e crescimento.",
    img: "https://images.ctfassets.net/63bmaubptoky/6d4BTuQxGHHQIkf5wZ2c0k/ad92b276a795d2694de5eff5d12bd8aa/ferramentas-marketing-digital-BR-Capterra-Header.png",
  },
  {
    id: "publi7",
    user: "HealthCare Innovations",
    title: "Estágio em Desenvolvimento de Software",
    desc: "Oportunidade de estágio em desenvolvimento de software para estudantes de TI que desejam ganhar experiência prática.",
    img: "https://www.ivoryit.com.br/wp-content/uploads/2022/05/Processo-de-desenvolvimento-de-software.jpg",
  },
  {
    id: "publi8",
    user: "SmartManufacture Co",
    title: "Designer Gráfico Criativo",
    desc: "Procuramos um designer gráfico talentoso para criar designs únicos e envolventes para nossa marca e produtos.",
    img: "https://lwfiles.mycourse.app/clubeps-public/80675fdf75063a37981fea4cca325b3f.png",
  },
  {
    id: "publi9",
    user: "GreenTech Industries",
    title: "Analista de Marketing de Conteúdo",
    desc: "Se você é apaixonado por marketing de conteúdo e storytelling, esta vaga pode ser a oportunidade ideal para você.",
    img: "https://neilpatel.com/wp-content/uploads/fly-images/84320/profissional-analista-de-marketing-segurando-lapto-1200x675-c.jpeg",
  },
  {
    id: "publi10",
    user: "GlobalConnections Ltda",
    title: "Vaga de Desenvolvedor Full-Stack",
    desc: "Estamos em busca de um desenvolvedor full-stack talentoso para se juntar à nossa equipe e criar aplicativos incríveis.",
    img: "https://blog.eseg.edu.br/wp-content/uploads/2019/12/original-7cad0211c594d809108653960c3671d1.jpg",
  },
];

const PostCard = ({ post }: { post: Post }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => setOpen((value) => !value);

  return (
    <>
      <li className="flex gap-2 w-full">
        <div className="flex flex-col items-center gap-2">
          <span className="border w-8 h-full max-h-8 rounded-full flex items-center justify-center">
            {post.user.split("")[0]}
          </span>
          <div className="w-[2px] border h-full" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between">
            <h5 className="pb-4">{post.user}</h5>
            <button className="hover:underline">Saiba Mais</button>
          </div>
          <p>{post.title}</p>
          <p>{post.desc}</p>
          {post.img && (
            <button onClick={toggleModal}>
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[320px] rounded border border-forest-50 inset-0 bg-cover bg-center object-cover"
              />
            </button>
          )}
        </div>
      </li>
      {open && (
        <Modal toggleModal={toggleModal} title={post.title}>
          <div className="p-4 bg-forest-950">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[320px] rounded border border-forest-50 inset-0 bg-cover bg-center object-cover"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

const PostsList = () => {
  return (
    <ul className="p-4 flex flex-col gap-16">
      {PostsData.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostsList;
