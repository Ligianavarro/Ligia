const { request, response } = require("express")
const {compareSync} = require("bcryptjs")
const {sign} = require("jsonwebtoken")
const ClienteModel = require("../models/cliente")

async function login(req = request, res = response) {
  
  const {email, password} = req.body

  // Buscar cliente
  const cliente = await ClienteModel.findOne({email})

  if(cliente){

    // SI LAS CREDENCIALES SON VALIDAS
    if (compareSync(password, cliente.password)) {

      sign({ id: cliente.id }, "grupo20-tiend4$Dulces", (err, token)=>{

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