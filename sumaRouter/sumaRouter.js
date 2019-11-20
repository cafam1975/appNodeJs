var express = require('express');
var router = express.Router();

var sumaControlador = require('../sumaController/sumaController');
router.get('/',sumaControlador.suma);

module.exports = router;