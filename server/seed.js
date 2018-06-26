const User = require("./models/user.js");
const Plan = require("./models/plan.js");
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

// var user1 = User.create({
//           email: 'esscorrecto@gmail.com',
//           profile: {
//             firstName: "Anon",
//             lastName: "Nymous"
//           },
//           password: "password",
//           role: "Admin",
//           notifications: []
// });

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

user1.save();


var currentDate = new Date();

// var plan1 = Plan.create({
//           cost: 10.99,
//           paymentFrequency: 'every 1 month',
//           contractLength: 12,
//           enrollmentDate: currentDate
// });

var plan1 = new Plan({
          cost: 10.99,
          paymentFrequency: 'every 1 month',
          contractLength: 12,
          enrollmentDate: currentDate
});

plan1.save();


// // debugger
// Product.create({
//           name: 'Spotify',
//           plans: [ plan1 ],
//           users: [ user1 ]
// });

var product = new Product({
          name: 'Spotify',
          plans: [ plan1 ],
          users: [ user1 ]
});

product.save();
//
//

// var seeder = require("mongoose-seed");
//
// var currentDate = new Date();
//
// var data = [
//
//   {
//     "model": "plan",
//     "documents:" : [
//       {
//         name: "Premium",
//         plans:{
//           cost: 10.99,
//           paymentFrequency: 'monthly',
//           contractLength: 12,
//           enrollmentDate: currentDate
//         }
//       }
//
//     ]
//
//   },
//
//   {
//     'model': 'user',
//     'documents': [
//       {
//         email: 'esscorrecto@gmail.com',
//         profile: {
//           firstName: "Anon",
//           lastName: "Nymous"
//         },
//         password: "password",
//         role: "Admin",
//         notifications: []
//         //come back to this when we have a notification??
//       }
//     ]
//   },
// ];
//
// //
// // {
// //   "model": "product",
// //   'documents': [
// //     {
// //       name: "spotify",
// //       plans:{
// //         cost: 10.99,
// //         paymentFrequency: 'monthly',
// //         contractLength: 12,
// //         enrollmentDate: currentDate
// //       }
// //     }
// //   ]
// // }
//
// seeder.connect('mongodb://localhost/27017', function(){
//   seeder.populateModels(data);
// });
