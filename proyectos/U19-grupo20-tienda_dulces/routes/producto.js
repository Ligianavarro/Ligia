const { Router } = require("express");
const { guardarProducto, guardarImagen, verImagen, verProductos } = require("../controllers/producto");


const routerProducto = Router()

routerProducto.post("", guardarProducto )
routerProducto.get("", verProductos )
routerProducto.post("/imagen", guardarImagen )
routerProducto.get("/imagen", verImagen )

module.exports = routerProducto
