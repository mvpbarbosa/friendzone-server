const express = require('express');
const port = 3000;
const app = express();

//Configurando nossa aplicação para trabalhar com JSON's
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello Blue Módulo 3 Fullstack');
});

app.get('/paletas/find-paletas', (req, res) =>{
  res.send(paletas)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});


