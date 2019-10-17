const model =require('../models/schema');

const userOperation={
    register(object,response){
        
         model.find(object.email,object.password,(err,doc)=>{
             if(doc){
                 console.log("doc is",doc);
                 response.json({message:"user already exist"});
                 console.log("data is exist");
             }
             else{
                 model.create(object,(err,doc)=>{
                     if(err){
                         console.log(err);
                         response.json({message:'data not added'});
                         console.log("i ma here");
                     }
                     else{

                         response.json({message:'error in adding databse'});
                         console.log("i am in register box",doc);
                     }
                 })
             }
         })
    },

    login(object,response){
        model.findOne(object,(err,doc)=>{
            console.log("in object is",object.email);
            if(doc==null){
                response.json(doc);
                console.log("i ma out",err);
            }
            else{
                response.json(doc);
                console.log("i am in",doc)
            }
        })
    }
}

module.exports=userOperation