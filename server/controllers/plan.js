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
  let x = Plan.findById(req.params.planId);
  // console.log("params",x);
  const currentPlan = Plan.findById(req.params.planId, function(err,doc){
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
  const productId = req.body.productId;

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
    productId: productId,
  });

  doc.save(function(err,doc) {
    if (err) { return next(err); }
    res.send(doc);
  });

};



exports.editPlan = function(req,res,next) {
  let updatedInfo={};
  updatedInfo._id = req.params.planId;

  if (req.body.cost) updatedInfo.cost = req.body.cost;
  if (req.body.paymentFrequency) updatedInfo.paymentFrequency = req.body.paymentFrequency;
  if (req.body.enrollmentDate) updatedInfo.enrollmentDate = req.body.enrollmentDate;
  if (req.body.contractLength) updatedInfo.contractLength = req.body.contractLength;
  Plan.findOneAndUpdate(
    {_id: req.params.planId},
    { $set: updatedInfo },
    { new: true }
  ).then(newPlan => res.json(newPlan)).catch(err =>
    res.status(404).json({ plans:
            "You cannot edit this plan" })
  );
};

exports.deletePlan = function(req,res,next) {
  console.log("hit delete")
  
  Plan.findByIdAndRemove(req.params.planId, (err, plan) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Plan successfully deleted",
      id: plan._id
    };
    return res.status(200).send(response);
  });  
};
