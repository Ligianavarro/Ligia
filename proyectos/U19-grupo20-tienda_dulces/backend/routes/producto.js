const { Router } = require("express");
const { guardarProducto, guardarImagen, verImagen, verProductos } = require("../controllers/producto");
const validarToken = require("../middlewares/auth");


const routerProducto = Router()

routerProducto.post("", [validarToken], guardarProducto )
routerProducto.get("", verProductos )
routerProducto.post("/imagen", [validarToken], guardarImagen )
routerProducto.get("/imagen", verImagen )

module.exports = routerProducto
