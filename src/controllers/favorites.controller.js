const res = require("express/lib/response");
const favoriteService = require("../services/favorite.service.js");

const findAllFavoritesController = async (req, res) => {
  const allFavorites = await favoriteService.findAllFavoritesService();
  if (!allFavorites) {
    return res
      .status(404)
      .send({ message: "Não existe nenhuma publicação favorita!" });
  }
  res.send(allFavorites);
};

const createManyItemsFavoritesController = async (req, res) => {
  const favorites = req.body;
  const newFavorite = await favoriteService.createManyItemsFavoritesService(
    favorites
  );
  res.status(201).send(newFavorite);
};

const deleteAllItemsFavoritesController = async (req, res) => {
    await favoriteService.deleteAllItemsFavoritesService()
    res.send({message: "Publicação removida dos favoritos!"})
};

module.exports = {
  findAllFavoritesController,
  createManyItemsFavoritesController,
  deleteAllItemsFavoritesController,
};
