"use strict";

var Product = require('../models/product.js');
var UserObj = require('../models/user.js');
var User = UserObj.model;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var jwtDecode = require("jwt-decode");

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
  const user = User.findById(userId);

    user.exec(function(err, doc) {
     res.send(doc.products);
   });
};

exports.subscribeToProduct = function(req, res, next){
  console.log("subscribeToProduct");
  // const userId1 = req.params.userId;
  let token = req.headers.authorization;
  const userId = jwtDecode(JSON.stringify(token))._id;
  const user = User.findById(userId);
};


let ProdObj = Product.model;

exports.addUserProducts = function(req,res,next) {
  let token = req.headers.authorization;
  const name = req.body.name;
  const img_url = req.body.img_url;
  const userId = jwtDecode(JSON.stringify(token))._id;

  if(!name){
    return res.status(422).send({ error: 'You must enter a product name.'});
  }

  if(!userId){
    return res.status(422).send({ error: 'Plz sign in before you add a product'});
  }

  if(!img_url){
    img_url = "https://res.cloudinary.com/archhere/image/upload/v1530317711/subscribe_thing.png";
  }

  let doc = new ProdObj ({
    name: name,
    img_url: img_url,
    userId: userId
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
