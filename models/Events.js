
// module.exports=async (request,reply,done)=>{
//     const {amountrange}=request.body;

//     if(!amountrange){
//         return reply.status(400).send({error:'aamount required'}) 
//     }

// if(amountrange<=50000){
//     return reply.status(400).send({error:'amount should be more'})
// };
// done(); // has next()
// }


const mongoose=require('mongoose');


const eventSchema=new mongoose.Schema({
    amountrange:{
        type:Number
    },
    eventname:{
        type:String,
        required:true
    },
    eventdate:{
        type:Date,
        required:true
    },
    eventlocation:{
        type:String,
        required:true
    },
    eventtime:{
        type:String,
        required:true
    },
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}

});

module.exports=mongoose.model('Event',eventSchema)




