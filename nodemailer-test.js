var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "essscorrecto@gmail.com",
    pass: "Party123!"
  }
});

var mailOptions = {
  from: "essscorrecto@gmail.com",
  to: "countermatter7@gmail.com",
  subject: "sending email using node.js",
  text: 'wait one minute'
};

setInterval(()=>transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log(error);
  }else{
    console.log(`email sent: ${info.response}`);
  }
}), 60000);
