const { request, response } = require("express")
const {compareSync} = require("bcryptjs")
const {sign} = require("jsonwebtoken")
const ClienteModel = require("../models/cliente")

async function login(req = request, res = response) {
  
  const {email, password} = req.body

  // 1. Buscar cliente
  const clienteBD = await ClienteModel.findOne({email})

  if(clienteBD){

    // SI LAS CREDENCIALES SON VALIDAS
    if (compareSync(password, clienteBD.password)) {

      sign({ id: clienteBD.id }, "grupo20-tiend4$Dulces", (err, token)=>{

        if (err)
          res.status(500).send({mensaje: "hubo un error"})
        else
          res.send({auth: true, token})

      } )

    }

  } else 
      res.status(400).send({mensaje: "no existe el cliente"})
  

}

module.exports = {login}