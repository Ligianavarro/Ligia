const { request, response } = require("express")
const { verify } = require("jsonwebtoken")

// AUTENTICAR
function verificarToken(req = request, res = response, next) {

  const token = req.header("Authorization")

  if (token){
  
    try {
      if ( verify(token, "grupo20_tiend4$M4scotas") ){
        next()
      } else res.status(401).send({auth: false, mensaje: "token invalido"})
    } catch (error) {
      res.status(500).send({auth: false, mensaje: "token invalido"})
    }

  } else res.status(401).send({auth: false, mensaje: "no existe el token"})

}

module.exports = verificarToken