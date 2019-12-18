var nodemailer = require('nodemailer');
var mailerObject={};
mailerObject.sendMail=(to,subject,category)=>{
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sochsoch.developer@gmail.com',
      pass: 'Soch@123'
    }
  });

  var mailOptions = {
    from: 'chandu2013pal@gmail.com',
    to: to,
    subject: subject,
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

module.exports=mailerObject;

  