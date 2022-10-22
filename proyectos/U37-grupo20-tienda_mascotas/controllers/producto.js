const {request, response} = require("express")
const ProductoModel = require("../models/producto")
const path = require("path")

async function crearProducto(req = request, res = response) {
  
  const producto = new ProductoModel(req.body)
  const productoCreado = await producto.save()

  res.status(201).send({mensaje: "se creo el producto", productoCreado})

}

function subirImagenProducto(req = request, res = response) {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el imagen" })
  }

  // Extrae el imagen segun el nombre (en este caso "imagen")
  const {imagen} = req.files
  const imagenName = imagen.name.split(".")
  const extension = imagenName[imagenName - 1 ]
  const uploadPath = path.join(__dirname, "../imagenes/", imagen.name)

  // Usa el metodo mv() para colocar el imagen en cualquier parte del backend
  imagen.mv(uploadPath, (error) => {
    if (error) return res.status(500).send(error)

    res.send("imagen cargado corectamente")
  })

}

module.exports = {crearProducto, subirImagenProducto}