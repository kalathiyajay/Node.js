const express =require("express");
const api =express();
const path =require("path");

const pathname=path.join(__dirname,"index.html");


api.get("/Navbar",(req,res)=>{
    res.sendFile(pathname);
});
api.get("/Home",(req,res)=>{
    res.json({NAme:"RAm",Age:20});
});

api.listen(3000,()=>{
    console.log("connected");
});