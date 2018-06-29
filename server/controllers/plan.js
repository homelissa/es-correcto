var jwtDecode = require('jwt-decode');

let PlanObj = require('../models/plan.js');
const Plan = PlanObj.model;
let User = require('../models/user.js');

exports.getPlans = function(req, res, next) {
  const query = Plan.find({});
  query.exec(function(err,plans){
    res.send(plans);
  });
};


exports.getPlan = function(req,res,next) {
  const currentPlan = Plan.findOne({id: req.params._id}, function(err,doc){
    if(!doc) {
      return res.status(422).send({error: 'This plan does not exist'});
    } else{
      res.send(doc);
    }
  });
};





exports.addPlan = function(req,res,next) {
  let token = req.headers.authorization;
  const cost = req.body.cost;
  const paymentFrequency = req.body.paymentFrequency;
  const contractLength = req.body.contractLength;
  const enrollmentDate = req.body.enrollmentDate;
  const userId = jwtDecode(JSON.stringify(token))._id;

  if(!cost){
    return res.status(422).send({ error: 'You must enter a cost.'});
  }

  if (!paymentFrequency) {
    return res.status(422).send({ error: 'You must enter a payment frequency.'});
  }

  // Return error if no password provided
  if (!contractLength) {
    return res.status(422).send({ error: 'You must enter a contract length.' });
  }

  let doc = new Plan({
    cost: cost,
    paymentFrequency: paymentFrequency,
    contractLength: contractLength,
    enrollmentDate: enrollmentDate,
    userId: userId,
  });

  doc.save(function(err,doc) {
    if (err) { return next(err); }
    res.send(doc);
  });

};



exports.editPlan = function(req,res,next) {
  // console.log("hits edit plan");
  // let result = Plan.findById(req.params.planId);
  // let updated = req.body;
  // console.log(updated);
  // // result.update(function(err,updated) {
  // //   if(err) { return next(err);}
  // //   res.send(result);
  // // });
  // result.update(updated)
  // .then(res.send(result));

};



exports.deletePlan = function(req,res,next) {
  Plan.remove({_id: req.params.planId});
  res.status(200).json({

  });
};
