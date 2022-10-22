const express = require("express")
const routerProducto = require("../routes/producto")
const routerUsuario = require("../routes/usuario")
const connectDB = require("./database")
const fileUpload = require("express-fileupload")

class Server {

  constructor() {
    this.aplicacion = express()

    // Middlewares
    this.aplicacion.use( express.json() )
    this.aplicacion.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))
  
    this.aplicacion.listen(3000, ()=>{ console.log("se esta ejecutando el servidor") })
    this.rutas()
    
    connectDB()
  }

  rutas() {
    this.aplicacion.use("/usuario", routerUsuario)
    this.aplicacion.use("/producto", routerProducto)
  }
}

module.exports = Server
