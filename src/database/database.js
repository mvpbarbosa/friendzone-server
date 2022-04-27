const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@api-friendzone.tsya0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDb CONNECT"))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`)
    );
};

module.exports = connectToDatabase;
