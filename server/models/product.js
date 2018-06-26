const mongoose = require('mongoose'),
  User = require("./user"),
  Plan = require("./plan"),
  Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name:{type: String},
  plans:[ Plan ],
  users: [ User ]
});

module.exports = mongoose.model("Product", ProductSchema);
