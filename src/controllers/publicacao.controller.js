const publicacoesService = require("../services/publicacao.service.js");
const mongoose = require("mongoose");

const findAllPublicacoesController = async (req, res) => {
  const publicacoes = await publicacoesService.findAllPublicacoesService();
  if (publicacoes.length === 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhuma publicação cadastrada!" });
  }
  res.send(publicacoes);
};

const findByIdPublicacaoController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPublicacao = await publicacoesService.findByIdPublicacaoService(
    idParam
  );
  if (!chosenPublicacao) {
    return res.status(404).send({ message: "Publicação não encontrada!" });
  }
  res.status(201).send(chosenPublicacao);
};

const createPublicacaoController = async (req, res) => {
  const publicacao = req.body;
  const newPublicacao = await publicacoesService.createPublicacaoService(
    publicacao
  );
  res.status(201).send(newPublicacao);
};

const updatePublicacaoController = async (req, res) => {
  const idParam = req.params.id;
  const editPublicacao = req.body;
  const updatedPublicacao = await publicacoesService.updatePublicacaoService(
    idParam,
    editPublicacao
  );
  res.send(updatedPublicacao);
};

const deletePublicacaoController = async (req, res) => {
  const idParam = req.params.id;
  await publicacoesService.deletePublicacaoService(idParam);
  res.send({ message: "Publicacao deletada com sucesso!" });
};

module.exports = {
  findAllPublicacoesController,
  findByIdPublicacaoController,
  createPublicacaoController,
  updatePublicacaoController,
  deletePublicacaoController,
};
