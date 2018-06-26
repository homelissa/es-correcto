const mongoose = require("mongoose"),
  Schema = mongoose.Schema;


const PlanSchema = new Schema({
    cost: {type: Number},
    paymentFrequency: {type: String},
    contractLength: {type: Number},
    enrollmentDate: {type: Date}
});

module.exports = mongoose.model('Plan', PlanSchema);
