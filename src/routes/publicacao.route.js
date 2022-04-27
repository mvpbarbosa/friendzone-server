const route = require("express").Router();
const controllerPublicacoes = require("../controllers/publicacao.controller.js");
const controllerFavorites = require("../controllers/favorites.controller.js");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const {
  validId,
  validObjectBody,
  validObjectBodyFavorite,
} = require("../middlewares/publicacao.middleware.js");

route.use("/api-docs", swaggerUi.serve);

route.get("/api-docs", swaggerUi.setup(swaggerDocument));

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

route.get("/all-favorites", controllerFavorites.findAllFavoritesController);

route.post(
  "/create-favorites",
  controllerFavorites.createManyItemsFavoritesController
);

route.delete(
  "/delete-favorites",
  controllerFavorites.deleteAllItemsFavoritesController
);

module.exports = route;
