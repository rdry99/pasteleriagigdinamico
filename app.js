const express = require('express');
const app = express();
const path = require('path');
const dataProducts=require('./products.json');
const dataclientes=require('./clientes.json');
const dataproductos=require('./productosgigi.json');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.json());
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index',{
    destacados:dataProducts,
        clientess:dataclientes 
     })
});


app.get('/index',(req,res)=>{
    res.render('./index',{
    destacados:dataProducts,
    clientess:dataclientes 
    })
});

app.get('/pages/productos',(req,res)=>{
    res.render('./pages/productos',{
    proda:dataproductos
    })
}) ;

app.get('/contactos',(req,res)=>{
    res.render('./pages/contactos')
})

app.get('/iniciarsecion',(req,res)=>{
    res.render('./pages/iniciarsecion')
});

app.get('/productos',(req,res)=>{
        res.render('./pages/productos') 
});
    
app.listen(3000,()=>{
    console.log("escuchando el puerto 3000")
});
