var express = require('express');
var app = express();
 
// Importamos las rutas
var suma_Router = require('../sumaRouter/sumaRouter.js');
 
// Cargamos las rutas - Importante
app.use('/sumar', suma_Router);
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
