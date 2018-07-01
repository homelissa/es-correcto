const mongoose = require('mongoose'),
  User = require("./user"),
  Plan = require("./plan"),
  Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name:{type: String},
  img_url: { type: String },
  // userId: [{ type: String }],
  plans:[ Plan.schema ],
  // users: [ User.schema ],
  // plans:[ {type: Plan} ],
  // users: [ {type: User}]
});

module.exports = mongoose.model("Product", ProductSchema);
module.exports = mongoose.model("Product", ProductSchema);
