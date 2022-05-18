// Exportando dependências
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/publicacao.route.js");
const connectToDatabase = require("./src/database/database.js");

// Constantes
const port = process.env.PORT || 3005;
const app = express();

connectToDatabase();

//Configurando nossa aplicação para trabalhar com CORS
app.use(express.json());
app.use(cors());
app.use("/publicacoes", routes);

// Fazendo o servidor rodar em um localhost
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🚀`);
});
