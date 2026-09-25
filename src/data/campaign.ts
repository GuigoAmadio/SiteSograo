import { brand } from '../assets/brand'

/** Troque WhatsApp, Instagram e fotos em /public/images. */
export const campaign = {
  nickname: "Elcio Batista",
  firstName: "Elcio",
  lastName: "Batista",
  fullName: "Dr. Elcio Batista",
  office: "Candidato a Deputado Federal",
  number: "7026",
  numberDisplay: "7026",
  party: "Avante",
  city: "Campinas",
  slogan: "Campinas sempre à frente",
  tagline: "Uma Campinas mais forte para todos",
  headline: "Dr. Elcio Batista para deputado federal",
  subheadline:
    "Advogado há mais de 30 anos, vereador duas vezes em Campinas e autor de mais de 30 leis. Articulou 100 mil assinaturas pela delegacia de combate à pedofilia e à violência sexual.",
  instagram: "elcio_batista_oficial",
  instagramUrl: "https://www.instagram.com/elcio_batista_oficial/",
  whatsapp: "5519983202828",
  email: "advogado@elciobatista.com",
  address: "Comitê — Campinas, SP",
  hours: "Segunda a sábado, das 8h às 20h",
  year: 2026,
  cnpj: "68.578.206/0001-37",
} as const;

export const aboutIntro = {
  title: "Conheça melhor em quem está votando:",
  paragraphs: [
    "Dr. Elcio Batista é advogado há mais de 30 anos, casado com Ângela Batista e pai de três filhos. Foi vereador duas vezes em Campinas: mais de 30 leis, 100 mil assinaturas pela delegacia de combate à pedofilia e à violência sexual, semáforos sonoros e o cadastro único de pessoas desaparecidas.",
    "Entre as leis, estão o banco de ração, a Semana de Enfrentamento à Pedofilia, a Bíblia, a Constituição e o Código de Defesa do Consumidor em braile, e a máscara obrigatória para quem manuseia alimento. Criou o banco de alimentos com as sobras do CEASA. Como deputado federal, luta pelo Hospital Metropolitano, pela farmácia solidária e por transporte regional.",
  ],
} as const;

export const nav = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/propostas", label: "Propostas" },
  { href: "/#instagram", label: "Instagram" },
  { href: "/#faq", label: "Dúvidas" },
] as const;

export const works = [
  {
    tag: "Acessibilidade",
    short: "Semáforo sonoro",
    icon: "traffic",
    title: "Semáforos sonoros para pessoas com deficiência visual",
    text: "Trouxe para Campinas o semáforo que avisa no ouvido quem não enxerga o verde. Travessia com dignidade, não com sorte.",
    image: "/images/ambiente.jpg",
    year: "2010",
    url: "",
  },
  {
    tag: "Proteção",
    short: "Delegacia da criança",
    icon: "shield",
    title: "100 mil assinaturas pela delegacia de combate à pedofilia",
    text: "Como vereador, articulou abaixo-assinado para trazer a Campinas a delegacia de combate à pedofilia e à violência sexual contra homem, criança e adolescente.",
    image: "/images/assistencia.jpg",
    year: "2011",
    url: "",
  },
  {
    tag: "Fome",
    short: "Banco de alimentos",
    icon: "food",
    title: "Banco de alimentos: sobra do CEASA na mesa de quem precisa",
    text: "Criador do projeto que destina as sobras do CEASA às comunidades carentes — comida que ia para o lixo passa a ir para o prato.",
    image: "/images/ig1.jpg",
    year: "2012",
    url: "",
  },
  {
    tag: "Infância",
    short: "Comissão da infância",
    icon: "child",
    title: "Presidência da Comissão da Criança e do Adolescente",
    text: "Conduziu por quatro anos o colegiado da Câmara de Campinas com foco em proteção integral — não em foto de sessão solene.",
    image: "/images/educacao.jpg",
    year: "2013",
    url: "",
  },
  {
    tag: "Pessoas",
    short: "Cadastro de desaparecidos",
    icon: "search",
    title: "Cadastro único municipal de pessoas desaparecidas",
    text: "Criou em Campinas o cadastro para a família deixar de bater de porta em porta sem um registro oficial que una a rede de busca.",
    image: "/images/comunidade.jpg",
    year: "2015",
    url: "",
  },
  {
    tag: "Leis",
    short: "Mais de 30 leis",
    icon: "law",
    title: "Mais de 30 leis: ração, braile e semana de enfrentamento",
    text: "Autor do banco de ração, da Semana de Combate e Enfrentamento à Pedofilia, da Bíblia, da Constituição Federal e do Código de Defesa do Consumidor em braile, e da lei que obriga máscara para quem manuseia alimento.",
    image: "/images/obra.jpg",
    year: "2016",
    url: "",
  },
] as const;

