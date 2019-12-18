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
    if (!token){ 
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    else{
        jwt.verify(token,config.secret,function(err,decoded){
            if (err){ 
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }else{
                next();
            }
    
        })
    }
    
}

exports.emailExists=emailExists;
exports.validRequest=validRequest;