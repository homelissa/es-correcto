const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  planId: {type: Number, required: true},
  notificationStartDate: {type: Date, required: true},
  notificationInterval: {type: Date, required: true}
});

module.exports = mongoose.model("Notification", NotificationSchema);
