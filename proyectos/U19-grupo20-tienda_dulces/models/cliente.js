const {Schema, model} = require("mongoose")

// 1. Crear esquema
const clienteSchema = new Schema( {
  tipoDocumento: String,
  numDocumento: String,
  nombre: String,
  apellido: String,
  email: String,
  telefonoContacto: String,
  password: String
} )

// 2. Crear el modelo
const ClienteModel = model( "cliente" , clienteSchema )

module.exports = ClienteModel