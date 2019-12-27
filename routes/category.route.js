var express=require('express');
var categoryRouter=express.Router();
var categotyController=require('../controller/category.controller');
categoryRouter.post('/add_category',categotyController.add_category);
categoryRouter.get('/list_category',categotyController.category_list);
categoryRouter.get('/remove_category/:category',categotyController.remove_category);
categoryRouter.post('/update_category',categotyController.update_category);
module.exports=categoryRouter;