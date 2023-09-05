const express = require('express');

const app = express();
const port =8090;

// app.use(express.json());


// const abc =(req,res,next)=>{
//     console.log("Wellcome....");
    // next();
// }
// app.use(abc);


const pass =(req,res,next)=>{
    console.log("Enter Password");

    if(req.query.password==="9090")
    {
        next();
    }
    else
    {
        res.sendStatus(404);
    }
};
app.use(pass);

app.get("/",(req,res)=>{
    res.json({Name:"Ram",Age:20});
    console.log("i");
});

app.put("/",(req,res)=>{
   res.send("Hi How Are You")
});

app.listen(port,()=>{
    console.log('Server Connected');
});
