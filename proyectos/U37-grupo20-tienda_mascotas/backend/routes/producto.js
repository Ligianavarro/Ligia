const { Router } = require("express");
const { crearProducto, subirImagenProducto, getProductos, getImagenProducto } = require("../controllers/producto");
const verificarToken = require("../middlewares/auth");


const routerProducto = Router()

routerProducto.get("/all", getProductos)
routerProducto.post("", [verificarToken], crearProducto)
routerProducto.post("/imagen", [verificarToken], subirImagenProducto)
routerProducto.get("/imagen", getImagenProducto)

module.exports = routerProducto