const { Router } = require('express')
const {crearUsuario, getUsuarios, getUsuario, modificarUsuario, borrarUsuario} = require("../controllers/usuario")

const routerUsuario = Router()

routerUsuario.post("", crearUsuario)
routerUsuario.get("/all", getUsuarios)
routerUsuario.get("", getUsuario)
routerUsuario.put("", modificarUsuario)
routerUsuario.delete("", borrarUsuario)

module.exports = routerUsuario