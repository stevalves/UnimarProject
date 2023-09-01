import job1 from "./src/assets/jobsImages/job1.jpg";
import job2 from "./src/assets/jobsImages/job2.jpg";
import job3 from "./src/assets/jobsImages/job3.jpeg";
import job4 from "./src/assets/jobsImages/job4.jpg";
import job5 from "./src/assets/jobsImages/job5.webp";
import job6 from "./src/assets/jobsImages/job6.png";
import job7 from "./src/assets/jobsImages/job7.jpg";
import job8 from "./src/assets/jobsImages/job8.jpg";
import job9 from "./src/assets/jobsImages/job9.jpeg";
import job10 from "./src/assets/jobsImages/job10.jpg";

import publi1 from "./src/assets/postsImages/post1.jpg";
import publi2 from "./src/assets/postsImages/post2.jpg";
import publi3 from "./src/assets/postsImages/post3.webp";
import publi4 from "./src/assets/postsImages/post4.jpg";
import publi5 from "./src/assets/postsImages/post5.webp";
import publi6 from "./src/assets/postsImages/post6.jpeg";
import publi7 from "./src/assets/postsImages/post7.jpg";
import publi8 from "./src/assets/postsImages/post8.webp";
import publi9 from "./src/assets/postsImages/post9.jpg";
import publi10 from "./src/assets/postsImages/post10.webp";

export type iCourse = {
  id: string;
  name: string;
  photo: string;
  url: string;
  desc: string;
  type: "EAD" | "Presencial";
  certificate:
  | "Licenciatura"
  | "Superior Tecnológico"
  | "Bacharelado"
  | "2ª Licenciatura"
  | "Licenciatura"
  | "Formação Pedagógica";
};

