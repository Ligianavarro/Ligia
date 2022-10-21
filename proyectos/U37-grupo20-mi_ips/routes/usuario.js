const { Router } = require('express')
const {crearUsuario, getUsuarios, getUsuario, modificarUsuario, borrarUsuario} = require("../controllers/usuario")

const routerUsuario = Router()

routerUsuario.post("/usuario", crearUsuario)
routerUsuario.get("/usuarios", getUsuarios)
routerUsuario.get("/usuario", getUsuario)
routerUsuario.put("/usuario", modificarUsuario)
routerUsuario.delete("/usuario", borrarUsuario)

module.exports = routerUsuario