export const projectGroups = [
  {
    id: "leis",
    kicker: "Na Câmara",
    title: "Leis efetivadas",
    lead: "Autor de mais de 30 leis em Campinas. Abaixo, as que a campanha destaca — já viraram regra, não recado de palanque.",
    icon: "scroll",
    stamp: "Lei",
    items: [
      {
        icon: "paw",
        title: "Banco de ração",
        text: "Lei que criou o banco de ração em Campinas: proteção animal com política pública, não com campanha de um dia.",
        url: "",
      },
      {
        icon: "calendar",
        title: "Semana de Combate e Enfrentamento à Pedofilia",
        text: "Calendário oficial da cidade para não deixar a pauta só no discurso quando a câmera aparece.",
        url: "",
      },
      {
        icon: "book",
        title: "Bíblia, Constituição e CDC em braile",
        text: "A lei também se lê com a ponta dos dedos: Constituição Federal, Código de Defesa do Consumidor e a Bíblia em braile.",
        url: "",
      },
      {
        icon: "mask",
        title: "Máscara para quem manuseia alimento",
        text: "Obrigação de máscara para quem lida com comida. Higiene na lei, não no aviso colado na parede.",
        url: "",
      },
      {
        icon: "search",
        title: "Cadastro único de pessoas desaparecidas",
        text: "Registro oficial para a família deixar de bater de porta em porta sem um canal que una a rede de busca.",
        url: "",
      },
    ],
  },
  {
    id: "atos",
    kicker: "Pressão e resultado",
    title: "Ato do mandato",
    lead: "O que não nasceu só de plenário: mobilização na rua para Campinas ter o que ainda não tinha.",
    icon: "megaphone",
    stamp: "Ato",
    items: [
      {
        icon: "shield",
        title: "100 mil assinaturas pela delegacia de combate à pedofilia",
        text: "Como vereador, articulou o abaixo-assinado para trazer a Campinas a delegacia de combate à pedofilia e à violência sexual contra homem, criança e adolescente.",
        url: "",
      },
    ],
  },
  {
    id: "cidade",
    kicker: "O que a cidade ganhou",
    title: "Serviço na rua",
    lead: "Projeto que saiu do papel e passou a valer no cotidiano de quem mora em Campinas.",
    icon: "city",
    stamp: "Cidade",
    items: [
      {
        icon: "traffic",
        title: "Semáforos sonoros para deficiência visual",
        text: "Trouxe para Campinas o semáforo que avisa no ouvido quem não enxerga o verde. Travessia com dignidade, não com sorte.",
        url: "",
      },
      {
        icon: "food",
        title: "Banco de alimentos com a sobra do CEASA",
        text: "Criador do projeto que destina as sobras do CEASA às comunidades — comida que ia para o lixo passa a ir para o prato.",
        url: "",
      },
    ],
  },
  {
    id: "cargos",
    kicker: "Dois mandatos de vereador",
    title: "Função no último mandato",
    lead: "Onde ele sentou na Câmara — e o que isso mudou na pauta da Casa.",
    icon: "users",
    stamp: "Cargo",
    items: [
      {
        icon: "child",
        title: "Presidência da Comissão da Criança e do Adolescente",
        text: "Conduziu por quatro anos o colegiado da Câmara de Campinas com foco em proteção integral.",
        url: "",
      },
      {
        icon: "gavel",
        title: "Corregedor da Câmara Municipal",
        text: "Foi corregedor da Casa no mandato de vereador: fiscalizar o Legislativo, não só votar projeto.",
        url: "",
      },
      {
        icon: "stamp",
        title: "Comissão de Constituição e Legalidade",
        text: "Membro titular da comissão que lê o texto da lei antes de ela virar voto — o filtro jurídico da Câmara.",
        url: "",
      },
    ],
  },
  {
    id: "gestao",
    kicker: "Fora do plenário",
    title: "Gestão na prefeitura",
    lead: "Administração de distrito e coordenação das regionais: mandato e gestão no mesmo currículo.",
    icon: "building",
    stamp: "Gestão",
    items: [
      {
        icon: "building",
        title: "Administrador regional",
        text: "Foi administrador regional em Campinas: o recado da prefeitura no distrito, não só o gabinete no centro.",
        url: "",
      },
      {
        icon: "users",
        title: "Diretor da COAR",
        text: "Depois dirigiu a Coordenação das Administrações Regionais e Subprefeituras — as regionais falando com a mesma mesa.",
        url: "",
      },
    ],
  },
] as const;

