var bcrypt=require('bcryptjs');
const crypto = require('crypto');
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

utilityObject.hashCodeNew=(value)=>{
    return new Promise((resolve,reject)=>{
    const cipher = crypto.createCipher('aes128', 'a password');
    var encrypted = cipher.update(value, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    if(encrypted.length==0){
        reject('Something wrong!hash not created');
    }else{
        resolve(encrypted)
    }
    });
}
module.exports=utilityObject;