var MySchema=require('../model/commonModel');
var myWebsiteObject={};

/*Social Icons */
myWebsiteObject.manage_social_icons=(req,res)=>{
   var facebook=req.body.facebook;
   var linkedin=req.body.linkedin;
   var twitter=req.body.twitter;
   var youtube=req.body.youtube;
   var obj={
            'facbook':facebook,
            'linkedin':linkedin,
            'twitter':twitter,
            'youtube':youtube
        }
    MySchema.websiteInfo.findOne({}).select('social_icons').then((response)=>{
        console.log(response);
        if(response==null){
            var data=new MySchema.websiteInfo({
                social_icons:obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{social_icons:obj}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })
}

/*************************Home Data Add *************************************/
/*Add Home Page Title */
myWebsiteObject.manage_home_title=function(req,res){
    var title=req.body.title;
    var obj={
             'welcome_title':title,
         }
    MySchema.websiteInfo.findOne({}).select('home').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                home:obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{home:obj}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}
/*Add Home Page Animated text */
myWebsiteObject.manage_home_animated_text=function(req,res){
    var animated_text=req.body.text_name;
    var text_delay=req.body.text_delay;
    var obj={
             'text_name':animated_text,
             'text_delay':text_delay
         }
    MySchema.websiteInfo.findOne({}).select('home').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'home.animated_text':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$push:{'home.animated_text':obj}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Home Page CV URL */
myWebsiteObject.manage_home_cv=function(req,res){
    var cv_url=req.body.cv_url;
    var obj={
             'cv_url':cv_url,
         }
    MySchema.websiteInfo.findOne({}).select('home').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'home':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'home.cv_url':cv_url}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Home Background Image */
myWebsiteObject.manage_home_bg=function(req,res){
    var background_image=req.body.background_image;
    var obj={
             'background_image':background_image,
         }
    MySchema.websiteInfo.findOne({}).select('home').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'home':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'home.background_image':background_image}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add About Page Intro */
myWebsiteObject.manage_about_title=function(req,res){
    var about_intro=req.body.about_intro;
    var obj={
             'about_intro':about_intro,
         }
    MySchema.websiteInfo.findOne({}).select('about').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'about':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'about.about_intro':about_intro}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add About Page Title */
myWebsiteObject.manage_about_intro=function(req,res){
    var about_title=req.body.about_title;
    var obj={
             'about_title':about_title,
         }
    MySchema.websiteInfo.findOne({}).select('about').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'about':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'about.about_title':about_intro}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}


/*Add About Page Intro */
myWebsiteObject.manage_about_intro=function(req,res){
    var about_intro=req.body.about_intro;
    var obj={
             'about_intro':about_intro,
         }
    MySchema.websiteInfo.findOne({}).select('about').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'about':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'about.about_intro':about_intro}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add About Page Working Area */
myWebsiteObject.manage_about_working_area=function(req,res){
    var working_area=req.body.working_area;
    var obj={
             'working_area':working_area,
         }
    MySchema.websiteInfo.findOne({}).select('about').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'about':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$push:{'about.working_area':working_area}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add About Page Details */
myWebsiteObject.manage_about_details=function(req,res){
    var about_details=req.body.about_details;
    var obj={
             'about_details':about_details,
         }
    MySchema.websiteInfo.findOne({}).select('about').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'about':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'about.about_details':about_details}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add About Page Skill Add */
myWebsiteObject.manage_about_skills=function(req,res){
    var skills_percent=req.body.skills_percent;
    var obj={
             'skills_percent':skills_percent,
         }
    MySchema.websiteInfo.findOne({}).select('about').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'about':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$push:{'about.skills_percent':skills_percent}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}


module.exports=myWebsiteObject;