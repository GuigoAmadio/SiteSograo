/** Troque nome, número, WhatsApp, Instagram e fotos em /public/images. */
export const campaign = {
  nickname: 'Sogrão',
  fullName: 'Carlos Henrique Mendes',
  office: 'Candidato a Vereador',
  number: '45678',
  numberDisplay: '45.678',
  party: 'Unidos pela Cidade',
  city: 'Nossa Cidade',
  slogan: 'Gente que resolve. Gente que está presente.',
  headline: 'Um vereador que conhece a sua rua — e luta por ela.',
  subheadline:
    'Não enfrente sozinho o abandono da sua rua, da saúde e da escola do seu filho. O Sogrão está na campanha para transformar reclamação em obra, denúncia em fiscalização e vizinhança em força política.',
  instagram: 'sograo.oficial',
  instagramUrl: 'https://www.instagram.com/sograo.oficial/',
  whatsapp: '5511999999999',
  email: 'comite@sograo.com.br',
  address: 'Comitê Central — Rua da Praça, 100 — Centro',
  hours: 'Segunda a sábado, das 8h às 20h',
  year: 2026,
} as const

export const nav = [
  { href: '#inicio', label: 'Início' },
  { href: '#candidato', label: 'Candidato' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#propostas', label: 'Propostas' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#faq', label: 'Dúvidas' },
] as const

export const situations = [
  {
    icon: 'street',
    title: 'Rua sem asfalto ou sem luz?',
    text: 'Você pede, protocola, espera — e o buraco, o esgoto e o poste queimado continuam no mesmo lugar.',
  },
  {
    icon: 'health',
    title: 'UBS lotada e sem médico?',
    text: 'Fila de madrugada, falta de remédio e exame marcado para daqui a meses. Saúde básica não pode ser privilégio.',
  },
  {
    icon: 'school',
    title: 'Escola caindo e sem merenda?',
    text: 'Seu filho merece sala digna, transporte e professor em sala — não improviso todo ano letivo.',
  },
  {
    icon: 'safety',
    title: 'Praça tomada e sem policiamento?',
    text: 'Família deixa de sair à noite. Comércio fecha mais cedo. Segurança começa com presença e iluminação.',
  },
] as const

export const differentials = [
  {
    title: 'Presença de bairro',
    text: 'Não aparece só em ano de eleição. O Sogrão anda a comunidade, anota o pedido e cobra o poder público.',
  },
  {
    title: 'Fiscalização de verdade',
    text: 'Vereador existe para fiscalizar. Orçamento, obra parada e cargo fantasma entram na pauta — com nome e número.',
  },
  {
    title: 'Linguagem clara',
    text: 'Sem juridiquês de gabinete. Você entende o que foi feito, o que falta e quanto custou.',
  },
] as const

export const about = {
  eyebrow: 'Quem é o candidato',
  title: 'Do portão da vizinhança para a Câmara',
  lead: 'O Sogrão construiu reputação do jeito mais difícil: resolvendo o problema do vizinho antes de pedir voto.',
  body: 'Carlos Henrique Mendes, o Sogrão, é liderança comunitária, pai de família e o tipo de gente que a cidade já conhece pelo primeiro nome. Depois de anos organizando mutirão, cobrando UBS e mediando o que a prefeitura deixava para depois, decidiu dar o passo que a rua pedia: ser voz permanente na Câmara Municipal.',
  bullets: [
    'Mais de 15 anos de mobilização em associações de bairro',
    'Atuação em saúde da família, educação e regularização fundiária',
    'Atendimento presencial no comitê e digital pelo WhatsApp',
  ],
}

export const works = [
  {
    tag: 'Saúde',
    title: 'Mutirão que reabriu o atendimento da UBS do Jardim',
    text: 'Organização de moradores, abaixo-assinado e pressão na Secretaria. Resultado: médico três vezes por semana e farmácia reabastecida.',
    image: '/images/saude.jpg',
    year: '2024',
  },
  {
    tag: 'Educação',
    title: 'Cobertura da quadra e merenda regular na EM Professor Lima',
    text: 'Reunião com direção, pais e vereança. A cobertura saiu do papel e a merenda deixou de faltar na terceira semana do mês.',
    image: '/images/educacao.jpg',
    year: '2024',
  },
  {
    tag: 'Infraestrutura',
    title: 'Asfalto e drenagem na Rua das Palmeiras após 9 anos de lama',
    text: 'Mapeamento de 42 casas alagadas, dossiê fotográfico e protocolo semanal até a tapa-buraco virar recape.',
    image: '/images/obra.jpg',
    year: '2023',
  },
  {
    tag: 'Esporte',
    title: 'Campo de várzea com alambrado, vestiário e horários para as meninas',
    text: 'O campinho deixou de ser mato. Hoje tem grade, água e espaço reservado para o time feminino no fim de semana.',
    image: '/images/esporte.jpg',
    year: '2023',
  },
  {
    tag: 'Assistência',
    title: 'Cesta e documento: mutirão para quem estava invisível no CadÚnico',
    text: '120 famílias atualizaram cadastro e passaram a acessar benefício que já era direito — só faltava alguém sentar e ajudar.',
    image: '/images/assistencia.jpg',
    year: '2025',
  },
  {
    tag: 'Meio ambiente',
    title: 'Nascente limpa e horta comunitária no fundo do bairro',
    text: 'Mutirão de 80 pessoas, parceria com escola e cerca para o lixo parar de ir para o córrego.',
    image: '/images/ambiente.jpg',
    year: '2025',
  },
] as const

export const proposals = [
  {
    num: '01',
    title: 'Saúde na porta',
    text: 'UBS com horário estendido, agente de saúde em toda microárea e farmácia de alto custo com fila transparente.',
  },
  {
    num: '02',
    title: 'Escola que funciona',
    text: 'Merenda de verdade, ar-condicionado nas salas de lata e transporte escolar que não deixa aluno para trás.',
  },
  {
    num: '03',
    title: 'Rua digna',
    text: 'Plano de tapa-buraco com prazo público, drenagem nos pontos de alagamento e iluminação LED em toda via coletora.',
  },
  {
    num: '04',
    title: 'Mulher em segurança',
    text: 'Casa de passagem, iluminação em ponto de ônibus e fiscalização de medida protetiva junto à rede municipal.',
  },
  {
    num: '05',
    title: 'Trabalho no bairro',
    text: 'Qualificação no CRAS, feira do empreendedor e desburocratização para o comércio de esquina.',
  },
  {
    num: '06',
    title: 'Câmara aberta',
    text: 'Prestação de contas mensal no Instagram e no comitê. Você vai saber o que o vereador votou — e por quê.',
  },
] as const

export const instagramPosts = [
  {
    id: '1',
    image: '/images/ig1.jpg',
    caption: 'Mutirão no Jardim Esperança. Quando a rua se junta, a prefeitura escuta.',
    likes: 428,
    comments: 37,
    date: '12 ago',
  },
  {
    id: '2',
    image: '/images/ig2.jpg',
    caption: 'Na UBS cedo: lista de faltas da farmácia para protocolar amanhã.',
    likes: 512,
    comments: 64,
    date: '9 ago',
  },
  {
    id: '3',
    image: '/images/ig3.jpg',
    caption: 'Conversa com os professores da EM Lima. Educação não é discurso de palanque.',
    likes: 389,
    comments: 21,
    date: '5 ago',
  },
  {
    id: '4',
    image: '/images/ig4.jpg',
    caption: 'Reunião no comitê: prioridades do mês saíram da assembleia, não do gabinete.',
    likes: 276,
    comments: 18,
    date: '1 ago',
  },
  {
    id: '5',
    image: '/images/ig6.jpg',
    caption: 'Caminhada no centro. Quem quiser falar com o Sogrão, é só chegar.',
    likes: 631,
    comments: 82,
    date: '28 jul',
  },
  {
    id: '6',
    image: '/images/ig5.jpg',
    caption: 'Amanhecer no campo: esporte de base é política pública, não favor.',
    likes: 354,
    comments: 29,
    date: '22 jul',
  },
] as const

export const testimonials = [
  {
    name: 'Dona Aparecida',
    role: 'Moradora do Jardim Esperança',
    text: 'Eu já tinha desistido do asfalto. O Sogrão foi na minha porta, tirou foto do buraco e não parou de cobrar. Hoje meu neto anda de bicicleta na rua.',
  },
  {
    name: 'Marcos, comerciante',
    role: 'Padaria do Centro',
    text: 'Iluminação da praça mudou o movimento. A loja fecha mais tarde e a gente se sente gente de novo. Isso é vereador que trabalha.',
  },
  {
    name: 'Professora Helena',
    role: 'EM Professor Lima',
    text: 'Ele sentou com o grêmio, com a merendeira e com a direção. Não veio pedir foto. Veio perguntar o que faltava. Raro isso.',
  },
] as const

export const faqs = [
  {
    q: 'Moro em outro bairro. O Sogrão atende mesmo assim?',
    a: 'Sim. A campanha é da cidade inteira. O comitê recebe presencialmente e o WhatsApp funciona para recado, denúncia de obra e pedido de visita — de qualquer região.',
  },
  {
    q: 'Vereador resolve asfalto e UBS? Isso não é da prefeitura?',
    a: 'A obra é do Executivo. O vereador fiscaliza, protocola, convoca secretário e denuncia atraso. Sem cobrança na Câmara, o pedido da rua some na fila. É exatamente para isso que o Sogrão se candidata.',
  },
  {
    q: 'Como eu ajudo a campanha sem ser cabo eleitoral?',
    a: 'Três gestos bastam: compartilhe o site, chame o grupo da família no WhatsApp e deixe seu nome no comitê. Santinho, carreata e boca de urna a gente organiza com quem puder.',
  },
  {
    q: 'Os honorários… quer dizer, a campanha pede dinheiro?',
    a: 'Doação eleitoral segue a lei. Não pedimos PIX informal. Quem quiser contribuir oficialmente recebe orientação do comitê, com recibo e prestação de contas.',
  },
  {
    q: 'E depois da eleição, some?',
    a: 'O compromisso público é prestação de contas todo mês no Instagram e plantão semanal no comitê. Se sumir, vocês terão como cobrar — por escrito e em rede.',
  },
  {
    q: 'Posso levar um problema agora, antes de votar?',
    a: 'Pode e deve. A campanha não substitui ouvidoria, mas o Sogrão já encaminha denúncia de UBS, escola e rua. Mande no WhatsApp com foto e ponto de referência.',
  },
] as const

export const candidatePhoto = '/images/candidato.jpg'

export const communityPhoto = '/images/comunidade.jpg'

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${campaign.whatsapp}?text=${text}`
}

export const defaultWhatsappMessage =
  `Olá, Sogrão! Vim pelo site da campanha e quero conversar. Número ${campaign.numberDisplay}.`
