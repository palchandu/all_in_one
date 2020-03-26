var mongoose=require('mongoose');
var moment=require('moment');
var meta_data=new mongoose.Schema({
    created:{type:Number,default:moment().unix()},
    created_by:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    deleted:{type:String,default:'N'},
    updated:{type:Number},
    updated_by:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});

module.exports={
meta_data:meta_data
}