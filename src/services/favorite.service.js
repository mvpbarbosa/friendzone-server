const Favorites = require("../models/Favorites.js");

const findAllFavoritesService = async () => {
  const allFavorites = await Favorites.find();
  return allFavorites;
};

const createManyItemsFavoritesService = async (newFavorite) => {
  const createdFavorite = await Favorites.insertMany(newFavorite);
  return createdFavorite;
};

const deleteAllItemsFavoritesService = async () => {
  return await Favorites.deleteMany();
};

module.exports = {
  findAllFavoritesService,
  createManyItemsFavoritesService,
  deleteAllItemsFavoritesService,
};
