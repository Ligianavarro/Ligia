const express = require("express")
const routerProducto = require("../routes/producto")
const routerUsuario = require("../routes/usuario")
const connectDB = require("./database")
const fileUpload = require("express-fileupload")
const cors = require("cors")


class Server {

  constructor() {
    this.aplicacion = express()

    // Middlewares
    this.aplicacion.use( express.json() )
    this.aplicacion.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))
    this.aplicacion.use( cors() )
  
    this.aplicacion.listen(3001, ()=>{ console.log("se esta ejecutando el servidor") })
    this.rutas()
    
    connectDB()
  }

  rutas() {
    this.aplicacion.use("/usuario", routerUsuario)
    this.aplicacion.use("/producto", routerProducto)
    this.aplicacion.use("/auth", require("../routes/auth"))
  }
}

module.exports = Server
