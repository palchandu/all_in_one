/*
Standard Module use
 */
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
 /*
 User Defined module use
  */
var User=require('../model/users.model');
var Mailer=require('../utility/mailer');
var SMS=require('../utility/sms');
const { check, validationResult,body } = require('express-validator');
var middleware=require('../middleware/middleware');
var utility=require('../utility/utility');
var fileConfig=require('../config/config');
var userController={};

userController.register=(req,res)=>{
    //middleware.emailExists(req.body.email,req,res);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

  utility.hashCodeNew(req.body.password).then((code)=>{
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
  try{
    var email=req.body.email;
    var password=req.body.password;
    utility.hashCodeNew(password).then((code)=>{
      User.find({email:email,password:code}).count().then((result)=>{
        console.log('----',result);
        if(result){
          var token=jwt.sign({email:email},fileConfig.jwt_secret.secret,{expiresIn:86400});
          res.json({"status":200,"success":true,"message":"User Verified Successfully","data":{"email":email,"token":token}});
        }else{
          res.json({"status":200,"success":false,"message":"Email or password are incorrect"});
        }
      }).catch((error)=>{
        res.json(error)
      })
  }).catch((errors)=>{
    console.log(errors);
  })
  }
  catch(ex){
    res.json(ex);
  }
}

module.exports=userController;