'use estric'
const express = require("express");
const api = express.Router();

var WelcomeController = require('../controller/welcome');


api.get("/",WelcomeController.welcome);

api.get("/alumnos",WelcomeController.alumnos);

api.get("/alumno",WelcomeController.alumno);

api.post("/alumno",WelcomeController.crear_alumno);

api.put("/alumno",WelcomeController.poner_alumno);

api.delete("/alumno",WelcomeController.eliminar_alumno);

   module.exports = api;