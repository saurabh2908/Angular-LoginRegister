const mongoose=require('./connection');
const Schema=mongoose.Schema;

const Userschema=new Schema({
    'fullName':{type:String,},
    'email':{type:String,unique:true},
    'password':{type:String,unique:true}
})
const UserModel= mongoose.model('user',Userschema);
module.exports= UserModel;