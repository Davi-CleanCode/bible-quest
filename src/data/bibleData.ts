export type BibleBook = {
  id: string;
  name: string;
  testament: 'antigo' | 'novo';
  chapters: number;
  description: string;
  difficulty: 'facil' | 'medio' | 'dificil';
  overview?: string;
};

export const bibleBooks: BibleBook[] = [
  {
    id: 'Gênesis',
    name: 'Gênesis',
    testament: 'antigo',
    chapters: 40,
    description: "The book of beginnings - creation, the fall, and God's covenant with Abraham.",
    difficulty: 'medio',
    overview: ""
  },

  // ========== ANTIGO TESTAMENTO (39 livros) ==========
  {
    id: 'Genesis',
    name: 'Gênesis',
    testament: 'antigo',
    chapters: 50,
    description: "O livro das origens: criação, queda e aliança com Abraão.",
    difficulty: 'facil',
    overview: "Relata a criação do mundo, o pecado humano e as histórias dos patriarcas."
  },
  {
    id: 'Exodo',
    name: 'Êxodo',
    testament: 'antigo',
    chapters: 40,
    description: "A libertação de Israel do Egito e a entrega da Lei.",
    difficulty: 'facil',
    overview: "Moisés lidera o povo hebreu e recebe os Dez Mandamentos."
  },
  {
    id: 'Levitico',
    name: 'Levítico',
    testament: 'antigo',
    chapters: 27,
    description: "Leis sacerdotais e rituais de santidade.",
    difficulty: 'dificil',
    overview: "Regras sobre sacrifícios, pureza e o Dia da Expiação."
  },
  {
    id: 'Numeros',
    name: 'Números',
    testament: 'antigo',
    chapters: 36,
    description: "A jornada de Israel no deserto.",
    difficulty: 'medio',
    overview: "Censos, rebeliões e preparação para entrar em Canaã."
  },
  {
    id: 'Deuteronomio',
    name: 'Deuteronômio',
    testament: 'antigo',
    chapters: 34,
    description: "Reafirmação da Lei antes de entrar em Canaã.",
    difficulty: 'medio',
    overview: "Moisés relembra a Lei e nomeia Josué como sucessor."
  },
  {
    id: 'Josue',
    name: 'Josué',
    testament: 'antigo',
    chapters: 24,
    description: "A conquista da Terra Prometida.",
    difficulty: 'facil',
    overview: "Josué lidera Israel na tomada de Canaã."
  },
  {
    id: 'Juizes',
    name: 'Juízes',
    testament: 'antigo',
    chapters: 21,
    description: "Ciclos de apostasia, opressão e libertação.",
    difficulty: 'facil',
    overview: "Histórias de Débora, Gideão, Sansão e outros juízes."
  },
  {
    id: 'Rute',
    name: 'Rute',
    testament: 'antigo',
    chapters: 4,
    description: "Lealdade familiar e redenção.",
    difficulty: 'facil',
    overview: "A história de Rute, uma ancestral de Davi."
  },
  {
    id: '1Samuel',
    name: '1 Samuel',
    testament: 'antigo',
    chapters: 31,
    description: "Transição dos juízes para a monarquia.",
    difficulty: 'facil',
    overview: "Histórias de Samuel, Saul e o jovem Davi."
  },
  {
    id: '2Samuel',
    name: '2 Samuel',
    testament: 'antigo',
    chapters: 24,
    description: "O reinado de Davi.",
    difficulty: 'facil',
    overview: "Davi como rei, seus triunfos e fracassos."
  },
  {
    id: '1Reis',
    name: '1 Reis',
    testament: 'antigo',
    chapters: 22,
    description: "O reinado de Salomão e a divisão do reino.",
    difficulty: 'facil',
    overview: "Sábio Salomão, o templo e a divisão de Israel."
  },
  {
    id: '2Reis',
    name: '2 Reis',
    testament: 'antigo',
    chapters: 25,
    description: "Queda de Israel e Judá.",
    difficulty: 'facil',
    overview: "Exílio assírio e babilônico devido à idolatria."
  },
  {
    id: '1Cronicas',
    name: '1 Crônicas',
    testament: 'antigo',
    chapters: 29,
    description: "Genealogias e história de Davi.",
    difficulty: 'medio',
    overview: "Ênfase no culto e na linhagem davídica."
  },
  {
    id: '2Cronicas',
    name: '2 Crônicas',
    testament: 'antigo',
    chapters: 36,
    description: "História dos reis de Judá.",
    difficulty: 'medio',
    overview: "Reformas religiosas e a queda de Jerusalém."
  },
  {
    id: 'Esdras',
    name: 'Esdras',
    testament: 'antigo',
    chapters: 10,
    description: "Retorno do exílio e reconstrução do templo.",
    difficulty: 'medio',
    overview: "Esdras lidera a restauração espiritual."
  },
  {
    id: 'Neemias',
    name: 'Neemias',
    testament: 'antigo',
    chapters: 13,
    description: "Reconstrução dos muros de Jerusalém.",
    difficulty: 'medio',
    overview: "Neemias enfrenta oposição para reconstruir a cidade."
  },
  {
    id: 'Ester',
    name: 'Ester',
    testament: 'antigo',
    chapters: 10,
    description: "Livro sem menção direta a Deus, mas com Seu cuidado.",
    difficulty: 'facil',
    overview: "Ester salva o povo judeu da destruição."
  },
  {
    id: 'Job',
    name: 'Jó',
    testament: 'antigo',
    chapters: 42,
    description: "Sofrimento e soberania de Deus.",
    difficulty: 'medio',
    overview: "Jó questiona o sofrimento e recebe resposta divina."
  },
  {
    id: 'Salmos',
    name: 'Salmos',
    testament: 'antigo',
    chapters: 150,
    description: "Oração, louvor e lamentações.",
    difficulty: 'medio',
    overview: "Coleção de poemas e hinos de Davi e outros."
  },
  {
    id: 'Proverbios',
    name: 'Provérbios',
    testament: 'antigo',
    chapters: 31,
    description: "Sabedoria prática para a vida.",
    difficulty: 'medio',
    overview: "Ditados sábios atribuídos principalmente a Salomão."
  },
  {
    id: 'Eclesiastes',
    name: 'Eclesiastes',
    testament: 'antigo',
    chapters: 12,
    description: "Reflexão sobre o sentido da vida.",
    difficulty: 'medio',
    overview: "Questionamentos sobre vaidade e propósito."
  },
  {
    id: 'Cantares',
    name: 'Cantares',
    testament: 'antigo',
    chapters: 8,
    description: "Poema de amor entre um homem e uma mulher.",
    difficulty: 'medio',
    overview: "Alegorias do amor humano e divino."
  },
  {
    id: 'Isaias',
    name: 'Isaías',
    testament: 'antigo',
    chapters: 66,
    description: "Profecia sobre juízo e redenção.",
    difficulty: 'dificil',
    overview: "Mensagens de condenação e esperança messiânica."
  },
  {
    id: 'Jeremias',
    name: 'Jeremias',
    testament: 'antigo',
    chapters: 52,
    description: "Advertências antes da queda de Jerusalém.",
    difficulty: 'dificil',
    overview: "O profeta sofredor anuncia o exílio babilônico."
  },
  {
    id: 'Lamentacoes',
    name: 'Lamentações',
    testament: 'antigo',
    chapters: 5,
    description: "Lamentos pela destruição de Jerusalém.",
    difficulty: 'medio',
    overview: "Poemas de dor e arrependimento."
  },
  {
    id: 'Ezequiel',
    name: 'Ezequiel',
    testament: 'antigo',
    chapters: 48,
    description: "Visões proféticas durante o exílio.",
    difficulty: 'dificil',
    overview: "Simbolismos complexos e restauração futura."
  },
  {
    id: 'Daniel',
    name: 'Daniel',
    testament: 'antigo',
    chapters: 12,
    description: "Histórias de fé e profecias apocalípticas.",
    difficulty: 'dificil',
    overview: "Daniel na cova dos leões e visões do fim dos tempos."
  },
  {
    id: 'Oseias',
    name: 'Oséias',
    testament: 'antigo',
    chapters: 14,
    description: "Metáfora do amor de Deus por Israel infiel.",
    difficulty: 'medio',
    overview: "Casamento de Oséias como símbolo da aliança."
  },
  {
    id: 'Joel',
    name: 'Joel',
    testament: 'antigo',
    chapters: 3,
    description: "Chamado ao arrependimento e promessa do Espírito.",
    difficulty: 'medio',
    overview: "Pragas de gafanhotos e o Dia do Senhor."
  },
  {
    id: 'Amos',
    name: 'Amos',
    testament: 'antigo',
    chapters: 9,
    description: "Justiça social e juízo sobre as nações.",
    difficulty: 'medio',
    overview: "Amos, o pastor que denuncia a injustiça."
  },
  {
    id: 'Abdias',
    name: 'Obadias',
    testament: 'antigo',
    chapters: 1,
    description: "Profecia contra Edom.",
    difficulty: 'medio',
    overview: "Julgamento pela traição a Judá."
  },
  {
    id: 'Jonas',
    name: 'Jonas',
    testament: 'antigo',
    chapters: 4,
    description: "O profeta relutante e a misericórdia de Deus.",
    difficulty: 'facil',
    overview: "Jonas engolido por um grande peixe."
  },
  {
    id: 'Miqueias',
    name: 'Miqueias',
    testament: 'antigo',
    chapters: 7,
    description: "Justiça, misericórdia e o Messias prometido.",
    difficulty: 'medio',
    overview: "Condena a corrupção e aponta para Belém."
  },
  {
    id: 'Naum',
    name: 'Naum',
    testament: 'antigo',
    chapters: 3,
    description: "Queda de Nínive, capital assíria.",
    difficulty: 'medio',
    overview: "Deus como vingador da opressão."
  },
  {
    id: 'Habacuque',
    name: 'Habacuque',
    testament: 'antigo',
    chapters: 3,
    description: "Diálogo sobre o sofrimento e a fé.",
    difficulty: 'medio',
    overview: "O justo viverá pela fé."
  },
  {
    id: 'Sofonias',
    name: 'Sofonias',
    testament: 'antigo',
    chapters: 3,
    description: "O Dia do Senhor e o remanescente fiel.",
    difficulty: 'medio',
    overview: "Juízo universal e promessa de restauração."
  },
  {
    id: 'Ageu',
    name: 'Ageu',
    testament: 'antigo',
    chapters: 2,
    description: "Incentivo à reconstrução do templo.",
    difficulty: 'medio',
    overview: "Repreensão pela negligência ao culto."
  },
  {
    id: 'Zacarias',
    name: 'Zacarias',
    testament: 'antigo',
    chapters: 14,
    description: "Visões messiânicas e escatológicas.",
    difficulty: 'dificil',
    overview: "Simbolismos sobre a vinda do Rei."
  },
  {
    id: 'Malaquias',
    name: 'Malaquias',
    testament: 'antigo',
    chapters: 4,
    description: "Advertências e promessa do Messias.",
    difficulty: 'medio',
    overview: "O último profeta do Antigo Testamento."

  },

  // ========== NOVO TESTAMENTO (27 livros) ==========
  {
    id: 'Mateus',
    name: 'Mateus',
    testament: 'novo',
    chapters: 28,
    description: "Jesus como o Messias cumprindo as profecias.",
    difficulty: 'medio',
    overview: "Genealogia, Sermão da Montanha e parábolas."
  },
  {
    id: 'Marcos',
    name: 'Marcos',
    testament: 'novo',
    chapters: 16,
    description: "Evangelho focado em ações rápidas de Jesus.",
    difficulty: 'facil',
    overview: "Milagres e o caminho para a cruz."
  },
  {
    id: 'Lucas',
    name: 'Lucas',
    testament: 'novo',
    chapters: 24,
    description: "Jesus como Salvador universal.",
    difficulty: 'facil',
    overview: "Parábolas como o Filho Pródigo e o Bom Samaritano."
  },
  {
    id: 'Joao',
    name: 'João',
    testament: 'novo',
    chapters: 21,
    description: "Jesus como o Filho de Deus.",
    difficulty: 'medio',
    overview: "Sinais e discursos profundos (ex.: 'Eu sou o pão da vida')."
  },
  {
    id: 'Atos',
    name: 'Atos',
    testament: 'novo',
    chapters: 28,
    description: "Expansão da igreja primitiva.",
    difficulty: 'facil',
    overview: "Pentecostes, conversão de Paulo e viagens missionárias."
  },
  {
    id: 'Romanos',
    name: 'Romanos',
    testament: 'novo',
    chapters: 16,
    description: "Justificação pela fé e vida no Espírito.",
    difficulty: 'medio',
    overview: "Carta teológica de Paulo sobre graça e eleição."
  },
  {
    id: '1Corintios',
    name: '1 Coríntios',
    testament: 'novo',
    chapters: 16,
    description: "Correção de problemas na igreja de Corinto.",
    difficulty: 'medio',
    overview: "Amor (cap. 13), ceia do Senhor e dons espirituais."
  },
  {
    id: '2Corintios',
    name: '2 Coríntios',
    testament: 'novo',
    chapters: 13,
    description: "Defesa do ministério apostólico de Paulo.",
    difficulty: 'medio',
    overview: "Fraqueza humana x poder divino."
  },
  {
    id: 'Galatas',
    name: 'Gálatas',
    testament: 'novo',
    chapters: 6,
    description: "Contra o legalismo, a favor da graça.",
    difficulty: 'medio',
    overview: "Liberdade cristã e fruto do Espírito."
  },
  {
    id: 'Efesios',
    name: 'Efésios',
    testament: 'novo',
    chapters: 6,
    description: "Unidade da igreja e armadura espiritual.",
    difficulty: 'medio',
    overview: "Doutrina sobre a igreja como corpo de Cristo."
  },
  {
    id: 'Filipenses',
    name: 'Filipenses',
    testament: 'novo',
    chapters: 4,
    description: "Alegria em Cristo apesar das circunstâncias.",
    difficulty: 'facil',
    overview: "Paulo agradece pela parceria dos filipenses."
  },
  {
    id: 'Colossenses',
    name: 'Colossenses',
    testament: 'novo',
    chapters: 4,
    description: "Supremacia de Cristo contra heresias.",
    difficulty: 'medio',
    overview: "Jesus como cabeça da igreja e da criação."
  },
  {
    id: '1Tessalonicenses',
    name: '1 Tessalonicenses',
    testament: 'novo',
    chapters: 5,
    description: "Esperança na segunda vinda de Cristo.",
    difficulty: 'facil',
    overview: "Exortações à santidade e ao trabalho."
  },
  {
    id: '2Tessalonicenses',
    name: '2 Tessalonicenses',
    testament: 'novo',
    chapters: 3,
    description: "Escatologia e alerta contra a ociosidade.",
    difficulty: 'medio',
    overview: "Correção de mal-entendidos sobre o fim dos tempos."
  },
  {
    id: '1Timoteo',
    name: '1 Timóteo',
    testament: 'novo',
    chapters: 6,
    description: "Conselhos pastorais a Timóteo.",
    difficulty: 'medio',
    overview: "Liderança na igreja e combate a falsos mestres."
  },
  {
    id: '2Timoteo',
    name: '2 Timóteo',
    testament: 'novo',
    chapters: 4,
    description: "Testamento final de Paulo.",
    difficulty: 'facil',
    overview: "Exortação a pregar a Palavra e perseverar."
  },
  {
    id: 'Tito',
    name: 'Tito',
    testament: 'novo',
    chapters: 3,
    description: "Organização da igreja em Creta.",
    difficulty: 'facil',
    overview: "Requisitos para líderes e vida piedosa."
  },
  {
    id: 'Filemon',
    name: 'Filemom',
    testament: 'novo',
    chapters: 1,
    description: "Apelo por um escravo fugitivo, Onésimo.",
    difficulty: 'facil',
    overview: "Carta pessoal sobre perdão e reconciliação."
  },
  {
    id: 'Hebreus',
    name: 'Hebreus',
    testament: 'novo',
    chapters: 13,
    description: "Cristo como superior ao judaísmo.",
    difficulty: 'dificil',
    overview: "Comparações entre sacerdócio levítico e Jesus."
  },
  {
    id: 'Tiago',
    name: 'Tiago',
    testament: 'novo',
    chapters: 5,
    description: "Fé prática e sabedoria.",
    difficulty: 'medio',
    overview: "Obras como evidência da fé genuína."
  },
  {
    id: '1Pedro',
    name: '1 Pedro',
    testament: 'novo',
    chapters: 5,
    description: "Encorajamento aos cristãos perseguidos.",
    difficulty: 'medio',
    overview: "Esperança no sofrimento e identidade em Cristo."
  },
  {
    id: '2Pedro',
    name: '2 Pedro',
    testament: 'novo',
    chapters: 3,
    description: "Alertas contra falsos mestres.",
    difficulty: 'medio',
    overview: "Vinda do Senhor e santidade pessoal."
  },
  {
    id: '1Joao',
    name: '1 João',
    testament: 'novo',
    chapters: 5,
    description: "Testes de vida cristã autêntica.",
    difficulty: 'medio',
    overview: "Amor a Deus e aos irmãos como marca do crente."
  },
  {
    id: '2Joao',
    name: '2 João',
    testament: 'novo',
    chapters: 1,
    description: "Carta sobre amor e verdade.",
    difficulty: 'facil',
    overview: "Alertas contra enganadores."
  },
  {
    id: '3Joao',
    name: '3 João',
    testament: 'novo',
    chapters: 1,
    description: "Recomendação a Gaio e crítica a Diótrefes.",
    difficulty: 'facil',
    overview: "Hospitalidade e conflitos na igreja."
  },
  {
    id: 'Judas',
    name: 'Judas',
    testament: 'novo',
    chapters: 1,
    description: "Advertência contra apostasia.",
    difficulty: 'medio',
    overview: "Exemplos do AT sobre juízo divino."
  },
  {
    id: 'Apocalipse',
    name: 'Apocalipse',
    testament: 'novo',
    chapters: 22,
    description: "Visões proféticas sobre o fim dos tempos.",
    difficulty: 'dificil',
    overview: "Simbolismos complexos da vitória final de Cristo."
  }
];
export default bibleBooks;