var mongoose=require('mongoose');
var commonModel=require('../model/common.model');
var category=new mongoose.Schema({
    name:{type:String,require:true},
    slug:{type:String,require:true},
    meta_data:commonModel.meta_data
});

module.exports=mongoose.model('category',category);