const express = require('express');
const { createConnection } = require('net');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname,'views'));
app.set ('views engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());


/* app.get('/',(req,res)=>{
    Connection.query('SELECT * FROM productos ',(err,result)=>{
            if(err){
            console.log(err)
            }
            res.render('./index', {
            titulo:"cuidarse",
            productos:result //estoy mandando todo a index
             })
        });
    });    */

    app.get('/contacto',(req,res)=>{
        res.render('./pages/contacto',{
            titulo:"Contactos de Gi"
        })
    })

    app.listen(3015,()=>{
        console.log("escuchando al puerto 3015 ")
    })