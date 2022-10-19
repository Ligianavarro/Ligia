const express = require("express")

class Server {
  constructor() {
    this.aplicacion = express()
    this.aplicacion.use( express.json() )
    this.rutas()
    this.aplicacion.listen(3000)
  }

  rutas() {
    this.aplicacion.post("/usuarios/create", (peticion, respuesta) => {

      console.log(peticion.body.email)
      respuesta.send("Hola desde el backend")
      
    })
  }
}

module.exports = Server
