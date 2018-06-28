"use strict";

var Product = require('../models/product.js');
var User = require('../models/user.js');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


exports.getProducts = function(req, res, next) {
  const query = Product.find({});

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

function productContainsUsers(product, userId) {
  let found = false;
  product.users.forEach(user => {
    console.log(String(user._id));
    if (String(user._id) == userId) {
      found = true;
    }
  });
  return found;
}


exports.getUserProducts = function(req, res, next) {

  const userId1 = req.params.userId;
  const query = Product.find({});
  // const user = User.model.findById(userId, (err, user)=> {
  //     console.log("This should be a user")
  //     console.log(user._id)
  // });
  query.exec(function(err, products){

    const matchedProducts = products.filter((product) =>{
      // if(product.users[0]._id == userId1){
      //   return product;
      // }

      if (productContainsUsers(product, userId1) ){

        return product;
      }

    });



    console.log(matchedProducts);
    res.send(matchedProducts);
  });





  // const products = Product.find({'users': {'_id': userId1}}, function(err, doc) {
// const products = Product.find({ 'users' : {_id: userId1}}, function(err, doc) {
//     console.log("helloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//
//     console.log("----------------------------------------------");
//     console.log(doc);
//   //   doc.forEach(subdoc => {
//   //     subdoc.users = null;
//   //   });
//   //   res.send(doc);
//   });

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
