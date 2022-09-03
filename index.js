const express = require('express')
const enrutador = require('./routes/enrutador')
const PORT = process.env.PORT || 9300;
const app = express()

app.use('/',enrutador)

app.listen(PORT,(req,res)=>{
    console.log("servidor corriendo en el server : "+ PORT);
})