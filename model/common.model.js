var mongoose=require('mongoose');
var moment=require('moment');
var meta_data=new mongoose.Schema({
    created:{type:Number,default:moment.now()},
    created_by:{type:Number,required:true},
    deleted:{type:String,default:'N'},
    updated:{type:Number},
    updated_by:{type:Number}
});

module.exports={
meta_data:meta_data
}