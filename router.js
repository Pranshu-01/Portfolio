const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

router.get('/skills',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/skills.html'));

})

module.exports=router;