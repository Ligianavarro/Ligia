const { Router } = require("express")
const {
  crearCliente,
  getClientes,
  getCliente,
  modificarCliente,
  borrarCliente,
} = require("../controllers/cliente")
const validarToken = require("../middlewares/auth")

const routerCliente = Router()

// ESTA ES LA RUTA PARA CREAR UN USUARIO
routerCliente.post("", crearCliente)
routerCliente.get("", getClientes)
routerCliente.get("/:id", getCliente)
routerCliente.put("", modificarCliente)
routerCliente.delete("", [validarToken], borrarCliente)

module.exports = routerCliente
