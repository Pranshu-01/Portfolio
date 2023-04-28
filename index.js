const express=require('express');
const app=express();
const port=8080;
const router=require('./router');
const path=require('path');
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/css',express.static(path.join(__dirname,'public/css')));


app.use('/router',router);

app.get('/',(req,res)=>{
    res.redirect('/router');
})

app.listen(port,()=>{
    console.log('Server Running');
})