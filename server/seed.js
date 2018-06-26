const User = require("./models/user.js");
const Plan = require("./models/plan.js");
const mongoose = require('mongoose');
const { port, database, secret} = require("./config/main.js");

mongoose.connect(database);

User.create([{
          email: 'esscorrecto@gmail.com',
          profile: {
            firstName: "Anon",
            lastName: "Nymous"
          },
          password: "password",
          role: "Admin",
          notifications: []
}]);

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
