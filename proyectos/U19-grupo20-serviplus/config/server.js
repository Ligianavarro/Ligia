const express = require("express")

const routerCliente = require("../routes/cliente")
const conexionDB = require("./database")

class Server {
  constructor() {
    this.port = 3000
    this.app = express()

    this.app.use(express.json())

    this.app.listen(this.port, () => {
      console.log("se esta ejecutando la app")
    })

    this.routes()

    conexionDB()
  }

  routes() {

    this.app.use( "/", routerCliente )

  }
}

module.exports = Server
