const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('web server is working');
})

app.listen(port,()=>{
    console.log('example listing port ${port}, and server is runing');
});