const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name:{type: String},
  plans:[{
    _id: {type: Number},
    cost: {type: Number},
    paymentFrequency: {type: Number},
    contractLength: {type: Number},
    enrollmentDate: {type: Date}
  }],
  users:[
    {
      _id: {type: Number},
      email:  {
        type: String,
        lowercase: true,
        unique: true,
        required: true
      },
      notifications: [
        {
          planId: {type: Number},
          notificationStartDate: {type: Date},
          notificationInterval: {type: Date}
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Product", ProductSchema);
