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



exports.addUser = function(req, res, next){

  const user = User.model.findById(req.user.id);
  const product = Product.findOne({name: req.params.name});
  var doc = product.users.insert(user);
  // console.log(doc);
  res.send(doc);

};



// exports.removeUser
//
// exports.removeNotification
//
// exports.editNotification
//
