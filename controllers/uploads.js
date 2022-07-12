const { response } = require("express");
const { subirArchivo } = require("../helpers/subir-archivo");


const cargarArchivo = async( req , res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
      res.status(400).json({msg : 'No hay archivos en la peticion' });
      return;    
    }

    try {
      const pathCompleto = await subirArchivo( req.files , ['txt' , 'md'] )

      res.json({
        nombre : pathCompleto
      })
    
    } catch (error) {
      res.status(400).json({
        error
      })
    }


   
}

module.exports = {
    cargarArchivo
}