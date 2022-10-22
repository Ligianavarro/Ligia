const { request, response } = require("express")
const { genSaltSync, hashSync} = require('bcryptjs')
const UsuarioModel = require("../models/usuario")


async function crearUsuario(req = request, res = response) {
  //VALIDACION
  const { numeroDoc, password } = req.body

  const usuarioEncontrado = await UsuarioModel.findOne({
    numeroDoc: numeroDoc,
  })

  if (usuarioEncontrado) {
    return res.send({ mensaje: "el usuario ya existe" })
  } else {
    try {
      const passwordEncriptado = hashSync(password, genSaltSync())
      req.body.password = passwordEncriptado

      const usuarioCreado = await UsuarioModel.create(req.body)
      return res.send({ mensaje: "se creo el usuario", usuarioCreado })
    } catch (error) {
      return res.send({ mensaje: "error al crear el usuario", error })
    }
  }
}

async function getUsuarios(req = request, res = response) {
  try {
    const listaUsuarios = await UsuarioModel.find({ tipo: req.query.tipo })
    return res.send(listaUsuarios)
  } catch (error) {
    return res.send({ mensaje: "hubo un error" })
  }
}

async function getUsuario(req = request, res = response) {
  const { id, documento, email, tipoDoc } = req.query

  try {
    const usuario = await UsuarioModel.findOne({
      $or: [{ _id: id }, { numeroDoc: documento }, { email }],
    })
    return res.send(usuario)
  } catch (error) {
    return res.send(error)
  }
}

async function modificarUsuario(req = request, res = response) {

  const { numeroDoc, password, ...usuario} = req.body

  if (numeroDoc){
    try {
      if(password){
        usuario.password = hashSync(password, genSaltSync())
      }
      const cliente = await UsuarioModel.findOneAndUpdate( {numeroDocumento: numeroDoc} , usuario)
      return res.status(201).send(cliente)
    } catch (error) {
      return res.status(500).send(error)
    }
    
  }

}

async function borrarUsuario(req = request, res = response) {
  
  const {numeroDoc, id} = req.body

  try {
    await UsuarioModel.findOneAndDelete( {$or: [{_id: id}, { numeroDoc }]} )
    return res.send({mensaje: "se borro el usuario", borrado: true})
  } catch (error) {
    return res.status(400).send(error)
  }

}


module.exports = { crearUsuario, getUsuarios, getUsuario, modificarUsuario, borrarUsuario }
