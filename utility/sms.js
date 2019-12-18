
var smsObject={};
smsObject.sendSMS=(mobile_no,message)=>{

    const accountSid = 'AC3ffa8e9a47bfe4d0a7fb067a1b324642';
    const authToken = 'bd29275f5d607e5515f2e1d61ba96152';
    const client = require('twilio')(accountSid, authToken);

    client.messages.create({
        body: message,
        from: '+15005550006',
        to: '+91'+mobile_no
    }).then((message)=>{
        console.log(message);
        console.log(message.sid);
    }).catch((error)=>{
        console.log(error)
    });
}
module.exports=smsObject;