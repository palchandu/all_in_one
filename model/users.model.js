var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
    fullname:{ type:String,required:true},
    email:{ type:String,required:true},
    mobile:{ type:String,required:true},
    dob:{ type:String},
    address:{ type:String},
    password:{ type:String}
});

module.exports=mongoose.model('user',UserSchema);