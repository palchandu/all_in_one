var mongoose=require('mongoose');
var uuid=require('uuid');
var UserSchema=new mongoose.Schema({
    fullname:{ type:String,required:true},
    email:{ type:String,required:true},
    mobile:{ type:String,required:true},
    dob:{ type:String},
    address:{ type:String},
    password:{ type:String},
    api_key:{type:String,default:uuid.v4()}
});

module.exports=mongoose.model('user',UserSchema);