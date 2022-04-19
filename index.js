// Exportando dependências
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/publicacao.route.js");

// Constantes
const port = 3000;
const app = express();

//Configurando nossa aplicação para trabalhar com CORS
app.use(express.json());
app.use(cors());
app.use("/publicacoes", routes);

// Fazendo o servidor rodar em um localhost
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
