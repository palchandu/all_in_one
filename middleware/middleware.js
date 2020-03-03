var jwt=require('jsonwebtoken');
var User=require('../model/users.model');
var fileConfig=require('../config/config');

var emailExists=function(req,res,next){
    var email=req.body.email;
    User.findOne({"email":email}).exec().then((users)=>{
        console.log(users);
        if(users!=null){
            res.json({message:"Email already exists"});
        }else{
            next();
        }
    }).catch((error)=>{
        console.log(error)
    })
}

var validRequest=function(req,res,next){
    var token = req.headers['x-access-token'];
    console.log('token',token)
    if (!token){ 
        return res.status(200).send({ auth: false, message: 'No token provided.' });
    }
    else{
        jwt.verify(token,fileConfig.jwt_secret.secret,function(err,decoded){
            if (err){ 
                return res.status(200).send({ auth: false, message: 'Failed to authenticate token.' });
            }else{
                next();
            }
    
        })
    }
    
}

exports.emailExists=emailExists;
exports.validRequest=validRequest;