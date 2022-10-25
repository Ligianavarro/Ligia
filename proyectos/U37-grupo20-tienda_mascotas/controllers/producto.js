const {request, response} = require("express")
const ProductoModel = require("../models/producto")
const {verify} = require("jsonwebtoken")
const path = require("path")

async function crearProducto(req = request, res = response) {
  // AUTENTICAR
  const token = req.header("Authorization")

  if ( verify(token, "grupo20_tiend4$M4scotas") ){
    // CREAR EL PRODUCTO
    const producto = new ProductoModel(req.body)
    const productoCreado = await producto.save()

    res.status(201).send({mensaje: "se creo el producto", productoCreado})
  } else
    res.status(401).send({mensaje: "no esta autorizado", auth: false})

}

async function getProductos(req = request, res = response) {
  
  const listaProductos = await ProductoModel.find()
  res.send(listaProductos)

}


async function subirImagenProducto(req = request, res = response) {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el imagen" })
  }

  // Extrae el imagen segun el nombre (en este caso "imagen")
  const {imagen} = req.files

  // Extraer extension de la imagen
  //const imagenName = imagen.name.split(".")
  //const extension = imagenName[imagenName - 1 ]
  imagen.name = "sdaspdskdasokda.pdf"

  const rutaDeCargaImagen = path.join(__dirname, "../imagenes/", imagen.name)

  // Consultar el producto
  const {idproducto} = req.query
  const producto = await ProductoModel.findById(idproducto)

  // Usa el metodo mv() para colocar el imagen en cualquier parte del backend
  imagen.mv(rutaDeCargaImagen, (error) => {
    if (error) return res.status(500).send(error)

    producto.imagen = imagen.name
    producto.save()

    res.status(201).send({mensaje: "imagen cargado corectamente"})
  })

}

function getImagenProducto(req = request, res = response) {
  
  res.sendFile(path.join(__dirname, "../imagenes/", req.query.nombre))

}

module.exports = {crearProducto, subirImagenProducto, getProductos, getImagenProducto}