var express=require('express');
var pdfRouter=express.Router();
var pdfController=require('../controller/pdf_generator');
/*get invoice */
pdfRouter.get('/invoice',pdfController.generate_invoice);
pdfRouter.post('/generate_pdf',pdfController.generate_pdf_from_url);
module.exports=pdfRouter;