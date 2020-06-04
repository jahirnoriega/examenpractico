const express=require('express')
//vamos a routear a los pintores
let pintor = require('../controlers/PintoresController.js')

//creamos nuestros rutas.
let router= express.Router()

router.get('/', pintor.list)

module.exports= router