export const proposals = [
  {
    num: "01",
    icon: "hospital",
    title: "Hospital Metropolitano de Campinas",
    text: "Mais estrutura, especialidades e atendimento digno para a região.",
    detail:
      "Campinas e as cidades vizinhas não podem depender de fila e de deslocamento para ter especialidade. Como deputado federal, o Elcio vai lutar por estrutura, mais especialidades e atendimento digno no Hospital Metropolitano — hospital de verdade para quem mora na região, não só no mapa da campanha.",
    video: "/videos/chega-de-omissao.mp4",
  },
  {
    num: "02",
    icon: "pharmacy",
    title: "Farmácia solidária",
    text: "Medicamento de uso contínuo para quem mais precisa.",
    detail:
      "Remédio contínuo não pode ser luxo. A farmácia solidária é a frente para aproximar medicamento de quem não consegue pagar o preço da rua. O Elcio já tratou isso no mandato municipal; agora a pauta sobe para Brasília, com foco em acesso, regularidade e quem está no fim da fila.",
    video: "/videos/direitos-trabalhistas.mp4",
  },
  {
    num: "03",
    icon: "bus",
    title: "Transporte e mobilidade regional",
    text: "Integração entre cidades e transporte de qualidade.",
    detail:
      "Quem vive na região metropolitana perde hora em ônibus ruim e em cidade que não conversa com a outra. A proposta é investimento, integração entre municípios e qualidade no deslocamento — trabalho, estudo e saúde no mesmo corredor, não três passagens e três filas.",
    video: "/videos/escala-6x1.mp4",
  },
] as const;

export const instagramVideos = [
  {
    id: "escala",
    src: "/videos/escala-6x1.mp4",
    caption: "Escala 6x1: o que você acha?",
  },
  {
    id: "omissao",
    src: "/videos/chega-de-omissao.mp4",
    caption: "Chega de omissão.",
  },
  {
    id: "cury",
    src: "/videos/apoio-augusto-cury.mp4",
    caption:
      "Receber o apoio de Augusto Cury fortalece ainda mais a nossa caminhada.",
  },
  {
    id: "direitos",
    src: "/videos/direitos-trabalhistas.mp4",
    caption: "Direitos trabalhistas não podem virar moeda de troca.",
  },
  {
    id: "divergencia",
    src: "/videos/divergencia-intolerancia.mp4",
    caption:
      "Quando a divergência vira intolerância e quem pensa diferente passa a ser tratado como inimigo.",
  },
  {
    id: "reino",
    src: "/videos/reino-dividido.mp4",
    caption: "Todo reino dividido contra si mesmo não se sustenta.",
  },
  {
    id: "bastidor",
    src: "/videos/bastidor.mp4",
    caption: "Bastidor da campanha.",
  },
] as const;

