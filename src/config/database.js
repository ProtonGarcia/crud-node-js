const mongoose = require("mongoose");

const connect = async () => {
  try {
    console.log("Connectando a la base....");
    await mongoose.connect("mongodb://127.0.0.1/test");

    console.log("Connexion OK");
  } catch (error) {
    console.error("No se conecto a la base", error);
  }
};

module.exports = {
  connect,
};
