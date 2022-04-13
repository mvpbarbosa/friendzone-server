// Exportando dependências
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/paleta.route.js");

// Constantes
const port = 3000;
const app = express();

//Configurando nossa aplicação para trabalhar com CORS
app.use(express.json());
app.use(cors());
app.use("/paletas", routes);

//Definir dados para usar na aplicação
const paletas = [
  {
    id: 1,
    sabor: "Açaí com Leite Condensado",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In adipisci aspernatur dolore, numquam veniam suscipit.",
    foto: "./assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Banana com Nutella",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In adipisci aspernatur dolore, numquam veniam suscipit.",
    foto: "./assets/images/banana-com-nutella.png",
    preco: 10.0,
  },
  {
    id: 3,
    sabor: "Chocolate Belga",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In adipisci aspernatur dolore, numquam veniam suscipit.",
    foto: "./assets/images/chocolate-belga.png",
    preco: 7.0,
  },
  {
    id: 4,
    sabor: "Limão",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In adipisci aspernatur dolore, numquam veniam suscipit.",
    foto: "./assets/images/limao.png",
    preco: 14.0,
  },
];

// Rota para printar Hello Blue...
app.get("/", function (req, res) {
  res.send("Hello Blue Módulo 3 Fullstack");
});

// Rota de Get all
app.get("/paletas/todas-paletas", (req, res) => {
  res.send(paletas);
});

// Rota de Get by id
app.get("/paletas/paleta/:id", (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPaleta = paletas.find((paleta) => paleta.id === parametroId);
  res.send(escolhaPaleta);
});

// Fazendo o servidor rodar em um localhost
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
