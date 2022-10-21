const { Router } = require("express")
const {
  crearCliente,
  getClientes,
  getCliente,
  modificarCliente,
  borrarCliente,
} = require("../controllers/cliente")

const routerCliente = Router()

// ESTA ES LA RUTA PARA CREAR UN USUARIO
routerCliente.post("/cliente", crearCliente)
routerCliente.get("/cliente", getClientes)
routerCliente.get("/cliente/:id", getCliente)
routerCliente.put("/cliente", modificarCliente)
routerCliente.delete("/cliente", borrarCliente)

module.exports = routerCliente
