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

/*Add Service Page  title */
myWebsiteObject.manage_service_title=function(req,res){
    var service_title=req.body.service_title;
    var obj={
             'service_title':service_title,
         }
    MySchema.websiteInfo.findOne({}).select('service').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'service':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'service.service_title':service_title}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Service Page  Intro */
myWebsiteObject.manage_service_intro=function(req,res){
    var service_intro=req.body.service_intro;
    var obj={
             'service_intro':service_intro,
         }
    MySchema.websiteInfo.findOne({}).select('service').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'service':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'service.service_intro':service_intro}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Service Page Services Add */
myWebsiteObject.manage_service_services=function(req,res){
    var services=req.body.services;
    var obj={
             'service_set':services,
         }
    MySchema.websiteInfo.findOne({}).select('service').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'service':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$push:{'service.service_set':services}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Education and Experience Page  title */
myWebsiteObject.manage_education_experience_title=function(req,res){
    var education_service_title=req.body.education_service_title;
    var obj={
             'education_service_title':education_service_title,
         }
    MySchema.websiteInfo.findOne({}).select('education_experience').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'serveducation_experienceice':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'education_experience.education_service_title':education_service_title}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Education_Experience  Intro */
myWebsiteObject.manage_education_experience_intro=function(req,res){
    var education_service_intro=req.body.education_service_intro;
    var obj={
             'education_service_intro':education_service_intro,
         }
    MySchema.websiteInfo.findOne({}).select('education_experience').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'education_experience':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'education_experience.education_service_intro':education_service_intro}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Education_Expeince Educations */
myWebsiteObject.manage_educations=function(req,res){
    var educations=req.body.educations;
    var obj={
             'education_set':educations,
         }
    MySchema.websiteInfo.findOne({}).select('education_experience').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'education_experience':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'education_experience.education_set':educations}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Education_Expeince Experince */
myWebsiteObject.manage_experiences=function(req,res){
    var experiences=req.body.experiences;
    var obj={
             'experience_set':experiences,
         }
    MySchema.websiteInfo.findOne({}).select('education_experience').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'education_experience':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'education_experience.experience_set':experiences}}).then((updtRes)=>{
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