export const coursesIn: iCourse[] = [
  {
    id: "admin-in",
    name: "Administração",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/adm.jpg",
    url: "https://oficial.unimar.br/cursos/administracao/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "Na era de mudanças constantes, onde a competitividade é essencial, a Administração desempenha um papel crucial na gestão estratégica das empresas. Na Unimar, estamos comprometidos em preparar nossos alunos para se destacarem nesse cenário em constante evolução.",
  },
  {
    id: "ads-in",
    name: "Análise e desenvolvimento de sistemas",
    photo:
      "https://oficial.unimar.br/wp-content/uploads/2019/08/ands-e1644500942830.jpg",
    url: "https://oficial.unimar.br/cursos/analise-e-desenvolvimento-de-sistemas/",
    type: "Presencial",
    certificate: "Superior Tecnológico",
    desc: "A demanda por profissionais na área de tecnologia da informação está sempre em alta e não é diferente para o analista de sistemas. O tecnólogo com esta formação reúne as competências necessárias para atuar nos processos de desenvolvimento de sistemas de informação, seguindo as etapas de concepção, planejamento, projeto, programação, implantação e manutenção. Para tanto, deve conhecer a estrutura física dos equipamentos de hardware e precisa manter-se muito atualizado sobre métodos e ferramentas de engenharia de software, ambientes operacionais e linguagens de programação.",
  },
  {
    id: "arq-in",
    name: "Arquitetura e Urbanismo",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/arq.jpg",
    url: "https://oficial.unimar.br/cursos/arquitetura-e-urbanismo/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O Arquiteto sempre teve, através dos tempos, um importante papel no projeto de soluções espaciais que respondem às necessidades apresentadas pela sociedade. É ele quem projeta, coordena a construção e organiza casas, prédios, edificações, espaços internos e externos, de acordo com critérios de estética, conforto e funcionalidade. Ele faz a planta, obedecendo aos regulamentos legais e às normas técnicas.",
  },
  {
    id: "cienc-comp-in",
    name: "Ciência da Computação",
    photo:
      "https://oficial.unimar.br/wp-content/uploads/2022/08/ciencia-da-computacao-2-e1661889313598.jpg",
    url: "https://oficial.unimar.br/cursos/ciencia-da-computacao/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "Forma profissionais capazes de ocupar as principais vagas no mercado de Tecnologia da Informação, além de preparar os egressos para atuar de forma autônoma na criação de soluções inovadoras que avançam as fronteiras da tecnologia, como Inteligência Artificial, Realidade Virtual e Aumentada, Robótica, Internet das Coisas, Ciência de Dados, Blockchain, Sistemas Computacionais Complexos, entre outros. Com metodologia inovadora, o curso de Ciência da Computação forma líderes capacitados por um conjunto de habilidades e competências técnicas e socioemocionais.",
  },
  {
    id: "biomed-in",
    name: "Biomedicina",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/biomed.jpg",
    url: "https://oficial.unimar.br/cursos/biomedicina/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O Arquiteto sempre teve, através dos tempos, um importante papel no projeto de soluções espaciais que respondem às necessidades apresentadas pela sociedade. É ele quem projeta, coordena a construção e organiza casas, prédios, edificações, espaços internos e externos, de acordo com critérios de estética, conforto e funcionalidade. Ele faz a planta, obedecendo aos regulamentos legais e às normas técnicas.",
  },
  {
    id: "cienc-cont-in",
    name: "Ciência Contábeis",
    photo:
      "https://oficial.unimar.br/wp-content/uploads/2019/08/contabeis-2.jpg",
    url: "https://oficial.unimar.br/cursos/ciencias-contabeis/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O curso de Ciências Contábeis é de extrema importância no cenário atual das organizações, pois desempenha um papel fundamental no funcionamento das organizações e na economia como um todo. A contabilidade é uma ciência que se concentra na análise, registro, controle e interpretação das informações financeiras das empresas. Dessa forma, o contador é responsável por fornecer dados confiáveis e relevantes para auxiliar na tomada de decisões estratégicas e no cumprimento das obrigações legais.",
  },
  {
    id: "dir-in",
    name: "Direito",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/direito.jpg",
    url: "https://oficial.unimar.br/cursos/direito/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O Direito é uma das carreiras mais tradicionais e figura entre os cursos mais procurados por aqueles que tem interesse em ingressar no ensino superior. O interesse pelo curso se deve ao fato de que o Direito possibilita um campo profissional amplo, no qual seus profissionais podem atuar seja na Advocacia, que é composta de várias áreas de atuação, assim como em algumas das várias Carreiras Jurídicas. Além disso, os profissionais do Direito contam com excelentes remunerações.",
  },
  {
    id: "ed-fis-in",
    name: "Educação Física",
    photo:
      "https://oficial.unimar.br/wp-content/uploads/2019/08/edfisica-1.jpg",
    url: "https://oficial.unimar.br/cursos/educacao-fisica/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O curso de Educação Física da Unimar, obedecendo as novas diretrizes curriculares é oferecido para candidatos a graduação e candidatos a licenciatura, tendo ingresso único, dividido em duas etapas. Etapa Comum, constituída de um núcleo de estudos da formação geral, identificador da área de Educação Física, a ser desenvolvido em 1.600 horas (4 semestres), comum às formações de graduação e licenciatura. Etapa Específica, formação específica a ser desenvolvida em 1.600 horas (4 semestres), na qual os graduandos terão acesso a conhecimentos específicos das opções em bacharelado ou licenciatura. Tendo concluído a Etapa Comum, o aluno prosseguirá para as formações específicas em bacharelado ou licenciatura.",
  },
  {
    id: "enf-in",
    name: "Enfermagem",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/enf.jpg",
    url: "https://oficial.unimar.br/cursos/enfermagem/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "Este profissional recebe formação baseada nas ciências biológicas, humanas, sociais e exatas e conhecimentos específicos de enfermagem, possibilitando este o desenvolvimento de competências articuladas da teoria e da prática para o cuidado em saúde. Sendo responsável pelo cuidado a saúde, o cuidado ao ser humano, o alívio do sofrimento e a promoção da saúde.",
  },
  {
    id: "eng-agro-in",
    name: "Engenharia Agronômica",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/engagro.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-agronomica/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "Engenheiros Agrônomos são profissionais responsáveis por conceber e orientar a execução de trabalhos relacionados à produção agropecuária. Pesquisam e aplicam conhecimentos científicos e técnicos à agricultura, para garantir uma produção de alimentos de origem vegetal e animal, visando o melhor custo de produção, melhor qualidade e incremento da produtividade, além da manutenção e conservação do meio ambiente.",
  },
  {
    id: "eng-civ-in",
    name: "Engenharia Civil",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/engcivil.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-civil/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "Na UNIMAR, os alunos do curso de Engenharia Civil podem praticar rapidamente o que aprendem em teoria. Como há sempre muitas obras no campus, eles acompanham o desenvolvimento das construções e podem verificar, de forma aplicada, o quanto é importante o seu trabalho para a concretização do ideal de modernização e bem-estar da coletividade. O curso conta com uma excelente estrutura e um moderno Laboratório de Projetos.",
  },
  {
    id: "eng-prod-mec-in",
    name: "Engenharia de Produção Mecânica",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/edprod.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-de-producao-mecanica/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O Engenheiro de Produção quem controla a qualidade, acompanhando e analisando testes de resistência, calibrando e conferindo medidas, aperfeiçoa técnicas de produção e define a melhor forma de integrar mão de obra, equipamentos e matéria-prima para avançar na qualidade e aumentar a produtividade da empresa.",
  },
  {
    id: "eng-elet-in",
    name: "Engenharia Elétrica",
    photo:
      "https://oficial.unimar.br/wp-content/uploads/2019/08/engeletrica.jpg",
    url: "https://oficial.unimar.br/cursos/engenharia-eletrica/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "A engenharia elétrica lida com a geração, transporte, distribuição, entrega e utilização da energia. O engenheiro eletricista planeja, supervisiona e executa projetos nas áreas de eletrotécnica e está habilitado a construir e a aplicar sistemas de automação e controle em linhas de produção industrial.",
  },
  {
    id: "farm-in",
    name: "Farmácia",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/farmaciaa.jpg",
    url: "https://oficial.unimar.br/cursos/farmacia/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "Na Unimar, o curso de Farmácia possui um complexo de laboratórios, equipados para atender as diversas áreas de atuação para a realização dos estágios e contamos com um moderno Hospital, Universitário onde os alunos realizam estágios nas áreas de Análises Clínicas, Banco de Sangue e Farmácia Hospitalar, além de cenários como as Unidade de Pronto Atendimento e Unidade Básica de Saúde e o Ambulatório Médico de Especialidades. Este profissional se tornou indispensável nas equipes multidisciplinares envolvendo o cuidado a saúde.",
  },
  {
    id: "fisio-in",
    name: "Fisioterapia",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/fisio.jpg",
    url: "https://oficial.unimar.br/cursos/fisioterapia/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O curso de Fisioterapia da UNIMAR é o melhor e mais tradicional da região, oferecendo aos seus alunos estrutura para desenvolvimento de um serviço de excelência e referência nacional. Os estudantes realizam os estágios curriculares e prestam atendimento a pacientes da comunidade na própria Clínica ou no Hospital Beneficente Unimar.",
  },
  {
    id: "med-in",
    name: "Medicina",
    photo:
      "https://oficial.unimar.br/wp-content/uploads/2019/07/medicina-1.jpg",
    url: "https://oficial.unimar.br/cursos/medicina/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "Na UNIMAR, o estudante tem uma formação integral, desenvolvendo seus conhecimentos com o auxílio de um corpo docente altamente capacitado. Há no curso modernos laboratórios, como o de Práticas da Saúde, com bonecos que simulam doenças e situações de atendimento, o Hospital Beneficente Unimar e o Ambulatório Médico de Especialidades. Nestes e em outros cenários, a população é devidamente atendida pelos estudantes com supervisão direta dos professores.",
  },
  {
    id: "med-vet-in",
    name: "Medicina Veterinária",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/vet.jpg",
    url: "https://oficial.unimar.br/cursos/medicina-veterinaria/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "A Medicina Veterinária é uma das profissões mais requisitadas nos dias atuais, visto abranger o que se denomina Saúde Única, ou seja, tem conexão com a saúde animal, saúde pública e ambiental. Nisso tem seu alicerce na assistência clínica e cirúrgica dos animais das diversas espécies, passando pela produção, nutrição e reprodução dos rebanhos e fortalecendo o agronegócio brasileiro.",
  },
  {
    id: "nut-in",
    name: "Nutrição",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/nutricao.jpg",
    url: "https://oficial.unimar.br/cursos/nutricao/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "É o nutricionista quem deve planejar, administrar e coordenar programas de alimentação e nutrição em empresas, escolas, hospitais, hotéis, restaurantes comerciais, spas ou abrigos infantis e de idosos, entre outros grupos, definindo cardápios com pratos variados e equilibrados.",
  },
  {
    id: "odon-in",
    name: "Odontologia",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/odonto-1.jpg",
    url: "https://oficial.unimar.br/cursos/odontologia/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O cirurgião dentista se dedica ao estudo e ao tratamento dos dentes, da boca e dos ossos da face, cuidando da saúde e da estética bucal. É ele quem restaura, extrai e limpa os dentes, projeta e instala próteses, realiza cirurgias e trata doenças da gengiva, da bochecha e da língua.",
  },
  {
    id: "psico-in",
    name: "Psicologia",
    photo:
      "https://oficial.unimar.br/wp-content/uploads/2019/08/psico-e1595345018825.jpg",
    url: "https://oficial.unimar.br/cursos/psicologia/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O psicólogo vem ganhando importância no mundo contemporâneo, principalmente porque as pessoas estão cada dia mais preocupadas em preservar a higiene e saúde mental e em prevenir doenças psicossomáticas. Este profissional estuda os fenômenos psíquicos e de comportamento do ser humano, por intermédio da análise de suas emoções, deias e valores.",
  },
  {
    id: "publi-in",
    name: "Publicidade e Propaganda",
    photo: "https://oficial.unimar.br/wp-content/uploads/2019/08/pp.jpg",
    url: "https://oficial.unimar.br/cursos/publicidade-e-propaganda/",
    type: "Presencial",
    certificate: "Bacharelado",
    desc: "O publicitário é um profissional multitarefas, capaz de atuar em indústrias, empresas, em agências de publicidade, em produtoras audiovisuais (na produção de Podcast, documentários, comerciais e filmes), em estúdios de fotografia, em empresas de e-commerce, em departamentos de marketing, em veículos de comunicação (TV, Rádio, Portais), como consultor, designer e nas Big Techs como Google, Facebook, Instagram, além de ser conteudista para redes sociais.",
  },
];

