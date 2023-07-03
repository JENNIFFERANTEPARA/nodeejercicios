'use estric'
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AlumnosSchema = Schema({
    nombre:{type: String, requiere: true},
    apellido:{type: String, requiere: true},
    edad: Number,
    });

module.exports = mongoose.model('alumnos',AlumnosSchema);