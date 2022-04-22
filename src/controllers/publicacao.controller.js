const publicacoesService = require("../services/publicacao.service.js");
const mongoose = require("mongoose");

const findAllPublicacoesController = async (req, res) => {
  const publicacoes = await publicacoesService.findAllPublicacoesService();

  if (publicacoes.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhuma publicação cadastrada!" });
  }

  res.send(publicacoes);
};

const findByIdPublicacaoController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido" });
  }

  const escolhaPublicacao = await publicacoesService.findByIdPublicacaoService(
    idParam
  );

  if (!escolhaPublicacao) {
    return res.status(404).send({ message: "Publicação não encontrada!" });
  }
  res.send(escolhaPublicacao);
};

const createPublicacaoController = async (req, res) => {
  const publicacao = req.body;

  if (
    !publicacao ||
    !publicacao.foto ||
    !publicacao.nome ||
    !publicacao.dataHora ||
    !publicacao.texto
  ) {
    return res.status(400).send({
      message:
        "Você naõ preencheu todos os dados para criar uma nova publicação!",
    });
  }

  const newPublicacao = await publicacoesService.createPublicacaoService(
    publicacao
  );
  res.status(201).send(newPublicacao);
};

const updatePublicacaoController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido" });
  }

  const publicacaoEdit = req.body;

  if (
    !publicacaoEdit ||
    !publicacaoEdit.nome ||
    !publicacaoEdit.dataHora ||
    !publicacaoEdit.texto ||
    !publicacaoEdit.foto
  ) {
    return res.status(400).send({
      message: "Você não preencheu todos os dados para editar a publicação!",
    });
  }

  const updatedPublicacao = await publicacoesService.updatePublicacaoService(
    idParam,
    publicacaoEdit
  );
  res.send(updatedPublicacao);
};

const deletePublicacaoController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido" });
  }

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