export const coursesOut: iCourse[] = [
  {
    id: "admin-out",
    name: "Administração",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/administracao.jpg.webp",
    url: "https://ead.unimar.br/cursos/administracao/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O curso tem como objetivo formar profissionais aptos a lidar com os novos paradigmas do mercado, desenvolvendo habilidades de gestão em pessoal, finanças, relacionamentos com colaboradores e consumidores, dentro dos mais diversos setores que integram as novas formas de consumo. A matriz curricular do curso de Administração valoriza a aplicação prática de diversas competências do gestor. Tanto os componentes curriculares quanto as atividades complementares foram estruturadas para o desenvolvimento integral do profissional que atuará nesta área."

  },
  {
    id: "agro-eco-out",
    name: "Agroecologia",
    photo: "https://ead.unimar.br/wp-content/uploads/2022/11/agroecologia.jpg",
    url: "https://ead.unimar.br/cursos/agroecologia/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "No mercado de trabalho, o profissional de Agroecologia pode atuar em empresas e propriedades rurais e em empreendimentos de agricultura familiar, além de cooperativas, associações, ONGs e órgãos governamentais. O profissional também é encontrado em empresas de planejamento, desenvolvimento de projetos."
  },
  {
    id: "ads-out",
    name: "Análise e Desenvolvimento de Sistemas",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/ads.jpg",
    url: "https://ead.unimar.br/cursos/analise-e-desenvolvimento-de-sistemas/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais responsáveis pelas soluções tecnológicas das organizações por meio do desenvolvimento de softwares ou hardwares, que serão ativos de mercado para pequenas, médias e grandes corporações."
  },
  {
    id: "cienc-cont-out",
    name: "Ciências Contábeis",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/contabeis.jpg.webp",
    url: "https://ead.unimar.br/cursos/ciencias-contabeis/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O curso tem como objetivo formar profissionais preparados para os novos desafios e conceitos empresariais dentro do âmbito financeiro. O aluno desenvolverá habilidades analíticas da gestão de recursos financeiros e sua reaplicabilidade, envolvendo perícia e auditoria de dados, controladoria administrativa e comercial, comunicação estratégica empresarial e demais atividades que levem a empresa às decisões acertadas a fim de reduzir gastos e potencializar lucros."
  },
  {
    id: "cienc-dad-out",
    name: "Ciências de Dados",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2022/11/ciencias-de-dados.jpg",
    url: "https://ead.unimar.br/cursos/ciencias-de-dados/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "A ciência de dados é o estudo dos dados para extrair insights significativos para os negócios. Ela é uma abordagem multidisciplinar que combina princípios e práticas das áreas de matemática, estatística, inteligência artificial e engenharia da computação para analisar grandes quantidades de dados."
  },
  {
    id: "ed-fis-out",
    name: "Educação Física",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/edfiica.jpg",
    url: "https://ead.unimar.br/cursos/educacao-fisica/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O curso de Educação Física da Unimar, obedecendo às novas diretrizes curriculares, é oferecido para candidatos a graduação possibilitando a formação em Bacharelado ou Licenciatura, com ingresso único. O estudante ingressará, inicialmente, em um Núcleo Comum, constituído de estudos de formação geral da área de Educação Física, a ser desenvolvido em 8 trimestres, tendo um mínimo de 1.600 horas. Tendo concluído essa primeira etapa, inicia-se a Formação Específica, também com o mínimo de 1.600 horas e desenvolvida em 8 trimestres, na qual os alunos terão acesso a conhecimentos específicos das opções em Bacharelado ou Licenciatura."
  },
  {
    id: "empre-out",
    name: "Empreendedorismo",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/empreendedorismo.jpg.webp",
    url: "https://ead.unimar.br/cursos/empreendedorismo/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais aptos a lidar com os novos paradigmas da economia e mercado, desenvolvendo habilidades de análise de setores, linhas governamentais de incentivo, gestão comercial, relacionamento com colaboradores e clientes, finanças e impostos dentro dos mais diversos setores a fim de encontrar oportunidades de inovação em novos negócios ou aperfeiçoamento de atividades tradicionais."
  },
  {
    id: "eng-civ-out",
    name: "Engenharia Civil",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/eng-civil.jpg.webp",
    url: "https://ead.unimar.br/cursos/engenharia-civil/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O curso tem como objetivo formar engenheiros civis responsáveis pelas estratégias e gerenciamento das execuções do projeto, do estudo e da análise do terreno, passando pela gestão da equipe e segurança, cronogramas de entregas e estudos sobre termicidade até a sonoridade. Também são desenvolvidas as competências para a elaboração de projetos hidráulicos, de saneamento e elétricos, sempre voltadas às necessidades de levantamento de recursos cada vez mais escassos, além de uma visão sobre as políticas econômicas e de responsabilidade ética e ecológica."
  },
  {
    id: "eng-comp-out",
    name: "Engenharia de Computação",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/engenharia-da-computacao.jpg",
    url: "https://ead.unimar.br/cursos/engenharia-de-computacao/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O curso tem como objetivo formar profissionais capazes de projetar, programar, testar e fazer a manutenção de software e hardware, habilidades valiosas para que as empresas possam incrementar suas receitas e reagir aos desafios do cenário com novos produtos e serviços automatizados e digitalizados. Além disso, o Engenheiro da Computação deve ser capaz de criar sistemas eletrônico-digitais e desenvolver aplicações que utilizem a web, banco de dados e soluções baseadas em TI."
  },
  {
    id: "eng-prod-out",
    name: "Engenharia de Produção",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/engenharia-de-producao.jpg.webp",
    url: "https://ead.unimar.br/cursos/engenharia-de-producao/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O curso tem como objetivo formar profissionais preparados para entender os diferentes processos das várias áreas de uma organização e desenvolver projetos que façam a integração desses processos, incluindo as áreas de fabricação, fornecimento, distribuição e seleção de tecnologias, tudo em um ambiente de indústria 4.0 e pensando em maneiras de reduzir os custos e evitar desperdícios, considerando os aspectos socioeconômicos e ambientais."
  },
  {
    id: "eng-elet-out",
    name: "Engenharia Elétrica",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/engenharia-eletrica.jpg",
    url: "https://ead.unimar.br/cursos/engenharia-eletrica/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O curso tem como objetivo formar engenheiros eletricistas responsáveis pelas estratégias, planejamentos, supervisão e gerenciamento das execuções de projetos nas áreas de eletrotécnica. O formado estará habilitado a construir e a aplicar sistemas de automação e controle em linhas de produção industrial, sempre voltado às necessidades de sustentabilidade, segurança e políticas de responsabilidade ética e ecológica."
  },
  {
    id: "este-cosm-out",
    name: "Estética e Cosmética",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/estatica-e-cosmetica.jpg.webp",
    url: "https://ead.unimar.br/cursos/estetica-e-cosmetica/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "Sentir-se bem, cuidar da saúde, da beleza, é um desejo de todos. O curso de Estética e Cosmética da Unimar se propõe a formar profissionais altamente capacitados não só para cuidar dos procedimentos estéticos, mas também do bem-estar da pessoa como um todo. A formação sistêmica, com disciplinas focadas em estética, cosmética e terapias complementares, forma um profissional completo e apto para promover saúde e bem-estar aos seus clientes."
  },
  {
    id: "gastr-out",
    name: "Gastronomia",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/gastronomia.jpg",
    url: "https://ead.unimar.br/cursos/gastronomia/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "Alimentar é cuidar, é nutrir. A gastronomia está presente na vida das pessoas, embora muitas nem percebam. O profissional formado em gastronomia está apto a ser chef de cozinha, conhecendo o melhor da cozinha brasileira e internacional, entendendo seu papel em proporcionar uma experiência de prazer na alimentação. O programa do curso aborda a cozinha de diversos países, as novas tendências da alimentação, a preparação de comidas desde as mais populares (como os fast foods) até as mais requintadas. Com forte formação empreendedora e de gestão, o curso prepara não só um profissional de cozinha, como um empreendedor do ramo da gastronomia."
  },
  {
    id: "gest-amb-out",
    name: "Gestão Ambiental",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/gestao-ambiental.jpg",
    url: "https://ead.unimar.br/cursos/gestao-ambiental/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais que atuarão na gestão integradora do negócio aptos a pesquisar, auditar, implementar e gerir processos sustentáveis. Será o responsável pelo levantamento e auditoria dos dados e informações a fim de subsidiar a execução de projetos socioambientais, visando processos adequados às normas e à boa reputação social."
  },
  {
    id: "gest-com-out",
    name: "Gestão Comercial",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/gestao-comercial.jpg.webp",
    url: "https://ead.unimar.br/cursos/gestao-comercial/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais aptos a lidar com os novos paradigmas do consumo, desenvolvendo habilidades analíticas setoriais que envolvem gestão em pessoal, finanças, relacionamentos com consumidores e stakeholders, dentro dos mais diversos setores que formam a economia."
  },
  {
    id: "gest-agro-out",
    name: "Gestão de Agronegócios",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/gestao-de-agronegocios.jpg",
    url: "https://ead.unimar.br/cursos/agronegocios/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais que dominem as ferramentas de gestão da agricultura, coibindo o desperdício produtivo e assumindo o papel sustentável. Realizando a gestão de colaboradores das atividades rurais e tecnologias do setor, bem como o estudo aplicado de bioética setorial e normas, cadeias de produção e comércio de bovinos de corte e de leite, de suinocultura e avícola e do plantio, manuseio e transporte da agricultura."
  },
  {
    id: "gest-prod-ind-out",
    name: "Gestão de Produção Industrial",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2022/11/gestao-producao-industrial.jpg",
    url: "https://ead.unimar.br/cursos/gestao-da-producao-industrial/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "Um gestor da produção industrial é um profissional responsável por planejar, coordenar e supervisionar as atividades envolvidas na produção de bens e serviços em uma empresa. Ele ou ela deve garantir que a produção seja eficiente, segura e de alta qualidade, além de cumprir prazos e orçamentos definidos."
  },
  {
    id: "gest-qual-out",
    name: "Gestão de Qualidade",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/gestao-de-qualidade.jpg.webp",
    url: "https://ead.unimar.br/cursos/gestao-de-qualidade/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais aptos a lidar com a gestão de comunicação e de pessoas, fluxos e metrologia dos processos e qualidade produtiva, indicadores de monitoramento financeiros, segurança e normativas, além de responsabilidade socioambiental, almejando a boa entrega do produto ou serviço quanto às experiências do consumidor final."
  },
  {
    id: "gest-rh-out",
    name: "Gestão de Recursos Humanos",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/RH.jpg.webp",
    url: "https://ead.unimar.br/cursos/gestao-de-recursos-humanos/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo elevar resultados corporativos por meio do ambiente organizacional e o capital intelectual que formam as organizações, desenvolvendo pessoas cujos objetivos, sonhos, vontades e complexidades se alinham às estratégias, visões e valores da empresa."
  },
  {
    id: "gest-seg-priv-out",
    name: "Gestão de Segurança Privada",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2022/11/gestao-seguranca-privada.jpg",
    url: "https://ead.unimar.br/cursos/gestao-e-seguranca-privada/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O tecnólogo em Gestão da Segurança Privada planeja, opera e gerencia a segurança privada e patrimonial, podendo implantar planos de segurança e de prevenção de acidentes, diagnosticar riscos e prestar consultoria na área."
  },
  {
    id: "gest-finan-out",
    name: "Gestão Financeira",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/gestao-financeira.jpg.webp",
    url: "https://ead.unimar.br/cursos/gestao-financeira/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais preparados aos novos desafios e conceitos empresariais dentro do âmbito financeiro. O aluno desenvolverá habilidades analíticas da gestão de recursos financeiros e sua aplicabilidade, envolvendo perícia e auditoria de dados, controladoria administrativa e comercial, comunicação estratégica empresarial e demais atividades que levem a empresa a decisões acertadas a fim de reduzir gastos e potencializar lucros."
  },
  {
    id: "gest-hosp-out",
    name: "Gestão Hospitalar",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/gestao-hospital.jpg.webp",
    url: "https://ead.unimar.br/cursos/gestao-hospitalar/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais responsáveis pela administração de organizações que atuam no setor de saúde, desenvolvendo habilidades de gestão em pessoal, finanças, tecnologia, relacionamentos com colaboradores, pacientes e clientes, dentro dos diversos setores do negócio que compõe a área de saúde."
  },
  {
    id: "gest-public-out",
    name: "Gestão Pública",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/gestao-publica.jpg.webp",
    url: "https://ead.unimar.br/cursos/gestao-publica/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar ou aperfeiçoar gestores públicos a fim de melhorar os processos administrativos dos serviços públicos, seja tanto pelas bases de processos e ferramentas tradicionais da administração, como pela inovação e uso da tecnologia dentro dos âmbitos financeiros, de pessoal e atendimento da sociedade."
  },
  {
    id: "hist-out",
    name: "História",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/historia.jpg",
    url: "https://ead.unimar.br/cursos/historia-formacao-pedagogica/",
    type: "EAD",
    certificate: "Formação Pedagógica",
    desc: "O curso tem como objetivo formar historiadores plenamente capacitados para atender demandas específicas relativas ao seu campo de conhecimento e professores reflexivos aptos a aplicar metodologias e processos de ensino e aprendizagem assertivos nas unidades de ensino fundamental e médio, garantindo aos educandos a qualidade dos conceitos históricos, da economia e da cultura e sociedade em suas atividades cotidianas."
  },
  {
    id: "hist-2-lic-out",
    name: "História",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/historia.jpg",
    url: "https://ead.unimar.br/cursos/historia-2a-licenciatura/",
    type: "EAD",
    certificate: "2ª Licenciatura",
    desc: "O curso tem como objetivo formar historiadores plenamente capacitados para atender demandas específicas relativas ao seu campo de conhecimento e professores reflexivos aptos a aplicar metodologias e processos de ensino e aprendizagem assertivos nas unidades de ensino fundamental e médio, garantindo aos educandos a qualidade dos conceitos históricos, da economia e da cultura e sociedade em suas atividades cotidianas."
  },
  {
    id: "hist-lic-out",
    name: "História",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/historia.jpg",
    url: "https://ead.unimar.br/cursos/historia/",
    type: "EAD",
    certificate: "Licenciatura",
    desc: "O curso tem como objetivo formar historiadores plenamente capacitados para atender demandas específicas relativas ao seu campo de conhecimento e professores reflexivos aptos a aplicar metodologias e processos de ensino e aprendizagem assertivos nas unidades de ensino fundamental e médio, garantindo aos educandos a qualidade dos conceitos históricos, da economia e da cultura e sociedade em suas atividades cotidianas."
  },
  {
    id: "jog-dig-out",
    name: "Jogos Digitais",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2022/11/jogos-digitais.jpg",
    url: "https://ead.unimar.br/cursos/jogos-digitais/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O profissional formado em Tecnologia em Jogos Digitais trabalha diretamente na produção dos games. Ele pode ser responsável apenas por partes específicas do desenvolvimento ou pode gerenciar todo o projeto."
  },
  {
    id: "let-ing-port-out",
    name: "Letras Português/Inglês",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/letras_.jpg",
    url: "https://ead.unimar.br/cursos/letras-portugues-ingles-formacao-pedagogica/",
    type: "EAD",
    certificate: "Formação Pedagógica",
    desc: "O curso tem como objetivo formar professores capazes de propor metodologias de ensino que atraiam os alunos para as formações que compõem as evoluções da linguagem, a história dos idiomas e seus usos, linguagens e literaturas, análise literária, produção de textos, semântica e fonética."
  },
  {
    id: "let-ing-port-2-lic-out",
    name: "Letras Português/Inglês",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/letras_.jpg",
    url: "https://ead.unimar.br/cursos/letras-portugues-ingles-2a-licenciatura/",
    type: "EAD",
    certificate: "2ª Licenciatura",
    desc: "O curso tem como objetivo formar professores capazes de propor metodologias de ensino que atraiam os alunos para as formações que compõem as evoluções da linguagem, a história dos idiomas e seus usos, linguagens e literaturas, análise literária, produção de textos, semântica e fonética."
  },
  {
    id: "let-ing-port-lic-out",
    name: "Letras Português/Inglês",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/letras_.jpg",
    url: "https://ead.unimar.br/cursos/letras-portugues-ingles/",
    type: "EAD",
    certificate: "Licenciatura",
    desc: "O curso tem como objetivo formar professores capazes de propor metodologias de ensino que atraiam os alunos para as formações que compõem as evoluções da linguagem, a história dos idiomas e seus usos, linguagens e literaturas, análise literária, produção de textos, semântica e fonética."
  },
  {
    id: "log-out",
    name: "Logística",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/logistica.jpg.webp",
    url: "https://ead.unimar.br/cursos/logistica/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais aptos a lidar com a gestão de suprimentos e cadeias de distribuição, gestão de estoque, armazenagem e movimentação, transportes e infraestrutura, indicadores de monitoramento que interagem com finanças, normas e segurança e responsabilidade ético-ambiental, almejando a qualidade e eficiência dos recursos e da entrega ao consumidor final."
  },
  {
    id: "market-out",
    name: "Marketing",
    photo: "https://ead.unimar.br/wp-content/uploads/2020/09/marketing.jpg",
    url: "https://ead.unimar.br/cursos/marketing/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais aptos a lidar com as novas jornadas do consumidor, desenvolvendo habilidades analíticas de pesquisa de mercados e marcas, análise de dados e cenários, relacionamentos com clientes e experiências de consumo."
  },
  {
    id: "market-dig-out",
    name: "Marketing Digital",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/marketing-digital.jpg",
    url: "https://ead.unimar.br/cursos/marketing-digital/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "Abordando os fundamentos do Marketing Digital, Google Ads, campanhas de redes sociais, SEO, CRM, até Blockchain, o curso tem como objetivo capacitar profissionais para lidar com as novas jornadas dos clientes, desenvolvendo habilidades de pesquisa, analíticas e estratégias, experiências de consumo e relacionamentos no ambiente digital."
  },
  {
    id: "ped-2-lic-out",
    name: "Pedagogia",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/pedadogia.jpg.webp",
    url: "https://ead.unimar.br/cursos/pedagogia-2a-licenciatura/",
    type: "EAD",
    certificate: "2ª Licenciatura",
    desc: "O curso tem como objetivo formar professores reflexivos aptos a trabalhar com metodologias e processos de ensino e aprendizagem assertivos nas unidades de educação infantil e séries iniciais do ensino fundamental, assim como na Educação de Jovens e Adultos e na Educação Especial, garantindo a aplicabilidade dos conhecimentos necessários para que os educandos estejam além dos modelos tradicionais de ensino, dentro de um cenário com alunos nativos digitais. Além disso, o pedagogo contemporâneo também é capacitado para atuar em outras áreas nas quais sejam previstos conhecimentos pedagógicos, como empresas, museus e ONGs."
  },
  {
    id: "ped-lic-out",
    name: "Pedagogia",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/pedadogia.jpg.webp",
    url: "https://ead.unimar.br/cursos/pedagogia/",
    type: "EAD",
    certificate: "Licenciatura",
    desc: "O curso tem como objetivo formar professores reflexivos aptos a trabalhar com metodologias e processos de ensino e aprendizagem assertivos nas unidades de educação infantil e séries iniciais do ensino fundamental, assim como na Educação de Jovens e Adultos e na Educação Especial, garantindo a aplicabilidade dos conhecimentos necessários para que os educandos estejam além dos modelos tradicionais de ensino, dentro de um cenário com alunos nativos digitais. Além disso, o pedagogo contemporâneo também é capacitado para atuar em outras áreas nas quais sejam previstos conhecimentos pedagógicos, como empresas, museus e ONGs."
  },
  {
    id: "proc-ger-out",
    name: "Processos Gerenciais",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2020/09/processos-gerenciais.jpg",
    url: "https://ead.unimar.br/cursos/processos-gerenciais/",
    type: "EAD",
    certificate: "Superior Tecnológico",
    desc: "O curso tem como objetivo formar profissionais aptos a lidar com os novos paradigmas do mercado, desenvolvendo habilidades de gestão em pessoal, finanças, relacionamentos com colaboradores e consumidores, dentro dos mais diversos setores que integram as novas formas de consumo. O aluno de Processos Gerenciais terá uma vivência prática importante por meio dos projetos integradores previstos na matriz curricular. Destacamos a versatilidade deste curso que une ao mesmo tempo disciplinas essenciais da administração, atividades práticas e visão de mercado."
  },
  {
    id: "serv-soc-out",
    name: "Serviço Social",
    photo:
      "https://ead.unimar.br/wp-content/uploads/2022/12/h4wyqgkewrc-scaled.jpg",
    url: "htthttps://ead.unimar.br/cursos/servico-social/",
    type: "EAD",
    certificate: "Bacharelado",
    desc: "O objetivo do curso de serviço social é preparar o aluno para elaborar, implementar, executar e avaliar políticas sociais junto à órgãos da administração pública, empresas privadas, entidades e organizações populares. Por isso, durante o curso, as disciplinas promovem a integração do indivíduo com a sociedade."
  },
];

export type Post = {
  id: string;
  user: string;
  title: string;
  desc: string;
  img?: string;
}

export const JobsData: Post[] = [
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

export const PostsData: Post[] = [
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