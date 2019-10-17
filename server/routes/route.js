const crud= require('../mongo/helpers/crud')
const app= require('express').Router();

app.post('/register',function(req,res){
    console.log("i ma in register routes");
    const json = req.body;
     crud.register(json,res);
})

app.post('/login',function(req,res){
    const json = req.body;
     crud.login(json,res);
     console.log("i ma in route of login")
})
module.exports=app;