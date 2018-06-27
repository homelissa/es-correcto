const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  planId: {type: String, required: true},
  notificationStartDate: {type: Date, required: true},
  notificationInterval: {type: Number, required: true}
});

module.exports.model = mongoose.model("Notification", NotificationSchema);
module.exports.schema = NotificationSchema;
