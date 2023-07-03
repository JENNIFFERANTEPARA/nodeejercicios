'use estric'
const mongoose = require('mongoose');//CONECTARSE A LA BASE
const app = require('./app');

const port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser:true, useUnifiedTopology:true})
        .then(() => {
            console.log('Conexion a la base de datos establecida con exito');

            //Crear servidor
           var server = app.listen(port,()=>{
               console.log("Servidor corriendo correctamente en la url: http://localhost:" +port);
                                            });
                                            server.timeoute= 120000;
    })
    .catch(err => console.log(err));


//app.listen(port,()=>{
//console.log("Servidor de ejemplo ejecutando en" +port);
//});

