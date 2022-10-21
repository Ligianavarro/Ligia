const { request, response } = require("express")
const ClienteModel = require("../models/cliente")

async function crearCliente(req = request, res = response) {
  const { numDocumento } = req.body

  const clienteEncontrado = await ClienteModel.findOne({
    numDocumento: req.body.numDocumento,
  })

  if (clienteEncontrado) {
    res.status(400).send({ mensaje: "El cliente ya existe" })
  } else {
    ClienteModel.create(req.body)
      .then((clienteCreado) => {
        res.status(201).send({ mensaje: "Se creo el cliente", clienteCreado })
      })
      .catch(() => {
        res.send({ mensaje: "No se logro crear el cliente" })
      })
  }
}

async function getClientes(req = request, res = response) {
  const { id, correo, documento } = req.query

  if (correo){
    const cliente = await ClienteModel.findOne({email: correo})
    return res.send(cliente)
  }

  if (id) {
    const cliente = await ClienteModel.findById(id)
    res.send(cliente)
  } else {
    const listaClientes = await ClienteModel.find()
    res.send(listaClientes)
  }
}

async function getCliente(req = request, res = response) {
  const { id } = req.params

  const cliente = await ClienteModel.find({ email: id})

  res.send(cliente)
}

async function modificarCliente(req = request, res = response) {

  const {id, ...cliente} = req.body

  console.log(cliente)

  await ClienteModel.updateOne({_id: id}, cliente )
  const clienteModificado = await ClienteModel.findById(id)

  res.send(clienteModificado)

}

async function borrarCliente(req = request, res = response) {
  
  const {id} = req.body

  const object = await ClienteModel.findByIdAndDelete(id)

  res.send(object)

}


module.exports = { crearCliente, getClientes, getCliente, modificarCliente, borrarCliente }
