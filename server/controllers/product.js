"use strict";

var Product = require('../models/product.js');
var User = require('../models/user.js');


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
    console.log(doc);
    if (!doc) {
      console.log("product doesnt exist");
      return res.status(422).send({ error: 'This route does not exist'});
    } else{
      doc.users = null;
      res.send(doc);
    }
  });
};


exports.getUserProducts = function(req, res, next) {
  const userId = req.params.userId;
  const user = User.model.findById(userId);
  const products = Product.find({'users._id': userId}, function(err, doc) {

    doc.forEach(subdoc => {
      subdoc.users = null;
    });
    res.send(doc);
  });

};

exports.addUser = function(req, res, next){
  // console.log(`req.body.user.id: ${req.body.user.id}`);
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
