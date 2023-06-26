const express = require ("express");
const res = require("express/lib/response");
const app = express();
const port = 3700;

app.get("/",(req, res)=>{
 console.log("get ejecutado en raiz");
 res.send("mi prueba");
});

app.listen(port,()=>{
    console.log("si vez es error"+port);
   });