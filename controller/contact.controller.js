var contactModel=require('../model/contact.model');

var contactObject={};

contactObject.add_contacts=(req,res)=>{
    var call_us=req.body.call_us;
    var email_us=req.body.email_us;
    var visit_us=req.body.visit_us;
    contactModel.findOne({}).select('call_us').then((response)=>{
        if(response==null){
            var data=new contactModel({
                'call_us':call_us,
                'email_us':email_us,
                'visit_us':visit_us
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully Added',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            contactModel.update({},{$set:{'call_us':call_us,'email_us':email_us,'visit_us':visit_us}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully Updated',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })
}

contactObject.add_enquiry=(req,res)=>{
    var enquiry=req.body.enquiry;

    contactModel.findOne({}).select('enquiry').then((response)=>{
        if(response==null){
            var data=new contactModel({
                'enquiry':enquiry
            })
            data.save().then((resp)=>{
                res.json({status:200,success:true,message:'Successfully submitted,our team will contact you soon.',data:resp})
            }).catch((error)=>{
                res.json({status:200,success:false,message:error,data:''})
            })
        }else{
            contactModel.update({},{$push:{'enquiry':enquiry}}).then((updtRes)=>{
                res.json({status:200,success:true,message:'Successfully submitted,our team will contact you soon.',data:updtRes})
            }).catch((upftError)=>{
                res.json({status:200,success:false,message:upftError,data:''})
            })
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })
}

contactObject.getContactInfo=function(req,res){
    contactModel.findOne({}).then((response)=>{
        if(response!=null){
            res.json({status:200,success:true,message:'Data Found.',data:response})
        }else{
            res.json({status:200,success:false,message:'No Data Found.',data:''})
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })
}
contactObject.getEnquiry=function(req,res){
  var paginate = 10;
  var page = 1;
    contactModel.findOne({}).select('enquiry').skip((page-1)*paginate).limit(paginate).then((response)=>{
        if(response!=null){
            res.json({status:200,success:true,message:'Data Found.',data:response})
        }else{
            res.json({status:200,success:false,message:'No Data Found.',data:''})
        }
    }).catch((error)=>{
        res.json({status:200,success:false,message:error,data:''})
    })
}

module.exports=contactObject;
