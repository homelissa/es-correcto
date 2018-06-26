const mongoose = require('mongoose'),
  User = require("./user"),
  Plan = require("./plan"),
  Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name:{type: String},
  plans:[ {type: mongoose.Schema.Types.ObjectId, ref: "Plan"} ],
  users: [ {type: mongoose.Schema.Types.ObjectId, ref: "User"}]
});

module.exports = mongoose.model("Product", ProductSchema);
