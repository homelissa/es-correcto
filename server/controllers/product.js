"use strict";

var Product = require('../models/product.js');
var ProdObj = Product.model;
var UserObj = require('../models/user.js');
var User = UserObj.model;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var jwtDecode = require("jwt-decode");
let Plan = require('./plan.js');

exports.getProducts = function(req, res, next) {
  const query = Product.find({});
  // console.log("header",req.headers.authorization);
  // console.log("header",req.headers);

  query.exec(function(err, products){
    // products.forEach(product => {
    //   product.users = null;
    // }); TODO commented out for diagnosing, when deploying comment back in
    // for security
    res.send(products);
  });
};

exports.getProduct = function(req, res, next) {
  const product = Product.findOne({name: req.params.name}, function(err, doc){
    if (!doc) {
      return res.status(422).send({ error: 'This route does not exist'});
    } else{
      doc.users = null;
      res.send(doc);
    }
  });
};

exports.getUserProducts = function(req, res, next) {
  console.log("getUserProducts");
  // const userId1 = req.params.userId;
  let token = req.headers.authorization;
  const userId = jwtDecode(JSON.stringify(token))._id;
  let objuserId = ObjectId(userId);
  const product = Product.find({userId: userId},function(err,doc){
    if(!product) {
      return res.status(422).send({ error: 'This product does not exist'});
    } else{
      res.send(doc);
    }
  });

};

// exports.subscribeToProduct = function(req, res, next){
//   console.log("subscribeToProduct");
//   // const userId1 = req.params.userId;
//   let token = req.headers.authorization;
//   const userId = jwtDecode(JSON.stringify(token))._id;
//   const user = User.findById(userId);
// };




exports.addUserProducts = function(req,res,next) {
  console.log("in add user products");
  let token = req.headers.authorization;
  const name = req.body.name;
  let img_url = req.body.img_url || "https://res.cloudinary.com/archhere/image/upload/v1530317711/subscribe_thing.png"
  // const userId = jwtDecode(JSON.stringify(token))._id;
  // const newuser = jwtDecode(JSON.stringify(token));

  if(!name){
    return res.status(422).send({ error: 'You must enter a product name.'});
  }

  // if(!userId){
  //   return res.status(422).send({ error: 'Plz sign in before you add a product'});
  // }


  let doc = new Product ({
    name: name,
    img_url: img_url,
    // userId: [userId],
    // users: [newuser],

  });
  doc.save(function(err,doc){
    if(err) { return next(err); }
    res.send(doc);
  });

};


// exports.userSubscribedToProduct= function(req, res, next){
//
//   const user = User.model.findById(req.user.id);
//   const product = Product.findOne({name: req.params.name});
//   var doc = product.users.insert(user);
//   // console.log(doc);
//   res.send(doc);
//
// };



// exports.removeUser
//
// exports.removeNotification
//
// exports.editNotification
//
