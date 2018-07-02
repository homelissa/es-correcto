const UserObj = require("./models/user.js");
const User = UserObj.model;
const PlanObj = require("./models/plan.js");
const Plan = PlanObj.model;
const NotificationObj = require('./models/notification.js');
const Notification = NotificationObj.model;
const Product = require("./models/product.js");
const mongoose = require('mongoose');
const { port, database, secret} = require("./config/main.js");

mongoose.connect(database);

User.remove({}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Users cleared');
  }
});

Product.remove({}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Products cleared');
  }
});

Plan.remove({}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Plans cleared');
  }
});


var currentDate = new Date();



var plan1 = new Plan({
          cost: 10.99,
          paymentFrequency: 'every 1 month',
          contractLength: 12,
          enrollmentDate: currentDate
});
plan1.save();
var notification1 = new Notification({
          planId: plan1._id,
          // planId: 1,
          notificationStartDate: currentDate,
          notificationInterval: 12
});
notification1.save();

var user1 = new User({
  email: 'esscorrecto@gmail.com',
  profile: {
    firstName: "Anon",
    lastName: "Nymous"
  },
  password: "password",
  role: "Admin",
  notifications: [notification1]
});
var user2 = new User({
  email: 'ATOTALLYDIFFERENTEMAIL@gmail.com',
  profile: {
    firstName: "BAnon",
    lastName: "Bymous"
  },
  password: "password",
  role: "Admin",
  notifications: []
});

var product = new Product({
          name: 'Spotify',
          plans: [plan1],
          users: [user1]
});
product.save();
