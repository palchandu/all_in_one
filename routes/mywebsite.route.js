var express=require('express');
var router=express.Router();
var mywebsiteController=require('../controller/mywebsite.controller');
/*Social Icons */
router.post('/manage_social_icons',mywebsiteController.manage_social_icons);
/*********************Manage Home *************************************/
/*Home page title */
router.post('/manage_home_title',mywebsiteController.manage_home_title);
/*Home page animated text */
router.post('/manage_home_animated_text',mywebsiteController.manage_home_animated_text);
/*Home page CV URL */
router.post('/manage_home_cv',mywebsiteController.manage_home_cv);
/*Home page Background URL */
router.post('/manage_home_background',mywebsiteController.manage_home_bg);
/*About Page Intro */
router.post('/manage_about_intro',mywebsiteController.manage_about_intro);
/*About Page Title */
router.post('/manage_about_title',mywebsiteController.manage_about_title);
/*About Page Working Area */
router.post('/manage_about_working_area',mywebsiteController.manage_about_working_area);
/*About Page Working Area */
router.post('/manage_about_details',mywebsiteController.manage_about_details);
/*About Page Skills */
router.post('/manage_about_skills',mywebsiteController.manage_about_skills);
/*Service Page Title */
router.post('/manage_service_title',mywebsiteController.manage_service_title);
/*Service Page Intro */
router.post('/manage_service_intro',mywebsiteController.manage_service_intro);
/*Service Page Services */
router.post('/manage_service_services',mywebsiteController.manage_service_services);
/*Education_Experience Page Title */
router.post('/manage_education_experience_title',mywebsiteController.manage_education_experience_title);
/*Education_Experience Page Intro */
router.post('/manage_education_experience_intro',mywebsiteController.manage_education_experience_intro);
/*Educations */
router.post('/manage_educations',mywebsiteController.manage_educations);
/*Experience */
router.post('/manage_experiences',mywebsiteController.manage_experiences);
/*Work/Portfolio Title */
router.post('/manage_work_title',mywebsiteController.manage_work_title);
/*Work/Portfolio Intro */
router.post('/manage_work_intro',mywebsiteController.manage_work_intro);
/*Work/Portfolio Works */
router.post('/manage_work_addworks',mywebsiteController.manage_work_addworks);
/*Website Logo */
router.post('/manage_website_logo',mywebsiteController.manage_website_logo);
/*Footer */
router.post('/manage_footer_data',mywebsiteController.manage_footer_data);
/*Website All Info */
router.get('/get_all_info',mywebsiteController.getAllInfo);
/*Delete Work*/
router.post('/delete_work',mywebsiteController.deleteWork);
module.exports=router;
