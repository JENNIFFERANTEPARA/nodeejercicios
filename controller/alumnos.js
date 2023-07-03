'use estric'
var Alumnos = require ('../models/alumnos');

var controller = {
    alumnos: function(req, res){

        Alumnos.find({}).exec((err, alumnos)=>{
       
            if(err) return res.status(500).json({status:(500),mensaje:err});
            console.log(Alumnos)
            if(!Alumnos) return res.status (200).json({status:(200),mensaje:"No hay alumnos por en listar"});
            return res.status (200).json({
                status:(200),
                data:Alumnos
            });
    });

    } 
};

module.exports = controller;