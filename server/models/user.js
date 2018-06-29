const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Notification = require("./notification"),
  bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  email:{
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  profile: {
    firstName: { type: String},
    lastName: { type: String}
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: [ 'Member', 'Admin'],
    default: 'Member'
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  notifications: [ Notification.schema ],
  products: [
    {
      name: { type: String},
      plans: [
        {
          planId: {type: String},
          cost: {type: String},
          paymentFrequency: {type: String},
          contractLength: {type: Number}
        }
      ]
    }
  ]
},
{
  timestamps: true
});

//Pre-save of user to database, hash password if password is modified or new
UserSchema.pre("save", function(next) {
  const user = this,
    SALT_FACTOR = 5;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(error, hash){
      if (error) return next(error);
      user.password = hash;
      next();
    });
  });
});

//Method to compare password for login
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
};
module.exports.schema = UserSchema;
module.exports.model = mongoose.model("User", UserSchema);
