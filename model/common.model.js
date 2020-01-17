var mongoose=require('mongoose');
var moment=require('moment');
var meta_data=new mongoose.Schema({
    created:{type:Number},
    created_by:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
    deleted:{type:String,default:'N'},
    updated:{type:Number},
    updated_by:{type:mongoose.Schema.Types.ObjectId,ref:'Users'}
});

module.exports={
meta_data:meta_data
}