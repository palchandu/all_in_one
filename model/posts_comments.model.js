var mongoose =require('mongoose');
var Users=require('./users.model');
var MetaData=require('./common.model');
var commentSchema=new mongoose.Schema({
    comment_content:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
    meta_data:MetaData.meta_data
});

var postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    title_slug:{type:String,required:true},
    post_content:{type:String,required:true},
    post_category:[{type:mongoose.Schema.ObjectId,ref:'category'}],
    comments:[commentSchema],
    posted_by:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
    meta_data:MetaData.meta_data
});


module.exports=mongoose.model('blog_post',postSchema);