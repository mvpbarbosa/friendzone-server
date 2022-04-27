const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb Atlas CONNECT"))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`)
    );
};

module.exports = connectToDatabase;
