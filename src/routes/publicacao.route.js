const route = require("express").Router();
const controllerPublicacoes = require("../controllers/publicacao.controller");

route.get(
  "/todas-publicacoes",
  controllerPublicacoes.findAllPublicacoesController
);
route.get(
  "/publicacao/:id",
  controllerPublicacoes.findByIdPublicacaoController
);
route.post("/create", controllerPublicacoes.createPublicacaoController);
route.put("/update/:id", controllerPublicacoes.updatePublicacaoController);
route.delete("/delete/:id", controllerPublicacoes.deletePublicacaoController);

module.exports = route;
