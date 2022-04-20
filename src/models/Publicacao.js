const mongoose = require("mongoose");

const PublicacaoSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  dataHora: {
    type: String,
    require: true,
  },
  texto: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
});

const Publicacao = mongoose.model("publicacoes", PublicacaoSchema);

module.exports = Publicacao;
