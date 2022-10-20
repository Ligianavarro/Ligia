const express = require("express")
const crearCliente = require("../controllers/cliente")
const conexionDB = require("./database")

class Server {
  constructor() {
    this.port = 3000
    this.app = express()

    this.app.use(express.json())
    
    this.app.listen(this.port, ()=>{
      console.log("se esta ejecutando la app")
    })

    this.routes()

    conexionDB()
  }

  routes() {
    // ESTA ES LA RUTA PARA CREAR UN USUARIO
    this.app.post("/cliente", crearCliente)
  }
}

module.exports = Server
