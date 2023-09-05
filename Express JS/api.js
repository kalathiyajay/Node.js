const express =require('express');

const api =express();

const cart =require('./data.json');

api.use(express.json());

// Post method ->add new Data

api.post('/cart',(req,res)=>{
    let newcart =req.body;
    cart.push(newcart);
    res.json(newcart);
});


// Get method -> All Data


api.get('/cart',(req,res)=>{
    res.json(cart);
})


// Get method -> Specific Data

api.get('/cart/:id',(req,res)=>{
    let ID= +req.params.id;
    let itm=cart.find((p)=>p.id===ID)
    res.send(itm);
})

// Put mathod => remove data

api.put('/cart/:id',(req,res)=>{
    let ID = +req.params.id;
    let itm = cart.findIndex((p)=>p.id===ID);
    // console.log("Index No :",itm);
    // console.log(cart[itm]);
    cart.splice(itm,1,{...req.body});
    res.json(cart);
})

//Patch method => Delete Data

api.patch=('/cart/:id',(req,res)=>{
    let ID = +req.params.id;
    let itm=cart.findIndex((p)=>p.id===ID);

    ca=(cart[itm]);
    ca =cart.splice(itm,1,{...ca,...req.body})
    res.json({cart});
})

api.delete('/cart/:id',(req,res)=>{
    let ID = +req.params.id;
    let itm =cart.findIndex((p)=>p.id===ID)
    cart.splice(itm,1);
    res.send('Data Is Deleted');
})

api.listen(5000,()=>{
    console.log('Server Connected');
})