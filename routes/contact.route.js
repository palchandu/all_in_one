var express=require('express');
var router=express.Router();
var conatcController=require('../controller/contact.controller');
router.post('/add_contacts',conatcController.add_contacts);
router.post('/add_enquiry',conatcController.add_enquiry);
router.get('/get_contacts_details',conatcController.getContactInfo);
router.get('/get_enquiry',conatcController.getEnquiry);
module.exports=router;
