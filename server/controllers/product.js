var Product = require('../models/product.js');
var User = require('../models/user.js');
exports.getProducts = function(req, res, next) {
  const query = Product.find({});
  query.exec(function(err, product){
    res.send(product);
  });
};

exports.getProduct = function(req, res, next) {
  const product = Product.findOne({name: req.params.name}, function(err, doc){
    console.log(doc);
    res.send(doc);
    // console.log(doc.users);
  });
};


// exports.getProduct = function(req, res, next) {
//   const product = Product.findOne({_id: req.params.id}, function(err, doc){
//     res.send(doc);
//   });
// };
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
exports.getUserProducts = function(req, res, next) {
  const userId = req.params.userId;
  const user = User.findById(userId);
  const product = Product.find({ users: { $elemMatch: {$eq:userId} } }, function(err, doc){
    res.send(doc);
  });
};
