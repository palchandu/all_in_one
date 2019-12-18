var bcrypt=require('bcryptjs');

var utilityObject={};
utilityObject.hashCode=(value)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(value,10,(err,hash)=>{
            if(err){
                reject(err)
            }else{
                resolve(hash)
            }
        })
    });
}
module.exports=utilityObject;