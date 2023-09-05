

const http = require('http');

/*                  Server 1                     */
const a=http.createServer((req,res)=>{
    res.write(<p>hi how are you mava</p>);
    res.end('\nServer 1....');
});

a.listen(250,()=>{
    console.log("Conected");
});


/*                  Server 2                     */

const b=http.createServer((req,res)=>{
    res.end('Server 2....');
});

b.listen(251,()=>{
    console.log("Conected");
});


/*                  Server 3                     */


const c=http.createServer((req,res)=>{
    res.end('Server 3....');
});

c.listen(252,()=>{
    console.log("Conected");
});

/*                  Server 4                     */


const d=http.createServer((req,res)=>{
    res.end('Server 4....');
});

d.listen(253,()=>{
    console.log("Conected");
});


/*                  Server 5                     */

const e=http.createServer((req,res)=>{
    res.end('Server 5....');
});

e.listen(254,()=>{
    console.log("Conected");
});