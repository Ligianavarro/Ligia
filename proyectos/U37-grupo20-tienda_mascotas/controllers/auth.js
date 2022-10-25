const { request, response } = require("express")
const {compareSync} = require("bcryptjs")
const {sign} = require("jsonwebtoken")
const UsuarioModel = require("../models/usuario")

async function login(req = request, res = response) {
  
  const {password, email} = req.body

  // 1. Valido si existe el email
  const usuario = await UsuarioModel.findOne({email})
  if (usuario){

    //2. Validar contraseña
    if (compareSync(password, usuario.password)){

      //3. Crear el token
      sign( {id: usuario.id}, "grupo20_tiend4$M4scotas", {expiresIn: "5h"}, (err, token)=>{

        if (err) return res.status(500).send({err, mensaje: "hubo un error al crear el token"})
        else return res.send({token, auth: true})

      } )

    }
    


  }


}

module.exports = {login}