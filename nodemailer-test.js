var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs'),
    Handlebars = require('handlebars'),
    path = require('path'),
    mongoose = require('mongoose'),
    UserObj = require('./server/models/user'),
    User = UserObj.model,
    PlanObj = require('./server/models/plan'),
    Plan = PlanObj.model;



// Open template file

var source = fs.readFileSync(path.join(__dirname, 'email-template.hbs'), 'utf8');

// Create email generator

var template = Handlebars.compile(source);
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "essscorrecto@gmail.com",
    pass: "Party123!"
  }
});



var mailOptions = {
  from: "essscorrecto@gmail.com",
  to: "countermatter7@gmail.com",
  subject: "sending email using node.js",
  text: 'wait one minute',
  html: template({username: 'torvalds17'})
};



transporter.sendMail(mailOptions);

//
//
// const allUsers = User.find({});
//
// allUsers.exec(function(err, users) {
//
//   console.log("_______");
//
//   console.log(users);
//
//   // sendUserEmails(users[0]);
//
// });
//
//
//
// // console.log(user);
//
// // allUsers.forEach(user => {
//
// //   sendUserEmails(user);
//
// // })
//
//
//
// var dummyUser = {
//
//     "_id": {
//
//         "$oid": "5b341dc55b664fa29dcda445"
//
//     },
//
//     "profile": {
//
//         "firstName": "Captain Jack",
//
//         "lastName": "Sparrow"
//
//     },
//
//     "role": "Member",
//
//     "email": "escorrecto@gmail.com",
//
//     "password": "$2a$05$m3/OdPBL0Ak1NusPIiK8TeAV.X2hAmXvQemW/byP0KoCj7BR/QLV2",
//
//     "notifications": [],
//
//     "createdAt": {
//
//         "$date": "2018-06-27T23:29:09.588Z"
//
//     },
//
//     "updatedAt": {
//
//         "$date": "2018-06-27T23:29:09.588Z"
//
//     },
//
//     "__v": 0
//
// }
//
//
//
// // var result = sendUserEmails(dummyUser);
//
// // console.log(result);
//
//
//
// function sendUserEmails(user) {
//
//   var plans = Plan.find({userId: user._id});
//
//   var plansWithProductName = plans.map(plan => {
//
//     productName = Product.findById(plan.productId)
//
//     var newPlan = plan;
//
//     newPlan.name = productName;
//
//     return newPlan;
//
//   })
//
//
//
//   plans = plansWithProductName.filter(plan => plan.length > 0);
//
//   plans = plans.reduce((acc, currentValue) => acc.concat(currentValue), []);
//
//   console.log(plans);
//
//
//
//   let sum = {};
//
//   let costs = plans.map(plan => {
//
//     return productReport(plan);
//
//   });
//
//   costs.forEach(planObj=>{
//
//     if(sum[planObj.name] === undefined){
//
//       sum[planObj.name] = planObj.amountPaidThisYear;
//
//     }else{
//
//       sum[planObj.name] += planObj.amountPaidThisYear;
//
//     }
//
//   });
//
//
//
//   let monthlyCost = 0;
//
//   plans.forEach((plan)=>{
//
//     monthlyCost += plan.cost;
//
//   });
//
//
//
//   let sumArray = [];
//
//   Object.keys(sum).forEach((productName) => {
//
//     sumArray.push({ key: productName, value: sum[productName] });
//
//   });
//
//
//
//
//
//   const reportRows = plansWithProductName.map(plan => {
//
//     return productReport(plan).render();
//
//   })
//
//
//
//   var dummyReportRows = {
//
//     product: 'Spotify',
//
//     cost: 100
//
//   }
//
//
//
//   var mailOptions = {
//
//     from: "essscorrecto@gmail.com",
//
//     to: "countermatter7@gmail.com",
//
//     subject: "User Monthly Email",
//
//     text: 'wait one minute',
//
//     html: template({reportRows: reportRows, sumArray: sumArray})
//
//   };
//
//
//
//   transporter.sendMail(mailOptions);
//
//   return({
//
//     reportRows: reportRows,
//
//     sumArray: sumArray
//
//   })
//
// }
//
//
//
//
//
// function productReport(plan){
//
//   let date = new Date(plan.enrollmentDate);
//
//   let d = 3;
//
//   let formatedDate = this.format(date);
//
//   let temp = new Date();
//
//   let yearcalculator = new Date();
//
//   let monthStarted = date.getMonth() + 1;
//
//   let yearStarted = date.getFullYear();
//
//   let y = temp.getFullYear();
//
//   let m = temp.getMonth()+ 1;
//
//   if (temp.getDate() > d){
//
//     m += 1;
//
//   }
//
//   let M = m+1;
//
//
//
//   let currentDate = '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
//
//   let nextDate = '' + y + '-' + (M<=9 ? '0' + M : M) + '-' + (d <= 9 ? '0' + d : d);
//
//   let monthsPaid = -1;
//
//   if (date.getDate() < 3) {
//
//     monthsPaid += 1;
//
//   }
//
//   while (yearcalculator.getTime() > date.getTime()){
//
//     yearcalculator = new Date(yearcalculator.getFullYear(),yearcalculator.getMonth() - 1, yearcalculator.getDate());
//
//
//
//     monthsPaid += 1;
//
//   }
//
//
//
//    let amountPaidThisYear = Math.max(0,monthsPaid%12 * plan.cost);
//
//
//
//
//
//    let resultObj = {};
//
//    resultObj.name = plan.name;
//
//    resultObj.cost = plan.cost;
//
//    resultObj.formatedDate = plan.formatedDate;
//
//    resultObj.currentDate = plan.currentDate;
//
//    resultObj.nextDate = nextDate;
//
//    resultObj.amountPaidThisYear = amountPaidThisYear;
//
//
//
//    return(
//
//        resultObj
//
//    );
//
//
//
//
//
// }
//
//
//
//
//
// var transporter = nodemailer.createTransport({
//
//   service: 'gmail',
//
//   auth: {
//
//     user: "essscorrecto@gmail.com",
//
//     pass: "Party123!"
//
//   }
//
// });
//
//
//
// var mailOptions = {
//
//   from: "essscorrecto@gmail.com",
//
//   to: "countermatter7@gmail.com",
//
//   subject: "sending email using node.js",
//
//   text: 'wait one minute',
//
//   html: template({username: 'torvalds17'})
//
// };
//
//
//
// transporter.sendMail(mailOptions);
//
//
//
// // var username = 'torvalds17';
//
// //
//
// // var sendMonthlyEmail = transporter.templateSender({
//
// //   subject: 'User Monthly Email',
//
// //   text: `Hello ${username}`,
//
// //   html: `<h2>Hello, ${username}. This is HTML here</h2>`
//
// // });
//
// //
//
// // console.log(typeof sendMonthlyEmail);
//
// //
//
// // sendMonthlyEmail({
//
// //   to: 'countermatter7@gmail.com'
//
// // }, {
//
// //   username: 'torvalds17'
//
// // }, function(err, info) {
//
// //   if (err) {
//
// //     console.log('Error');
//
// //   } else {
//
// //     console.log('Montly email sent!');
//
// //   }
//
// // });
//
// //
//
// //
//
// // setInterval(()=>transporter.sendMail(mailOptions, function(error, info){
//
// //   if(error){
//
// //     console.log(error);
//
// //   }else{
//
// //     console.log(`email sent: ${info.response}`);
//
// //   }
//
// // }), 60000);
