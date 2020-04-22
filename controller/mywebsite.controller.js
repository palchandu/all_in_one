var MySchema=require('../model/commonModel');
var myWebsiteObject={};

/*Social Icons */
myWebsiteObject.manage_social_icons=(req,res)=>{
   var facebook=req.body.facebook;
   var linkedin=req.body.linkedin;
   var twitter=req.body.twitter;
   var youtube=req.body.youtube;
   var obj={
            'facebook':facebook,
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

/*Add Work Page Title */
myWebsiteObject.manage_work_title=function(req,res){
    var portfolio_data_title=req.body.portfolio_data_title;
    var obj={
             'portfolio_data_title':portfolio_data_title,
         }
    MySchema.websiteInfo.findOne({}).select('work').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'work':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'work.portfolio_data_title':portfolio_data_title}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Work Page Intro */
myWebsiteObject.manage_work_intro=function(req,res){
    var portfolio_data_intro=req.body.portfolio_data_intro;
    var obj={
             'portfolio_data_intro':portfolio_data_intro,
         }
    MySchema.websiteInfo.findOne({}).select('work').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'work':obj,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'work.portfolio_data_intro':portfolio_data_intro}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Add Work Set */
myWebsiteObject.manage_work_addworks=function(req,res){
    var works_set=req.body.works_set;
    var work_id=req.body.work_id;
    if(work_id==''){
      var obj={
               'works_set':works_set,
           }
      MySchema.websiteInfo.findOne({}).select('work').then((response)=>{
          if(response==null){
              var data=new MySchema.websiteInfo({
                  'work':obj,
              })
              data.save().then((resp)=>{
                  res.json({status:200,success:true,message:'Successfully Added',data:resp})
              }).catch((error)=>{
                  res.json({status:200,success:false,message:error,data:''})
              })
          }else{
              MySchema.websiteInfo.update({},{$push:{'work.works_set':works_set}}).then((updtRes)=>{
                  res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
              }).catch((upftError)=>{
                  res.json({status:200,success:false,message:upftError,data:''})
              })
          }
      }).catch((error)=>{
          res.json({status:200,success:false,message:error,data:''})
      })
    }else{
      var condition={"work.works_set._id":work_id};
      var updt_data={"work.works_set.$.bg_image":works_set.bg_image,
                "work.works_set.$.project_name":works_set.project_name,
                "work.works_set.$.project_url":works_set.project_url,
                "work.works_set.$.slide_image":works_set.slide_image
              }
      MySchema.websiteInfo.findOneAndUpdate(condition,{$set:updt_data}).exec().then((resp)=>{
            res.json({status:200,success:true,message:'Successfully Updated',data:resp})
        }).catch((error)=>{
            res.json({status:200,success:false,message:error,data:''})
        })
    }


}

/*Add Website Logo */
myWebsiteObject.manage_website_logo=function(req,res){
    var website_logo=req.body.website_logo;
    MySchema.websiteInfo.findOne({}).select('website_logo').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'website_logo':website_log,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'website_logo':website_logo}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}
/*Add Website footer_data */
myWebsiteObject.manage_footer_data=function(req,res){
    var footer_data=req.body.footer_data;

    MySchema.websiteInfo.findOne({}).select('footer_data').then((response)=>{
        if(response==null){
            var data=new MySchema.websiteInfo({
                'footer_data':footer_data,
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            MySchema.websiteInfo.update({},{$set:{'footer_data':footer_data}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })

}

/*Get Website Info*/
myWebsiteObject.getAllInfo=function(req,res){
    MySchema.websiteInfo.findOne({}).then((response)=>{
        if(response!=null){
            res.json({status:200,success:true,message:'Data Found.',data:response})
        }else{
            res.json({status:200,success:false,message:'No Data Found.',data:''})
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })
}
/*Delete Work */
myWebsiteObject.deleteWork=function(req,res){
  var wid=req.body.wid;
  console.log(wid);
  MySchema.websiteInfo.updateOne({},{$pull:{'work.works_set':{'_id':{$eq:wid}}}}).then((response)=>{
      if(response!=null){
          res.json({status:200,success:true,message:'Work Deleted Successfully',data:''})
      }else{
          res.json({status:200,success:false,message:'Someting Wrong.',data:''})
      }
  }).catch((error)=>{
      res.json({status:200,success:false,message:error,data:''})
  })
}
module.exports=myWebsiteObject;
