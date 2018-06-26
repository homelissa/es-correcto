var User = require("../models/user.js");
var Plan = require("../models/plan.js");

exports.getUsers = function(req, res, next){
  const query = User.find({});
  query.exec(function(err, user){
    res.send(user);
  });
};

// exports.getPlans
