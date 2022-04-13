const express = require('express');
const port = 3000;
const app = express();

//Configurando nossa aplicação para trabalhar com JSON's
app.use(express.json());

//Definir dados para usar na aplicação
const paletas = [
    {
        id: 1,
        sabor: 'Açaí com Leite Condensado',
        descricao: 'Açaí com Leite Condensado',
        foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
        preco: 10.0
    },
    {
        id: 2,
        sabor: 'Banana com Nutella',
        descricao: 'Banana com Nutella',
        foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
        preco: 10.0
    },
    {
        id: 3,
        sabor: 'Chocolate Belga',
        descricao: 'Chocolate Belga',
        foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
        preco: 7.0
    },
];

app.get('/', function (req, res) {
  res.send('Hello Blue Módulo 3 Fullstack');
});

app.get('/paletas/find-paletas', (req, res) =>{
  res.send(paletas)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});


