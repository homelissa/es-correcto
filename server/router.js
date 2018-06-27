const AuthenticationController = require('./controllers/authentication'),
  ProductController = require("./controllers/product"),
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
        productRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);
  app.use('/api', apiRoutes);
  apiRoutes.use('/products', productRoutes);
  productRoutes.get('/', ProductController.getProducts);
  productRoutes.get("/:name", ProductController.getProduct);
  productRoutes.get("/user/:userId", ProductController.getUserProducts);
  productRoutes.post("/:name/add", ProductController.addUser);

  apiRoutes.get('/users', UtilController.getUsers);
};


// http://localhost:3000/api/auth/login
// http://localhost:3000/api/auth/register
