const { request, response } = require("express")
const UsuarioModel = require("../models/usuario")

async function crearUsuario(req = request, res = response) {
  
  //VALIDACION
  const {numeroDoc} = req.body

  const usuarioEncontrado = await UsuarioModel.findOne({
    numeroDoc: numeroDoc,
  })

  if (usuarioEncontrado) {
    res.send({ mensaje: "el usuario ya existe" })
  } else {

    try {
      const usuarioCreado = await UsuarioModel.create(req.body)
      res.send({ mensaje: "se creo el usuario", usuarioCreado })
    } catch (error) {
      res.send({ mensaje: "error al crear el usuario", error })
    }
    
  }
}

async function getUsuarios(req = request, res = response){

  try{
    const listaUsuarios = await UsuarioModel.find({tipo: req.query.tipo})
    res.send(listaUsuarios)
  } catch(error){
    res.send({mensaje: "hubo un error"})
  }

}

module.exports = {crearUsuario, getUsuarios}
