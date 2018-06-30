const AuthenticationController = require('./controllers/authentication'),
  ProductController = require("./controllers/product"),
  PlanController = require("./controllers/plan"),
  express = require('express'),
  passportService = require('./config/passport'),
  passport = require('passport'),
  UtilController = require('./controllers/util');
const requireAuth = passport.authenticate('jwt', { session: false});
const requireLogin = passport.authenticate('local', { session: false});

const REQUIRE_ADMIN = 'Admin',
  REQUIRE_MEMBER = 'Member';

module.exports = function(app) {

  const apiRoutes = express.Router(),
        authRoutes = express.Router(),
        productRoutes = express.Router(),
        planRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);
  app.use('/api', apiRoutes);
  apiRoutes.use('/products', productRoutes);

  productRoutes.get('/', ProductController.getProducts);
  productRoutes.get("/user", ProductController.getUserProducts);
  productRoutes.get("/:name", ProductController.getProduct);
<<<<<<< HEAD
  productRoutes.post("/:name/add", ProductController.addUser);
=======
  productRoutes.post("/", ProductController.addUserProducts);

  // productRoutes.post("/:name/add", ProductController.addUser);
>>>>>>> 2be50f661a58ce8a16ba80da68bcff39e80c79ee

  // app.get('api/products/user', PlanController.addPlan);

  app.post('/api/plans', PlanController.addPlan);
  // app.post('/api/products/:name/users/:userId/plans', PlanController.addPlan);
  app.get('/api/plans', PlanController.getPlans);
  app.get('/api/plans/:planId', PlanController.getPlan);
  app.patch('/api/plans/:planId', PlanController.editPlan);
  app.delete('/api/plans/:planId', PlanController.deletePlan);

  apiRoutes.get('/users', UtilController.getUsers);
};


// http://localhost:3000/api/auth/login
// http://localhost:3000/api/auth/register
// http://localhost:3000/api/products/Spotify
// http://localhost:3000/api/products
