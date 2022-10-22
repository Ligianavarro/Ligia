const express = require("express")
const fileUpload = require("express-fileupload")
const routerCliente = require("../routes/cliente")
const routerProducto = require("../routes/producto")
const conexionDB = require("./database")

class Server {
  constructor() {
    this.port = 3000
    this.app = express()

    // MIDDLEWARES
    this.app.use(express.json())
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))
  
    this.app.listen(this.port, () => {
      console.log("se esta ejecutando la app")
    })

    this.routes()

    conexionDB()
  }

  routes() {

    this.app.use( "/cliente", routerCliente )
    this.app.use( "/producto", routerProducto )

  }
}

module.exports = Server
