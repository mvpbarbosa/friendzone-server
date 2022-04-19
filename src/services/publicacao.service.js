monName = new Array(
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "agosto",
  "outubro",
  "novembro",
  "dezembro"
);
now = new Date();

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();

if (minutos <= 9) {
  minutos = "0" + minutos;
}

const publicacoes = [
  {
    id: 1,
    foto: "https://i.imgflip.com/66i9f6.jpg",
    nome: "Marcos Barbosa",
    dataHora: `${dia} de ${monName[mes - 1]} de ${ano} às ${
      horas - 4
    }:${minutos}`,
    texto:
      "Hoje meu dia foi extremamente cansativo! Não aguento mais fazer projeto pro curso... É legal, eu me divirto, mas surto de 5 em 5 minutos. Cheguei ao ponto de falar sozinho, onde eu faço perguntas à mim mesmo e, como um louco, eu mesmo respondo... Bom dia, boa tarde e boa noite!",
  },
  {
    id: 2,
    foto: "https://i.pinimg.com/736x/f5/9a/3d/f59a3d10436b8e65e589fa904c03a167.jpg",
    nome: "Joyce da Silva",
    dataHora: `${dia} de ${monName[mes - 1]} de ${ano} às ${
      horas - 3
    }:${minutos}`,
    texto:
      "Meu namorado é extremamente lindo e inteligente. Além disso, ainda é muito romântico, creio que seja o último. Adoro quando ele me dá presentes. O último foi um iPhone 13 Pro Max... Affs, sou apaixonada 😍",
  },
  {
    id: 3,
    foto: "https://i.pinimg.com/originals/3e/e8/2f/3ee82fff4625633c48eecc664f387c44.jpg",
    nome: "Matheus Cezario",
    dataHora: `${dia} de ${monName[mes - 1]} de ${ano} às ${
      horas - 2
    }:${minutos}`,
    texto: "Rigbone",
  },
  {
    id: 4,
    foto: "https://i.pinimg.com/originals/f9/75/28/f97528ad1db94e70c3d9022a298b6756.jpg",
    nome: "Roger Cezario",
    dataHora: `${dia} de ${monName[mes - 1]} de ${ano} às ${
      horas - 1
    }:${minutos}`,
    texto:
      "Eu tenho 13 anos e sou legal. Meu pé é do tamanho de uma jangada... One Piece e coxinha são as melhores coisas do mundo. Não tenho mais nada a declarar.",
  },
];

const publicacoesOrdenadas = publicacoes.sort(function (a, b) {
  return a.id < b.id ? 1 : b.id < a.id ? -1 : 0;
});

const findAllPublicacoesService = () => {
  return publicacoesOrdenadas;
};

const findByIdPublicacaoService = (parametroId) => {
  return publicacoes.find((publicacao) => publicacao.id === parametroId);
};

const createPublicacaoService = (newPublicacao) => {
  monName = new Array(
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "agosto",
    "outubro",
    "novembro",
    "dezembro"
  );
  now = new Date();

  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1;
  var ano = dataAtual.getFullYear();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();

  if (minutos <= 9) {
    minutos = "0" + minutos;
  }

  const newId = publicacoes.length + 1;
  newPublicacao.id = newId;

  const newDataHora = `${dia} de ${
    monName[mes - 1]
  } de ${ano} às ${horas}:${minutos}`;
  newPublicacao.dataHora = newDataHora;

  publicacoes.push(newPublicacao);

  const newPublicacoesOrdenadas = publicacoes.sort(function (a, b) {
    return a.id < b.id ? 1 : b.id < a.id ? -1 : 0;
  });
  return newPublicacoesOrdenadas;
};

const updatePublicacaoService = (id, publicacaoEdited) => {
  publicacaoEdited["id"] = id;
  const publicacaoIndex = publicacoes.findIndex(
    (publicacao) => publicacao.id === id
  );
  publicacoes[publicacaoIndex] = publicacaoEdited;
  return publicacaoEdited;
};

const deletePublicacaoService = (id) => {
  const publicacaoIndex = publicacoes.findIndex(
    (publicacao) => publicacao.id == id
  );
  return publicacoes.splice(publicacaoIndex, 1);
};

module.exports = {
  findAllPublicacoesService,
  findByIdPublicacaoService,
  createPublicacaoService,
  updatePublicacaoService,
  deletePublicacaoService,
};
