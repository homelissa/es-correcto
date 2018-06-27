const UserObj = require("./models/user.js");
const User = UserObj.model;
const PlanObj = require("./models/plan.js");
const Plan = PlanObj.model;
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

var user1 = new User({
          email: 'esscorrecto@gmail.com',
          profile: {
            firstName: "Anon",
            lastName: "Nymous"
          },
          password: "password",
          role: "Admin",
          notifications: []
});

var currentDate = new Date();



var plan1 = new Plan({
          cost: 10.99,
          paymentFrequency: 'every 1 month',
          contractLength: 12,
          enrollmentDate: currentDate
});

var product = new Product({
          name: 'Spotify',
          plans: [plan1],
          users: [user1]
});

console.log(product);
product.save();
