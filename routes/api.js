'use estric'
const express = require("express");
const {body} = require("express-validator");
const api = express.Router();

var WelcomeController = require('../controller/welcome')
var AlumnosController = require('../controller/alumnos');

api.get("/",WelcomeController.welcome);

api.get("/usuario",AlumnosController.usuario);

api.get("/alumno/:sku",AlumnosController.alumnos);

//api.get("/alumno",WelcomeController.alumno);

api.post("/alumno",[
   body('sku').not().isEmpty(),
   body('nombre').not().isEmpty(),
   body('apellido').not().isEmpty(),
   body('edad').not().isEmpty()
],AlumnosController.crear_alumno);

api.delete("/alumno/:sku",AlumnosController.eliminar_alumno);

api.put("/alumno",[
   body('sku').not().isEmpty(),
   body('nombre').not().isEmpty(),
   body('apellido').not().isEmpty(),
   body('edad').not().isEmpty()
],AlumnosController.update_alumno);

   module.exports = api;