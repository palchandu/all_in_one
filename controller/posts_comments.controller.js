var async=require('async');
const { body,sanitizeBody,validationResult } = require('express-validator');
var PostComment=require('../model/posts_comments.model');
var post_comment_controller={};
var ObjectId = require('mongodb').ObjectID;
post_comment_controller.post_blog=(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var title=req.body.title;
    var titleSlug=title.split(' ').join('_');
    var postData=new PostComment({
        title:title,
        title_slug:titleSlug,
        post_content:req.body.post_content,
        posted_by:req.body.uid,
        meta_data:{"created_by":req.body.uid,"created":Date.now()}
    });
    PostComment.find({"title_slug":titleSlug}).count().exec().then((response)=>{
        if(response==0){
            postData.save().then((result)=>{
                res.status(200).json({status:200,message:"Post created successfully",data:result});
            }).catch((error)=>{
                res.status(400).json({status:400,message:error});
            })
        }else{
            res.status(200).json({status:200,message:"Please change the title"});
        }
    }).catch((error)=>{
        res.status(400).json({status:400,message:error});
    })
}
post_comment_controller.add_comment=(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        var comment=req.body.comment_content;
        var uid=req.body.uid;
        var post_id=req.body.post_id;
        var condition={"meta_data.deleted":"N","_id":post_id};
        var updt_data={"comment_content":comment,"author":uid,"meta_data.created_by":uid,"meta_data.created":Date.now()};
        PostComment.findOneAndUpdate(condition,{$push:{"comments":updt_data}}).exec().then((resp)=>{
            if(resp==null){
                res.status(200).json({status:200,message:"Something wrong",data:resp});
            }else{
                res.status(200).json({status:200,message:"You have commented successfully",data:resp});
            }
            
        }).catch((error)=>{
            res.status(400).json({status:400,message:error});
        })
        //res.json(req.body);
    }catch(ex){
        res.status(400).json({status:400,message:ex});
    }
}

post_comment_controller.allPosts=(req,res)=>{
    var condition={"meta_data.deleted":"N"};
    PostComment.find(condition,{comments:0}).sort({ "meta_data.created" : -1}).exec().then((reponse)=>{
        res.status(200).json({success:true,message:"Post Details.",data:reponse});
        //res.json(reponse)
    }).catch((error)=>{
        res.status(400).json({message:error});
    })
}

post_comment_controller.fetchSinglePost=(req,res)=>{
    var title=req.params.title;
    var titleSlug=title.split(' ').join('_');
    var condition={"meta_data.deleted":"N","title_slug":titleSlug};
    async.waterfall([
            function(callback){
                PostComment.findOne(condition,{"_id":1}).exec().then((resp)=>{
                    if(resp!=null){
                        callback('',resp);
                    }else{
                        callback('Post Not Found','.');
                    }
                }).catch((error)=>{
                    callback(error,'');
                })
                
            },
            function(arg,callback){
                if(arg!=null && arg!=undefined){
                   // console.log('------',arg);
                    var post_cond={"_id":arg._id,"comments":{$elemMatch:{"meta_data.deleted":"N"}}};
                    console.log(post_cond);
                    PostComment.findOne(post_cond).exec().then((reponse)=>{
                        var sortedComment=reponse.comments.sort( function ( a, b ) { return b.meta_data.created - a.meta_data.created; } );
                        reponse.comments=sortedComment;
                         if(reponse!=null){
                            // console.log('00000000',reponse)
                             //res.status(200).json({success:true,message:"Post Details.",data:reponse});
                             callback('',reponse);
                         }else{
                             //res.status(200).json({success:false,message:"No post found."});
                             callback('','No post found');
                         }
                     }).catch((error)=>{
                         //res.status(200).json({success:false,message:"No post found.",data:error});
                        // res.status(200).json({message:error});
                       // console.log('ppppppppp',error)
                       console.log(error)
                        callback(error,'Something wrong2');
                     })
                }else{
                    callback('Something Wrong1','');
                }
                
            }
        ],
        (error,response)=>{
            if(error){
                //console.log('oooooooooo',error);
                res.status(200).json({success:true,message:response,data:error});
            }else{
                res.status(200).json({success:true,message:"Post Details.",data:response});
            }
        })
}

post_comment_controller.update_post=(req,res)=>{
    var post_id=req.body.post_id;
    var title=req.body.title;
    var titleSlug=title.split(' ').join('_');
    var post_content=req.body.post_content;
    condition={"meta_data.deleted":"N","_id":post_id};
    updtDoc={
        title:title,
        title_slug:titleSlug,
        post_content:post_content,
        "meta_data.updated_by":req.body.uid,
        "meta_data.updated":Date.now(),
    };
    PostComment.update(condition,{$set:updtDoc}).exec().then((resp)=>{
        res.status(200).json({success:true,message:"Post Details.",data:resp});
    }).catch((err)=>{
        res.status(200).json({success:false,message:"No post found.",data:err});
    })
}

post_comment_controller.delete_post=(req,res)=>{
    var post_id=req.body.post_id;
    condition={"meta_data.deleted":"N","_id":post_id};
    updtDoc={
        "meta_data.updated_by":req.body.uid,
        "meta_data.updated":Date.now(),
        "meta_data.deleted":"Y"
    };
    PostComment.update(condition,{$set:updtDoc}).exec().then((resp)=>{
        res.status(200).json({success:true,message:"Post Details.",data:resp});
    }).catch((err)=>{
        res.status(200).json({success:false,message:"No post found.",data:err});
    })
}

post_comment_controller.update_comment=(req,res)=>{
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var comment=req.body.comment_content;
    var uid=req.body.uid;
    var post_id=req.body.post_id;
    var comment_id=req.body.comment_id;
    var condition={"meta_data.deleted":"N","_id":post_id,"comments._id":comment_id};
    var updt_data={"comments.$.comment_content":comment,"comments.$.meta_data.updated_by":uid,"comments.$.meta_data.updated":Date.now()};
    PostComment.findOneAndUpdate(condition,{$set:updt_data}).exec().then((resp)=>{
        res.status(200).json({status:200,message:"You have updated comment successfully",data:resp});
    }).catch((error)=>{
        res.status(400).json({status:400,message:error});
    })
}

post_comment_controller.delete_comment=(req,res)=>{

    var uid=req.body.uid;
    var post_id=req.body.post_id;
    var comment_id=req.body.comment_id;
    var condition={"meta_data.deleted":"N","_id":post_id,"comments._id":comment_id};
    var updt_data={"comments.$.meta_data.deleted":"Y","comments.$.meta_data.updated_by":uid,"comments.$.meta_data.updated":Date.now()};
    PostComment.findOneAndUpdate(condition,{$set:updt_data}).exec().then((resp)=>{
        res.status(200).json({status:200,message:"You have deleted comment successfully",data:resp});
    }).catch((error)=>{
        res.status(400).json({status:400,message:error});
    })
}



module.exports=post_comment_controller;