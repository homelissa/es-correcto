var seeder = require("mongoose-seed");

var currentDate = new Date();

var data = [

  {
    "model": "plan",
    "documents:" : [
      {
        name: "Premium",
        plans:{
          cost: 10.99,
          paymentFrequency: 'monthly',
          contractLength: 12,
          enrollmentDate: currentDate
        }
      }

    ]

  },

  {
    'model': 'user',
    'documents': [
      {
        email: 'esscorrecto@gmail.com',
        profile: {
          firstName: "Anon",
          lastName: "Nymous"
        },
        password: "password",
        role: "Admin",
        notifications: []
        //come back to this when we have a notification??
      }
    ]
  },
];

//
// {
//   "model": "product",
//   'documents': [
//     {
//       name: "spotify",
//       plans:{
//         cost: 10.99,
//         paymentFrequency: 'monthly',
//         contractLength: 12,
//         enrollmentDate: currentDate
//       }
//     }
//   ]
// }

seeder.connect('mongodb://localhost/3000', function(){
  seeder.loadModels([
    'models/notification.js',
    'models/product.js',
    'models/user.js'
  ]);


});
