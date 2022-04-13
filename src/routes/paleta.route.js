const route = require("express").Router();
const controllerPaletas = require("../controllers/paleta.controller");

route.get("/todas-paletas", controllerPaletas.findAllPaletas);
route.get("/paleta/:id", controllerPaletas.findByIdPaleta);

exports.module = route;
