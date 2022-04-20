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



const Publicacoes = require("../models/Publicacao.js");

const findAllPublicacoesService = async () => {
  const publicacoes = await Publicacoes.find();
  return publicacoes;
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
