var pdf_template=require('../templates/pdf_templates');
var pdf = require('html-pdf');
var fs = require('fs');
var constant=require('../config/constant');
var utility=require('../utility/utility');
var pdf_controller={};

pdf_controller.generate_invoice=(req,res)=>{

    var htmtVal=pdf_template.invoice_html();
    var file_name=utility.unixTimeStamp().toString()+utility.unixTimeStamp().toString();
    var filename=constant.BASE_URL+'/resource/pdf/'+file_name+'.pdf';
    pdf.create(htmtVal, {format: 'Letter', orientation: 'landscape'}).toStream(function(err,stream){
        console.log(stream);
        stream.pipe(fs.createWriteStream(filename));
        console.log(res);
        res.json({status:200,message:"Data Found.",pdf:filename});
    })
    
}
pdf_controller.generate_pdf_from_url= (req,res)=>{
    var url=req.body.url;
    pdf_template.get_html_from_url(url).then((htmtVal)=>{
        console.log('111111',htmtVal);
        var file_name=utility.unixTimeStamp().toString()+utility.unixTimeStamp().toString();
        var filename=constant.BASE_URL+'/resource/pdf/'+file_name+'.pdf';
        pdf.create(htmtVal.toString().trim(), {format: 'Letter', orientation: 'landscape'}).toStream(function(err,stream){
            console.log('--------------=============================================---------------')
            console.log('222222',err);
            stream.pipe(fs.createWriteStream(filename));
            console.log('33333',res);
            res.json({status:200,message:"Data Found.",pdf:filename});
        })
    }).catch((err)=>{
        console.log(err)
    })
    
    
}

module.exports=pdf_controller;