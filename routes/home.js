var express=require('express');
var routesHome=express.Router();
/*Swagger */
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// routesHome.get('/',function(req,res){
//     res.send("Welcome Guest");
// });

// Swagger set up
const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Time to document that Express API you built",
        version: "1.0.0",
        description:
          "A test project to understand how easy it is to document and Express API",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "Swagger",
          url: "https://swagger.io",
          email: "Info@SmartBear.com"
        }
      },
      servers: [
        {
          url: "http://localhost:8900/"
        }
      ]
    },
    apis: [
      
    ]
  };
  const specs = swaggerJsdoc(options);
  routesHome.use("/docs", swaggerUi.serve);
  routesHome.get(
    "/docs",
    swaggerUi.setup(specs, {
      explorer: true
    })
  );

module.exports=routesHome;