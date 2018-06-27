const express = require("express"),
  app = express(),
  logger = require("morgan"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  config = require("./config/main"),
  router = require('./router');


//connect db to server
const db = require("./config/main").mongouri;
mongoose.connect(db).then(()=>console.log('Connected to mongo'));
// const server2 = app.listen(27017);
  //start server
const server = app.listen(config.port);
console.log("your server is running on " + config.port + "." );

//set up basic middleware for server requests
app.use(logger('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Acces-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

router(app);
