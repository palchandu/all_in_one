var categoryModel=require('../model/category.model');
var moment=require('moment');
var categoryController={};

categoryController.add_category=(req,res)=>{
    try{
        var category=req.body.name;
        var slug=category.replace(" ","_").toLowerCase();
        var categ=new categoryModel({
            name:category,
            slug:slug,
            meta_data:{"created_by":1}
        })
        categoryModel.find({"slug":slug}).count().exec().then((response)=>{
            if(response==0){
                categ.save().then((result)=>{
                    res.status(200).json({status:200,message:"Category created successfully",data:result});
                }).catch((error)=>{
                    res.status(400).json({status:400,message:error});
                })
            }else{
                res.status(200).json({status:200,message:"Category already exists"});
            }
        }).catch((error)=>{
            res.status(400).json({status:400,message:error});
        })
    }catch(ex){
        res.status(400).json({status:400,message:ex});
    }
}

categoryController.category_list=(req,res)=>{
    try{
        var condition={"meta_data.deleted":"N"};
  
        if(typeof req.query.category !== 'undefined' && req.query.category){
            var catVal=req.query.category;
            condition.slug=catVal.replace(" ","_").toLowerCase();
        }
        categoryModel.find({$query: condition,$orderby:{"meta_data.created":-1}}).exec().then((categs)=>{
            res.status(200).json({status:200,message:"Category lists",data:categs});
        }).catch((categs_error)=>{
            res.status(400).json({status:400,message:categs_error});
        })
    }catch(ex){
        res.status(400).json({status:400,message:ex});
    }
}

categoryController.remove_category=(req,res)=>{
    try{
        var condition={"meta_data.deleted":"N"};
  
        if(typeof req.params.category !== 'undefined' && req.params.category){
            var catVal=req.params.category;
            condition.slug=catVal.replace(" ","_").toLowerCase();
            categoryModel.update(condition,{$set:{"meta_data.deleted":"Y"}}).exec().then((categs)=>{
                res.status(200).json({status:200,message:"Category deleted"});
            }).catch((categs_error)=>{
                res.status(400).json({status:400,message:categs_error});
            })
        }else{
            res.status(200).json({status:200,message:"Please Select category to delete"});
        }
        
    }catch(ex){
        res.status(400).json({status:400,message:ex});
    }
}

categoryController.update_category=(req,res)=>{
    try{
        var category=req.body.name;
        var category_id=req.body._id;
        var slug=category.replace(" ","_").toLowerCase();
        var condition={"meta_data.deleted":"N","_id":ObjectID(category_id)};
        console.log(condition);
        categoryModel.update(condition,{$set:{"name":category,"slug":slug,"meta_data.updated":moment.now()}}).exec().then((response)=>{
            res.status(200).json({status:200,message:"Category updated"});
        }).catch((error)=>{
            res.status(400).json({status:400,message:categs_error})
        })
    }catch(ex){
        res.status(400).json({status:400,message:ex});
    }
}

module.exports=categoryController;