var async=require('async');
var htmlToText = require('html-to-text');
const { body,sanitizeBody,validationResult } = require('express-validator');
var PostComment=require('../model/posts_comments.model');
var moment=require('moment');
var post_comment_controller={};
var ObjectId = require('mongodb').ObjectID;
var categoryController=require('../controller/category.controller');
post_comment_controller.post_blog=(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
    }
    var title=req.body.title;
    var category=req.body.category;
    var titleSlug=title.split(' ').join('_');
    if(req.body.featured_image!=null){
        var featured_image=req.body.featured_image;
    }else{
        var featured_image='https://dummyimage.com/600x400/000/fff&text=GetWebSoftware';
    }
    var postData=new PostComment({
        title:title,
        title_slug:titleSlug,
        post_content:req.body.post_content,
        post_category:category,
        posted_by:req.body.uid,
        meta_data:{"created_by":req.body.uid},
        featured_image:featured_image
    });
    PostComment.find({"title_slug":titleSlug}).count().exec().then((response)=>{
        if(response==0){
            postData.save().then((result)=>{
                res.status(200).json({status:200,success:true,message:"Post created successfully",data:result});
            }).catch((error)=>{
                res.status(400).json({status:400,success:false,message:error});
            })
        }else{
            res.status(200).json({status:200,success:false,message:"Please change the title"});
        }
    }).catch((error)=>{
        res.status(400).json({status:400,success:false,message:error});
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

/*post_comment_controller.allPosts=(req,res)=>{
    var condition={"meta_data.deleted":"N"};
    PostComment.find(condition).sort({ "meta_data.created" : -1}).exec().then((reponse)=>{
        res.status(200).json({success:true,message:"Post Details.",data:reponse});
        //res.json(reponse)
    }).catch((error)=>{
        res.status(400).json({message:error});
    })
}
*/
post_comment_controller.allPosts=(req,res)=>{
    var condition={"meta_data.deleted":"N"};
    PostComment.find(condition).populate('post_category').populate('meta_data.created_by').sort({'meta_data.created': -1}).then((reponse)=>{
        var objectArray=[];
        for (let index = 0; index < reponse.length; index++) {
            var objectData={};
            var element = reponse[index];
            console.log(element)
            var createdDt=moment.unix(element.meta_data.created).format("DD-MM-YYYY")
            objectData._id=element._id;
            objectData.title=element.title;
            objectData.post_content=element.post_content;
            objectData.created_by=element.meta_data.created_by.fullname;
            objectData.created=createdDt;
            objectData.post_category=element.post_category;
            objectData.comments=element.comments;
            objectArray.push(objectData);

        }
        res.status(200).json({success:true,message:"Post Details.",data:objectArray});
        //res.json(reponse)
    }).catch((error)=>{
        console.log(error);
        res.status(200).json({success:false,message:error,data:''});
    })
}
post_comment_controller.fetchSinglePost=(req,res)=>{
    var title=req.params.title;
    var post_id=req.params.post_id;
    console.log('==0988',title);
    if(title!=undefined && title!=''){
    var titleSlug=title.split(' ').join('_');
    console.log('Slug',titleSlug);
    var condition={"meta_data.deleted":"N",$or: [ { "_id":post_id }, { "title_slug":titleSlug } ] };
    async.waterfall([
            function(callback){
                PostComment.findOne(condition,{"_id":1,"comments":1}).exec().then((resp)=>{
                    console.log('popopop',resp)
                    if(resp!=null){
                        callback('',resp);
                    }else{
                        console.log('========');
                        callback('',post_id);
                    }
                }).catch((error)=>{
                    callback(error,'');
                })

            },
            function(arg,callback){
                if(arg!=null && arg!=undefined){
                   //console.log('------',arg);
                   console.log('llllleee',arg.comments.length);
                   if(arg.comments.length>0){
                    var post_cond={"_id":arg._id,"comments":{$elemMatch:{"meta_data.deleted":"N"}}};
                   }else{
                    var post_cond={"_id":arg._id};
                   }

                    console.log(post_cond);
                    PostComment.findOne(post_cond).populate('post_category').populate('meta_data.created_by').exec().then((reponse)=>{
                        console.log('oiuyy',reponse.comments.length)
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
                res.status(200).json({success:false,message:response,data:error});
            }else{
                res.status(200).json({success:true,message:"Post Details.",data:response});
            }
        })
    }else{
        res.status(200).json({success:false,message:'Title is missing',data:''});
    }
}

post_comment_controller.update_post=(req,res)=>{
    var post_id=req.body.post_id;
    var title=req.body.title;
    var titleSlug=title.split(' ').join('_');
    var post_content=req.body.post_content;
    var category=req.body.category;
    condition={"meta_data.deleted":"N","_id":post_id};
    updtDoc={
        title:title,
        title_slug:titleSlug,
        post_content:post_content,
        post_category:category,
        "meta_data.updated_by":req.body.uid,
        "meta_data.updated":Date.now(),
    };
    PostComment.update(condition,{$set:updtDoc}).exec().then((resp)=>{
        res.status(200).json({success:true,message:"Post Updated Successfully.",data:resp});
    }).catch((err)=>{
        res.status(200).json({success:false,message:"No post found.",data:err});
    })
}

post_comment_controller.delete_post=(req,res)=>{
    var post_id=req.body.post_id;
    condition={"meta_data.deleted":"N","_id":post_id};
    updtDoc={
        "meta_data.updated_by":req.body.uid,
        "meta_data.updated":moment().unix(),
        "meta_data.deleted":"Y"
    };
    PostComment.update(condition,{$set:updtDoc}).exec().then((resp)=>{
        res.status(200).json({success:true,message:"Post Deleted.",data:resp});
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

post_comment_controller.allPostsListing=async (req,res)=>{
   var condition={"meta_data.deleted":"N"};
    if(req.query.search && req.query.search!=null){
      var key=req.query.search;
      var condition={"meta_data.deleted":"N","title": { $regex: '.*' + key + '.*' }};
    }
    if(req.query.category && req.query.category!=null){

      var key=await categoryController.category_id_byname(req.query.category);
      if(key!=null){
        var condition={"meta_data.deleted":"N","post_category":key };
      }else{
        var condition={"meta_data.deleted":"N"};
      }
      
    }

    PostComment.find(condition).populate('post_category').populate('meta_data.created_by').sort({'meta_data.created': -1}).then((reponse)=>{
        var objectArray=[];
        for (let index = 0; index < reponse.length; index++) {
            var objectData={};
            var element = reponse[index];
            var createdDt=moment.unix(element.meta_data.created).format("DD-MM-YYYY")
            var post_text=element.post_content;
            post_text=post_text.substring(0,300);
            var myCates=[];
            for(data in element.post_category){
              myCates.push(element.post_category[data].name);
            }

            var cats=myCates.join();
            objectData._id=element._id;
            objectData.title=element.title;
            objectData.short_text=post_text;
            objectData.created_by=element.meta_data.created_by.fullname;
            objectData.created_date=createdDt;
            objectData.categories=element.post_category;
            //objectData.categories='About';
            objectData.featured_image=element.featured_image;
            objectArray.push(objectData);
        }
        console.log(objectArray);
        res.status(200).json({success:true,message:"Post Details.",data:objectArray});
        //res.json(reponse)
    }).catch((error)=>{
        console.log(error);
        res.status(200).json({success:false,message:error,data:''});
    })
}

post_comment_controller.latestPosts=(req,res)=>{
    var condition={"meta_data.deleted":"N"};
    PostComment.find(condition).sort({'meta_data.created': -1}).limit(3).then((reponse)=>{
        var objectArray=[];
        for (let index = 0; index < reponse.length; index++) {
            var objectData={};
            var element = reponse[index];
            console.log(element)
            var createdDt=moment.unix(element.meta_data.created).format("DD-MM-YYYY")
            objectData._id=element._id;
            objectData.title=element.title;
            objectData.post_content=element.post_content;
            objectData.created_by=element.meta_data.created_by.fullname;
            objectData.created=createdDt;
            objectData.post_category=element.post_category;
            objectData.comments=element.comments;
            objectData.featured_image=element.featured_image;
            objectArray.push(objectData);

        }
        res.status(200).json({success:true,message:"Post Details.",data:objectArray});
        //res.json(reponse)
    }).catch((error)=>{
        console.log(error);
        res.status(200).json({success:false,message:error,data:''});
    })
}

module.exports=post_comment_controller;
