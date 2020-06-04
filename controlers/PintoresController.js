let mongoose = require('mongoose')
//vamos a unirlo al modelo
let Pintores = require('../models/Pintores')

let pintoresController = {}

/*LISTAR -> FIND()*/ 
pintoresController.list=(req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if(err){
                console.log('Error:', err)
            }
            res.render('../views/index', options={
                pintores: pintor,
                titulo: "listado de pintores",
                year: new Date().getDate()
            })
        })
    
};

module.exports= pintoresController;
