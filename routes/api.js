'use estric'
const express = require("express");
const api = express.Router();

var WelcomeController = require('../controller/welcome')
//var AlumnosController = require('../controller/alumnos');

api.get("/",WelcomeController.welcome);

//api.get("/alumnos",AlumnosController.alumnos);

//api.get("/alumno",WelcomeController.alumno);

/*api.get("/alumno",WelcomeController.alumno);

api.post("/alumno",WelcomeController.crear_alumno);

api.put("/alumno",WelcomeController.poner_alumno);

api.delete("/alumno",WelcomeController.eliminar_alumno);*/

   module.exports = api;