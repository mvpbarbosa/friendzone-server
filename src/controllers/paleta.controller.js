const paletasService = require('../services/paletas.service.js')

const findAllPaletasController = (req, res) => {
    const paletas = paletasService.findAllPaletasService()
    res.send(paletas)
}
