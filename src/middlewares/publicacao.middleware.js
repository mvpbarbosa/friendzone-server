const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Id inválido!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const publicacao = req.body;

  if (
    !publicacao ||
    !publicacao.foto ||
    !publicacao.nome ||
    !publicacao.dataHora ||
    !publicacao.texto
  ) {
    return res
      .status(400)
      .send({ message: "Envie todos os campos da publicação" });
  }
  next();
};

const validObjectBodyFavorite = (req, res, next) => {
  const favorite = req.body;

  favorite.forEach((item) => {
    if (!item || item.publicacaoId) {
      return res
        .status(400)
        .send({ message: "Envie todos os campos da publicação" });
    }
  });
  next();
};

module.exports = {
  validId,
  validObjectBody,
  validObjectBodyFavorite,
};
