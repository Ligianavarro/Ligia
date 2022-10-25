const { Router } = require("express");
const { crearProducto, subirImagenProducto, getProductos, getImagenProducto } = require("../controllers/producto");


const routerProducto = Router()

routerProducto.get("/all", getProductos)
routerProducto.post("", crearProducto)
routerProducto.post("/imagen", subirImagenProducto)
routerProducto.get("/imagen", getImagenProducto)

module.exports = routerProducto