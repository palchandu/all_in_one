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
    var type  = req.headers['request-type'];
    if (!token && !type){
        console.log('no token',token)
        return res.status(200).send({ auth: false, message: 'No token provided.' });
    }
    else{
        if(type=='private'){
            jwt.verify(token,fileConfig.jwt_secret.secret,function(err,decoded){
                if (err){
                    console.log('Failed to authenticate token.',token)
                    return res.status(200).send({ auth: false, message: 'Failed to authenticate token.' });
                }else{
                    console.log('success')
                    next();
                }

            })
        }else if(type=='public'){
            User.find({"api_key":token}).exec().then((res)=>{
                console.log(res);
                if(res==null){
                    return res.status(200).send({ auth: false, message: 'Invalid API Key.',data:'' });

                }else{
                    console.log('Api Key Verified')
                    next();
                }
            }).catch((error)=>{
                return res.status(200).send({ auth: false, message: 'Something Wrong.',data:error });
            })
        }
    }

}

/*Image Filter*/
const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

/*Image Filter*/
const documentFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(pdf|PDF|doc|DOC|docx|DOCX|xls|XLS)$/)) {
        req.fileValidationError = 'Only pdf,doc,excel files are allowed!';
        return cb(new Error('Only document files are allowed!'), false);
    }
    cb(null, true);
};

exports.emailExists=emailExists;
exports.validRequest=validRequest;
exports.imageFilter = imageFilter;
exports.documentFilter=documentFilter;
