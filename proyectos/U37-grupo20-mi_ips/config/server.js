const express = require("express")

const routerUsuario = require("../routes/usuario")
const connectDB = require("./database")

class Server {

  constructor() {
    this.aplicacion = express()
    this.aplicacion.use( express.json() )
    this.aplicacion.listen(3000, ()=>{ console.log("se esta ejecutando el servidor") })
    this.rutas()
    connectDB()
  }

  rutas() {
    this.aplicacion.use("/", routerUsuario)
  }
}

module.exports = Server
