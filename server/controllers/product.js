var Product = require('../models/product.js');

exports.getProducts = function(req, res, next) {
  const query = Product.find({});
  query.exec(function(err, product){
    res.send(product);
  });
};

// exports.addNotification = function(req, res, next){
//
// }

// exports.addUser
//
// exports.removeUser
//
// exports.removeNotification
//
// exports.editNotification
//
// exports.getUserProducts