export const instagramPosts = [
  {
    id: "1",
    image: "/images/ig1.jpg",
    caption:
      "Banco de alimentos: a sobra do CEASA tem que ir para a comunidade, não para o lixo.",
    likes: 428,
    comments: 37,
    date: "Campinas",
  },
  {
    id: "2",
    image: "/images/ig2.jpg",
    caption:
      "Farmácia solidária é o projeto da vez. Remédio contínuo não pode ser luxo.",
    likes: 512,
    comments: 64,
    date: "Saúde",
  },
  {
    id: "3",
    image: "/images/ig3.jpg",
    caption:
      "Quatro anos presidindo a Comissão da Criança e do Adolescente. Proteção é pauta, não campanha.",
    likes: 389,
    comments: 21,
    date: "Câmara",
  },
  {
    id: "4",
    image: "/images/ig4.jpg",
    caption:
      "Mais de 30 leis. Constituição e Código do Consumidor em braile: a lei também se lê com a ponta dos dedos.",
    likes: 276,
    comments: 18,
    date: "Leis",
  },
  {
    id: "5",
    image: "/images/ig6.jpg",
    caption:
      "100 mil assinaturas pela delegacia de combate à pedofilia em Campinas.",
    likes: 631,
    comments: 82,
    date: "Proteção",
  },
  {
    id: "6",
    image: "/images/ig5.jpg",
    caption:
      "Semáforo sonoro: a cidade precisa avisar quem não enxerga o sinal verde.",
    likes: 354,
    comments: 29,
    date: "Acesso",
  },
] as const;

export const testimonials = [
  {
    name: "Advogado há mais de 30 anos",
    role: "Família e ofício",
    text: "Casado com Ângela Batista e pai de três filhos. A banca de advogado e a vida em Campinas andam juntas há três décadas.",
  },
  {
    name: "100 mil assinaturas",
    role: "Delegacia de combate à pedofilia",
    text: "Mobilização para Campinas ter delegacia especializada no combate à pedofilia e à violência sexual contra homem, criança e adolescente.",
  },
  {
    name: "Vereador duas vezes",
    role: "Mais de 30 leis em Campinas",
    text: "Dois mandatos na Câmara, correição da Casa, Comissão da Criança e da Constituição e Legalidade. Também foi administrador regional e diretor da COAR.",
  },
] as const;

export const faqs = [
  {
    q: "O Elcio já foi vereador. O que ele fez de concreto?",
    a: "Foi vereador duas vezes. Presidiu por quatro anos a Comissão da Criança e do Adolescente, foi corregedor da Câmara, membro da Comissão de Constituição e Legalidade e autor de mais de 30 leis — entre elas o banco de ração, a semana de enfrentamento à pedofilia e a Constituição e o CDC em braile.",
  },
  {
    q: "Por que deputado federal, se o trabalho dele foi na Câmara Municipal?",
    a: "Quem já legislou em Campinas sabe o que a cidade e a região precisam levar a Brasília: Hospital Metropolitano, farmácia solidária e mobilidade entre municípios. O currículo municipal vira pauta federal.",
  },
  {
    q: "O que é a farmácia solidária?",
    a: "É a luta para aproximar medicamento de uso contínuo de quem não consegue pagar. No material de campanha, é uma das três frentes do mandato federal, junto com o Hospital Metropolitano e o transporte regional.",
  },
  {
    q: "Ele só atuou na Câmara?",
    a: "Não. É advogado há mais de 30 anos, foi administrador regional e depois diretor da COAR, a Coordenação das Administrações Regionais e Subprefeituras de Campinas. Mandato e gestão de distrito no mesmo currículo.",
  },
  {
    q: "Como eu ajudo a campanha?",
    a: "Compartilhe o site, chame o grupo da família no WhatsApp e deixe seu nome no formulário do comitê. Material de rua a gente organiza com quem puder aparecer.",
  },
  {
    q: "Posso levar um problema agora, antes de votar?",
    a: "Pode. Mande no WhatsApp com foto e ponto de referência — UBS, escola, semáforo, desaparecimento ou denúncia de violência. A campanha encaminha; não substitui polícia nem Conselho Tutelar em caso urgente.",
  },
] as const;

export const candidatePhoto = brand.photo

export const communityPhoto = "/images/comunidade.jpg";

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${campaign.whatsapp}?text=${text}`;
}

export const defaultWhatsappMessage = `Olá, Elcio! Vim pelo site da campanha e quero conversar. Número ${campaign.numberDisplay}.`;
