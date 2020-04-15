var express=require('express');
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
var fileConfig=require('./config/config');
moment=require('moment-timezone');
moment().tz("Asia/Kolkata").format();
var cors = require('cors');
var app=express();
app.use(cors());
/**
 * Base Path
 */
global.__basedir = __dirname;

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
var postComment=require('./routes/posts_comment.route');
var pdf_val=require('./routes/pdf.routes');
var commonRouter=require('./routes/common');
var mywebsite=require('./routes/mywebsite.route');
/*use the module */
app.use(bodyparser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyparser.json({limit: '50mb',extended: true}));
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/images'));
/*routes use */
//app.use('/',home);
app.use('/v2/user',users);
app.use('/v2/category',middleware.validRequest,category);
app.use('/v2/posts_comments',middleware.validRequest,postComment);
app.use('/v2/pdf_creation',middleware.validRequest,pdf_val);
app.use('/v2/common',commonRouter);
app.use('/v2/mywebsite',mywebsite);
var port=8900;
app.listen(port,()=>{
    console.log('Application running on port '+port);
})

module.exports=app;
