const { Router } = require("express");
const { crearProducto, subirImagenProducto } = require("../controllers/producto");


const routerProducto = Router()

routerProducto.post("", crearProducto)
routerProducto.post("/imagen", subirImagenProducto)

module.exports = routerProducto