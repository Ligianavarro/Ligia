const express = require("express")

class Server {

  constructor() {
    this.app = express()
    this.app.use( express.json() )
    this.routes()
    this.app.listen(3000)
  }

  routes() {
    this.app.get("/", (request, response) => {
      response.send("")
    })

    this.app.post("/crear-usuario", (request, response) => {
      console.log(request.body)
      response.send(request.body)
    })
  }

}

module.exports = Server
