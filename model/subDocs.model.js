var mongoose=require('mongoose');
var moment=require('moment');
/*Animated Text  Schema*/
var animatedtext=new mongoose.Schema({
    text_name:{type:String},
    text_delay:{type:Number}
});
/*Skills percent  Schema*/
var skillsPercent=new mongoose.Schema({
    skill:{type:String},
    percent:{type:Number}
});

/*Service Set  Schema*/
var serviceSet=new mongoose.Schema({
    service_icon:{type:String},
    service_name:{type:String},
    about_service:{type:String}
});

/*Education Set */
var educationSet=new mongoose.Schema({
    year_between:{type:String},
    institute_name:{type:String},
    about_education:{type:String}
});
/*Experience Set */
var experinceSet=new mongoose.Schema({
    year_between:{type:String},
    company_name:{type:String},
    about_experience:{type:String}
});
/*Work Image Slide Set */
var workImage=new mongoose.Schema({
    image_url:{type:String},
});

/*Home Schema */
var home_data=new mongoose.Schema({
    welcome_title:{type:String},
    animated_text:[animatedtext],
    cv_url:{type:String},
    background_image:{type:String}
});

/*About Schema */
var about_data=new mongoose.Schema({
    about_title:{type:String},
    about_intro:{type:String},
    working_area:[{type:String}],
    about_details:{type:String},
    skills_percent:[skillsPercent]
});

/*Service Schema */
var service_data=new mongoose.Schema({
    service_title:{type:String},
    service_intro:{type:String},
    service_set:[serviceSet]
});

/*Education and experience Schema */
var education_experience_data=new mongoose.Schema({
    education_service_title:{type:String},
    education_service_intro:{type:String},
    education_set:[educationSet],
    experience_set:[experinceSet]
});

/* Work Schema/Portfolio Schema */

var portfolio_data=new mongoose.Schema({
    portfolio_data_title:{type:String},
    portfolio_data_intro:{type:String},
    bg_image:{type:String},
    project_name:{type:String},
    project_url:{type:String},
    slide_image:[workImage]
});
/*Social Icons */
var social_icons=new mongoose.Schema({
    facebook:{type:String},
    linkedin:{type:String},
    twitter:{type:String},
    youtube:{type:String}
});

module.exports={
    home_data:home_data,
    about_data:about_data,
    service_data:service_data,
    education_experience_data:education_experience_data,
    portfolio_data:portfolio_data,
    social_icons:social_icons
}