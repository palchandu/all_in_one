var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var subDocs=require('./common.model');
var myWebsiteData=require('./subDocs.model');
var gallerySchema=new Schema({
    imageName:{ type:String,required:true},
    imagePath:{ type:String,required:true},
    meta_data:subDocs.meta_data
});

var Gallery=mongoose.model('Gallery',gallerySchema);

var metaData=new Schema({
    deleted: { type: String,default: 'N'}, //Y=Deleted and N for not deleted
    created: { type: Date, default: Date.now }, // Created Date of Loan
    created_by: { type: Number }, // Created Date of Loan
    udated: { type: Date, default: Date.now }, // Updated Date of Loan
    updated_by: { type: Number,default: 0 },
})
var cities=new Schema({
    city:{type:String},
    metaData:metaData
})

var states=new Schema({
    state:{type:String},
    city:[cities],
    metaData:metaData
});

/*All Website Data */
var mywebsite=new Schema({
    home:myWebsiteData.home_data,
    about:myWebsiteData.about_data,
    service:myWebsiteData.service_data,
    education_experience:myWebsiteData.education_experience_data,
    work:myWebsiteData.portfolio_data,
    website_logo:{type:String},
    footer_data:{type:String},
    social_icons:myWebsiteData.social_icons
})

var websiteInfo=mongoose.model('websiteinfo',mywebsite);
/*Document Schema*/
var documentSchema=new Schema({
    documentName:{ type:String,required:true},
    documentPath:{ type:String,required:true},
    meta_data:subDocs.meta_data
});
var document_store=mongoose.model('document_store',documentSchema);

module.exports={
    metaData:metaData,
    states:states,
    cities:cities,
    Gallery:Gallery,
    websiteInfo:websiteInfo,
    document_store:document_store
}
