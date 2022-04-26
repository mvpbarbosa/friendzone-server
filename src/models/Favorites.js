const mongoose = require("mongoose");

const FavoritesSchema = new mongoose.Schema({
  publicacaoId: {
    type: String,
    require: true,
  }
});

const Favorites = mongoose.model("favorites", FavoritesSchema);

module.exports = Favorites;
