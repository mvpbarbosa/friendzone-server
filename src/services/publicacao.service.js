const Publicacoes = require("../models/Publicacao.js");

const findAllPublicacoesService = async () => {
  const publicacoes = await Publicacoes.find();
  return publicacoes;
};

const findByIdPublicacaoService = async (parametroId) => {
  const publicacao = await Publicacoes.findById(parametroId);
  return publicacao;
};

const createPublicacaoService = async (newPublicacao) => {
  const publicacaoCreated = await Publicacoes.create(newPublicacao);
  return publicacaoCreated;
};

const updatePublicacaoService = async (id, publicacaoEdited) => {
  const publicacaoUpdate = await Publicacoes.findByIdAndUpdate(
    id,
    publicacaoEdited
  );
  return publicacaoUpdate;
};

const deletePublicacaoService = async (id) => {
  return await Publicacoes.findByIdAndDelete(id);
};

module.exports = {
  findAllPublicacoesService,
  findByIdPublicacaoService,
  createPublicacaoService,
  updatePublicacaoService,
  deletePublicacaoService,
};
