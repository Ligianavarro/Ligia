const { request, response } = require("express");

function validarToken(req = request, res = response, next) {
  const token = req.header("Authorization")

  try {
    if (token) {

      if (verify(token, "grupo20-tiend4$Dulces")) {
        next()
      } else res.status(401).send({mensaje: "token invalido"})

    }
    else res.status(401).send({mensaje: "no existe el token"})


    
  } catch (error) {
    res.status(500).send({error, mensaje: "hubo un error"})
  }

}

module.exports = validarToken