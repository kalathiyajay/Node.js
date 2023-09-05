const express =require('express');

const server = express();

server.get("/",(req,res)=>{
    res.end("This Is Home Page");
})

server.get("/cart",(req,res)=>{
    res.end("This Is Cart Page");
})

server.get("/details",(req,res)=>{  
    const data=JSON.stringify({name:"Ram Singh",age:"50",location:"Surat"});
    res.setHeader('Content-type','application/json');
    res.end(data);
    // res.end("This Is Infomation Page");
})

server.listen(5000,()=>{
    console.log('Connected');
});