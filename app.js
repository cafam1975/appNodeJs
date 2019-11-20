var express = require('express');
var app = express();
 
// Importamos las rutas
var suma_Router = require('../suma/sumaRouter/sumaRouter');
 
// Cargamos las rutas
app.use('/sumar', suma_Router);
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});