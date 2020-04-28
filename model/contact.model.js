var mongoose=require('mongoose');
var metaData=require('./common.model');
var enquiry=new mongoose.Schema({
  name:{type:String},
  email:{type:String},
  subject:{type:String},
  message:{type:String},
  meta_data:metaData.meta_data
})
var contactSchema=new mongoose.Schema({
    call_us:{ type:String,required:true},
    email_us:{ type:String,required:true},
    visit_us:{ type:String,required:true},
    enquiry:[enquiry]
});

module.exports=mongoose.model('contact',contactSchema);
