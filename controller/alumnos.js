'use estric'
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
    usuario: function(req, res){
        return res.status (200).send({
            status:200,
            message:"usuario encontrario",
            usuario: { 
                nombre:"",
                apellido:"",
                descripcion:"prueba"
            }
        
            });console.log("alumnos");
    }
};

module.exports = controller;