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
module.exports=router;