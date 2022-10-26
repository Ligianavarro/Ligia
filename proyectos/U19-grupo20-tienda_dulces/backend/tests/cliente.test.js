const ClienteModel = require("../models/cliente")
const conexionDB = require("../config/database")

conexionDB()

// Implementar el caso de uso
const cliente1 = {
  tipoDocumento: "CC",
  numDocumento: "123",
  nombre: "pepe",
  apellido: "m",
  email: "p@mail.com",
  telefonoContacto: "310",
  password: "000000"
}

ClienteModel.create(cliente1)
  .then( (respuesta)=>{  
      console.log("Se inserto el cliente " + respuesta.nombre)
   } )
  .catch( ()=>{console.log("Hubo un error al insertar el cliente")})