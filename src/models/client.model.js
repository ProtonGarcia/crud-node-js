const { Schema, model } = require("mongoose");

const client = new Schema({
  name: String,
  surname: String,
  phone: String,
});

module.exports = model("ClientModel", client);
