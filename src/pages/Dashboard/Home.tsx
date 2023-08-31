import PostCard, { Post } from "../../components/PostCard";
import Publish from "./Publish";
import publi1 from "../../assets/postsImages/post1.jpg";
import publi2 from "../../assets/postsImages/post2.jpg";
import publi3 from "../../assets/postsImages/post3.webp";
import publi4 from "../../assets/postsImages/post4.jpg";
import publi5 from "../../assets/postsImages/post5.webp";
import publi6 from "../../assets/postsImages/post6.jpeg";
import publi7 from "../../assets/postsImages/post7.jpg";
import publi8 from "../../assets/postsImages/post8.webp";
import publi9 from "../../assets/postsImages/post9.jpg";
import publi10 from "../../assets/postsImages/post10.webp";

const PostsData: Post[] = [
  {
    id: "publi1",
    user: "Ana Silva",
    title: "Como me preparei para a minha entrevista de emprego na Google",
    desc: "Olá, pessoal! Hoje eu quero compartilhar com vocês a minha experiência de participar do processo seletivo da Google, uma das empresas mais desejadas do mundo. Eu vou contar como eu me preparei, quais foram as etapas, as dificuldades e as dicas que eu aprendi. Espero que seja útil para quem também tem esse sonho!",
    img: publi1,
  },
  {
    id: "publi2",
    user: "Bruno Santos",
    title: "O que eu aprendi com o meu fracasso",
    desc: "Muitas vezes, nós temos medo de fracassar e de nos expor ao julgamento dos outros. Mas eu acredito que o fracasso é uma oportunidade de aprender e crescer. No meu último post, eu contei que eu tinha lançado um produto digital que não teve o resultado esperado. Hoje, eu quero compartilhar com vocês o que eu aprendi com essa experiência e como eu estou me reinventando.",
    img: publi2,
  },
  {
    id: "publi3",
    user: "Carla Oliveira",
    title: "5 dicas para melhorar a sua produtividade no home office",
    desc: "Com a pandemia, muitas pessoas tiveram que se adaptar ao trabalho remoto. Mas nem sempre é fácil manter a produtividade e o equilíbrio entre a vida pessoal e profissional. Por isso, eu separei 5 dicas que me ajudam a trabalhar melhor no home office.",
    img: publi3,
  },
  {
    id: "publi4",
    user: "Daniel Costa",
    title: "O poder do networking",
    desc: "Você sabia que o networking é uma das habilidades mais importantes para o sucesso profissional? O networking é a arte de construir e manter relacionamentos que podem trazer benefícios mútuos. Mas como fazer isso de forma efetiva e autêntica? Neste post, eu vou te dar algumas dicas de como ampliar e fortalecer a sua rede de contatos.",
    img: publi4,
  },
  {
    id: "publi5",
    user: "Erika Lima",
    title: "Como eu me tornei uma desenvolvedora de software",
    desc: "Olá, pessoal! Hoje eu quero contar para vocês como eu me tornei uma desenvolvedora de software, uma profissão que eu amo e que me traz muitas oportunidades. Eu vou falar sobre a minha trajetória, os desafios, os recursos que eu usei para aprender e as dicas que eu tenho para quem quer seguir esse caminho.",
    img: publi5,
  },
  {
    id: "publi6",
    user: "Fabio Souza",
    title: "O que é inteligência emocional e por que ela é importante",
    desc: "Você já ouviu falar em inteligência emocional? É a capacidade de reconhecer e gerenciar as suas próprias emoções e as dos outros. A inteligência emocional é essencial para o bem-estar pessoal e profissional, pois influencia a forma como nos comunicamos, tomamos decisões, lidamos com conflitos e enfrentamos desafios.",
    img: publi6,
  },
  {
    id: "publi7",
    user: "Gabriela Rocha",
    title: "Como eu viajei pelo mundo gastando pouco",
    desc: "Você tem vontade de viajar pelo mundo, mas acha que isso é muito caro? Pois saiba que é possível realizar esse sonho gastando pouco. Eu fiz isso e vou te contar como. Eu vou te dar dicas de como economizar com passagens, hospedagem, alimentação, transporte e passeios. Você vai ver que viajar é mais acessível do que você imagina!",
    img: publi7,
  },
  {
    id: "publi8",
    user: "Henrique Dias",
    title: "Como eu aprendi inglês sozinho em 6 meses",
    desc: "Você quer aprender inglês, mas não tem tempo ou dinheiro para fazer um curso? Não se preocupe, você pode aprender inglês sozinho em casa, no seu ritmo e sem gastar nada. Eu fiz isso e vou te mostrar como. Eu vou te indicar os melhores sites, aplicativos, podcasts, vídeos e livros para você aprender inglês de forma fácil e divertida.",
    img: publi8,
  },
  {
    id: "publi9",
    user: "Isabela Martins",
    title: "Como eu emagreci 10 quilos em 3 meses sem fazer dieta",
    desc: "Você quer emagrecer, mas não aguenta fazer dieta? Eu também não. Por isso, eu resolvi mudar o meu estilo de vida e consegui emagrecer 10 quilos em 3 meses sem fazer dieta. Eu vou te contar o que eu fiz e como você pode fazer também. Eu vou te falar sobre os hábitos alimentares, a atividade física, o sono e a hidratação que me ajudaram a perder peso de forma saudável e duradoura.",
    img: publi9,
  },
  {
    id: "publi10",
    user: "João Silva",
    title: "Como eu criei o meu próprio negócio online",
    desc: "Você sonha em ter o seu próprio negócio online, mas não sabe por onde começar? Eu também não sabia, mas eu pesquisei, estudei e testei várias ideias até encontrar uma que funcionou para mim. Hoje, eu tenho um negócio online lucrativo e que me dá liberdade de tempo e de localização. Eu vou te mostrar como eu fiz e como você pode fazer também. Eu vou te ensinar como escolher um nicho, criar um produto digital, montar um site, atrair clientes e vender pela internet.",
    img: publi10,
  },
];

const Home = () => {
  return (
    <main className="rounded-top z-10 w-full xl:w-4/6 lg:px-32 bg-black p-2 text-forest-50">
      <Publish />
      <ul className="p-4 flex flex-col gap-16">
        {PostsData.map((post) => (
          <PostCard post={post} key={post.id} />
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

export default Home;
