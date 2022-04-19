const publicacoesService = require("../services/publicacao.service.js");

const findAllPublicacoesController = (req, res) => {
  const publicacoes = publicacoesService.findAllPublicacoesService();
  res.send(publicacoes);
};

const findByIdPublicacaoController = (req, res) => {
  const parametroId = Number(req.params.id);
  if (!parametroId) {
    return res.status(400).send({ message: "ID inválido" });
  }
  const escolhaPublicacao =
    publicacoesService.findByIdPublicacaoService(parametroId);

  if (!escolhaPublicacao) {
    return res.status(404).send({ message: "Publicação não encontrada!" });
  }
  res.send(escolhaPublicacao);
};

const createPublicacaoController = (req, res) => {
  const publicacao = req.body;
  if (
    !publicacao ||
    !publicacao.nome ||
    !publicacao.foto ||
    !publicacao.texto
  ) {
    return res.status(400).send({
      mensagem:
        "Você naõ preencheu todos os dados para adicionar uma nova paleta ao cardápio!",
    });
  }
  const newPublicacao = publicacoesService.createPublicacaoService(publicacao);
  res.send(newPublicacao);
};

const updatePublicacaoController = (req, res) => {
  const idParam = Number(req.params.id);
  const publicacaoEdit = req.body;
  if (!idParam) {
    return res.status(404).send({ message: "Publicação não encontrada!" });
  }

  if (
    !publicacaoEdit ||
    !publicacaoEdit.nome ||
    !publicacaoEdit.texto ||
    !publicacaoEdit.foto
  ) {
    return res.status(400).send({
      message: "Você não preencheu todos os dados para editar a publicação!",
    });
  }

  const updatedPublicacao = publicacoesService.updatePublicacaoService(
    idParam,
    publicacaoEdit
  );
  res.send(updatedPublicacao);
};

const deletePublicacaoController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(404).send({ message: "Paleta não encontrada!" });
  }
  publicacoesService.deletePublicacaoService(idParam);
  res.send({ message: "Publicacao deletada com sucesso!" });
};

module.exports = {
  findAllPublicacoesController,
  findByIdPublicacaoController,
  createPublicacaoController,
  updatePublicacaoController,
  deletePublicacaoController,
};
