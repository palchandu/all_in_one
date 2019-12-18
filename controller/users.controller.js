/*
Standard Module use
 */
var bcrypt=require('bcryptjs');
 /*
 User Defined module use
  */
var User=require('../model/users.model');
var Mailer=require('../utility/mailer');
var SMS=require('../utility/sms');
const { check, validationResult,body } = require('express-validator');
var middleware=require('../middleware/middleware');
var utility=require('../utility/utility');
var userController={};

userController.register=(req,res)=>{
    //middleware.emailExists(req.body.email,req,res);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

  utility.hashCode(req.body.password).then((code)=>{
    var users=new User({
      fullname:req.body.fullname,
      email:req.body.email,
      mobile:req.body.mobile,
      dob:req.body.dob,
      address:req.body.address,
      password:code
    });
    users.save().then((result)=>{
      Mailer.sendMail(req.body.email,'testing','registration');
      SMS.sendSMS(parseInt(req.body.mobile),'This is test message');
      res.json(result);
    }).catch((error)=>{
      res.json(error);
    })

  }).catch((errors)=>{
    console.log(errors);
  })
 
    
}

userController.login=(req,res)=>{
  var email=req.body.email;
  var password=req.body.password;
  
}
module.exports=userController;