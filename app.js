var express=require('express');
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
var fileConfig=require('./config/config');
moment=require('moment-timezone');
moment().tz("Asia/Kolkata").format();
var app=express();
/*Swagger */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
/*Mongoose db connection*/
var url="mongodb://"+fileConfig.db_secret.user+":"+fileConfig.db_secret.pass+"@localhost/learning?authSource=admin";
mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true})
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
/*Middleware */
var middleware=require('./middleware/middleware');
/*routes require */
//var home=require('./routes/home');
var users=require('./routes/users.route');
var category=require('./routes/category.route');
/*use the module */
app.use(bodyparser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyparser.json({limit: '50mb',extended: true}));
/*routes use */
//app.use('/',home);
app.use('/v2/user',users);
app.use('/v2/category',middleware.validRequest,category);
var port=8900;
app.listen(port,()=>{
    console.log('Application running on port '+port);
})

module.exports=app;
