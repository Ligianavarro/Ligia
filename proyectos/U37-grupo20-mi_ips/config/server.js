const express = require("express")
const {crearUsuario, getUsuarios} = require("../controllers/usuario")
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
    this.aplicacion.post("/usuario", crearUsuario)
    this.aplicacion.get("/usuario", getUsuarios)
  }
}

module.exports = Server
