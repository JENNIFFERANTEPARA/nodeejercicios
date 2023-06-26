'use estric'
const express = require ('express');
const BodyParser = require ('body-parser');
const app = express();
const routes = require ('./routes/api');

app.use(BodyParser.urlencoded({
    extended:false
}));

app.use(BodyParser.json({
    parameterLimit:100000,
    limit:'50mb',
    extended:false
}));

app.use('',routes);

//Exportamos

module.exports = app;