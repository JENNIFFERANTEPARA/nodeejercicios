'use estric'
const { validationResult } = require('express-validator');
var alumnos = require ('../models/alumnos');

var controller = {
    /*alumnos: function(req, res){
    alumnos.find({}).exec((err, alumnos)=>{
       
            if(err) return res.status(500).json({status:(500),mensaje:err});
            console.log(alumnos);
              if(!alumnos) return res.status (200).json({status:(200),mensaje:"No hay alumnos por en listar"});
            return res.status (200).json({
                status:(200),
                data:alumnos
            });
    });
    
    } */

    
    usuario: function(_req, res){

        alumnos.find({})    
        .then((data) => {
            return res.status (200).send({
                status:200,
                message:"usuario encontrado",
                usuario: data
                });
        }).catch((_err) => {
            return res.status (500).send({
                status:500,
                message:"Error en busqueda"});
        });

       /* return res.status (200).send({
            status:200,
            message:"usuario encontrado",
            usuario: { 
                nombre:"Alex",
                apellido:"Ponce",
                descripcion:"prueba"
            }
        
            });console.log("alumnos");*/
    }, 
    alumnos: function(req, res) {
        let params = req.params;
      
        alumnos.find({sku:params.sku})    
        .then((data) => {
        if(data.length == 0) return res.status(400).send({status:400,message:"La busqueda no genera respuesta"});
                       
            return res.status (200).send({
                status:200,
                message:"Usuario encontrado",
                usuario: data
                });
        }).catch((err) => {
            return res.status (500).send({
                status:500,
                message:"Error en busqueda"});
        });
        },

        crear_alumno: (req, res)=> {

              // let user_info=req.body;
              // console.log(user_info);

              const errors = validationResult(req);
              if(!errors.isEmpty()){
                  return res.status(422).json({errors:errors.array()});
              }

              var body = req.body;

             alumnos.find({sku:body.sku, nombre: body.nombre})    
             .then((data) => {
             if(data.length > 0) return res.status(400).send({status:400,message:"ya existe"});
             var alumnos_model = new alumnos();
                
             alumnos_model.nombre = body.nombre;
             alumnos_model.apellido = body.apellido;
             alumnos_model.edad = body.edad;
             alumnos_model.sku = body.sku;               
                
             alumnos_model.save().then((alumnosStored)=> {
                if(!alumnosStored) return res.status(404).send({message:"no se pudo encontar el resgitro" });
                return res.status (200).send({
                    status:200,
                    message:"Almacenado"
                }).catch((err) => {
                    return res.status (500).send({message:err});
                });
            }).catch((err) => {
                 return res.status (500).send({
                     status:500,
                     message:"Error en busqueda"});
             });
             
             

             //alumnos.save( (err, alumnosStored) => {
               // if(err) return res.status(500).send({message:err });

              //  if(!alumnosStored) return res.status(404).send({message:"no se pudo encontar el resgitro" });
                //return res.status (200).send({
                 //   status:200,
                 //   message:"usuario almacenado"});
           // });
          
                
          //res.send("creamos un alumno " + user_info.nombre +" edad  es  " + user_info.edad);
             //return res.status (200).json({
              //   status:(200),
              //   nombre_de_alumno: user_info.nombre +"  " +user_info.apellido,
               //  edad:user_info.edad
             //});
         
            })
        },

        eliminar_alumno: function(req, res) {
            let params = req.params;
            alumnos.findOneAndRemove({sku: params.sku}).then((usuRemoved) => {
                if(!usuRemoved) return res.status(404).send({message:"Los datos estas incorrectos" });
                return res.status (200).send({
                    status:200,
                    message:"Eliminado"
                                });
            }).catch((err) => {
                 return res.status (500).send({
                     status:500,
                     message:"error al eliminar"});
             });
    ;
        },
        
    update_alumno: function(req, res) {
        // Validamos los datos que se envian al EndPoint
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors:errors.array()});
        }

        let user_info = req.body;

              //console.log("hola");
       
                
                }

};

module.exports = controller;