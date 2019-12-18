var express=require('express');
var routesUser=express.Router();
var middleware=require('../middleware/middleware');
/**
 * User Model
 */
var User=require('../model/users.model');
const { check, validationResult,body } = require('express-validator');

var userController=require('../controller/users.controller');
routesUser.post('/register',middleware.emailExists,[
    body('email').isEmail().normalizeEmail(),
    body('mobile').isLength({ min: 10 }).isNumeric(),

],userController.register);
/*Login Routes */
routesUser.post('/login',userController.login);

module.exports=routesUser;