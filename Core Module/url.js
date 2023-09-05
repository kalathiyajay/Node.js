
// const http =require('http');

// const se1 =http.createServer((req,res)=>{

//     console.log(req.url);
//     switch(req.url)
//     {
//         case'/':
//             res.end("<b>Hello How Are You</b>")
//         break;

//         case'/cart':
//             res.setHeader("Content-type","text/html");
//             res.end("This is Cart Page");
//         break;

//         default:
//             res.setHeader("Content-type","App/JSON");
//             res.end("Page IS Not Found");
//         break;
//     }
// });

// se1.listen(8091,()=>{
//     console.log("Server Connected");
// });

// const http =require('http');
// const fs= require('fs');

// const pro=fs.readFileSync('product.JSON',"utf-8");

// const Server1=http.createServer((req,res)=>{
//     console.log(req.url);

//     if(req.url===""){
//         // res.setHeader("Content-Type","text/html");
//         res.end("<h1>This Part Is Body Part</h1>");
//     }else if(req.url==="cart")
//     {
//         res.end("<h1>This Is Cart Page</h1>");
//     }else if(req.url==="product")
//     {
//         // res.setHeader("Content-type","data/JSON");
//         res.end(pro);
//     }

// })

// Server1.listen(8888,()=>{
//     console.log("Conected");
// });