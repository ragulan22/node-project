const express= require('express');
const router =express.Router();

router.get('/ragul',function(req,res){
    res.send({type:'GET'});
});

router.post('/ragul',function(req,res){
    console.log(req.body);
    res.send(req.body);
});

router.put('/ragul/:id',function(req,res){
    res.send({type:'PUT'});
});

router.delete('/ragul/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports=router;