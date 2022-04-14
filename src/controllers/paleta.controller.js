const paletasService = require("../services/paletas.service.js");

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();
  res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPaleta = paletasService.findByIdPaletaService(parametroId);
  res.send(escolhaPaleta);
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
};
