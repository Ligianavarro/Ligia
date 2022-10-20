const express = require("express")
const ClienteModel = require("../models/cliente")

async function crearCliente( request = express.request, response = express.response) {
  
  const { numDocumento } = request.body

  const clienteEncontrado = await ClienteModel.findOne({
    numDocumento: request.body.numDocumento,
  })

  if (clienteEncontrado) {
    response.send({ mensaje: "El cliente ya existe" })
  } else {
    ClienteModel.create(request.body)
      .then((clienteCreado) => {
        response.send({ mensaje: "Se creo el cliente", clienteCreado })
      })
      .catch(() => {
        response.send({ mensaje: "No se logro crear el cliente" })
      })
  }
}

module.exports = crearCliente
