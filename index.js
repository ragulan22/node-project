const express = require('express');
const routes=require('./routes/api');
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json());
app.use('/api',routes);

// app.get('/api',function(req,res){
// console.log('get request');
// res.send({name:'ragul'});
// });



app.listen(process.env.port||4000,function(){
console.log('listening for request');
});