const express = require('express');

const api = express();
const port=5000;


api.get('/',(req,res)=>{
    res.json({"Name":"Rutvik"});
});

api.post("/post",(req,res)=>{
    res.end("Post Page");
});

api.put("/put",(req,res)=>{
    res.end("Put Page");
});

api.patch("/patch",(req,res)=>{
    res.end("Patch Page");
});

api.delete("/delete",(req,res)=>{
    res.end("Delete Page");
})

api.listen(port,()=>{
    console.log("Server Conected");
})