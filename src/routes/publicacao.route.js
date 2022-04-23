const route = require("express").Router();
const controllerPublicacoes = require("../controllers/publicacao.controller.js");
const {
  validId,
  validObjectBody,
} = require("../middlewares/publicacao.middleware.js");

route.get(
  "/all-publicacoes",
  controllerPublicacoes.findAllPublicacoesController
);

route.get(
  "/one-publicacao/:id",
  validId,
  controllerPublicacoes.findByIdPublicacaoController
);

route.post(
  "/create-publicacao",
  validObjectBody,
  controllerPublicacoes.createPublicacaoController
);

route.put(
  "/update-publicacao/:id",
  validId,
  validObjectBody,
  controllerPublicacoes.updatePublicacaoController
);

route.delete(
  "/delete-publicacao/:id",
  validId,
  controllerPublicacoes.deletePublicacaoController
);

module.exports = route;
