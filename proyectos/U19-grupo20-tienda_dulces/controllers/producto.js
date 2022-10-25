const {request, response} = require("express")
const ProductoModel = require("../models/producto")
const path = require("path")

async function guardarImagen(req = request, res = response){

  const {productoid} = req.query

  // GET del producto
  const producto = await ProductoModel.findById(productoid)

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el archivo" })
  }

  // Extrae el archivo segun el nombre (en este caso "archivo")
  const archivo = req.files.imagen
  const rutaDeCarga = path.join(__dirname, "../imagenes/", archivo.name)

  // Usa el metodo mv() para colocar el archivo en cualquier parte del backend
  archivo.mv(rutaDeCarga, (error) => {
    if (error) return res.status(500).send(error)
    
    // CARGA EL ARCHIVO
    producto.imagen = archivo.name
    producto.save()

    res.send("Archivo cargado corectamente")
  })

}

function verImagen(req = request, res = response) {
  
  const {nombre} = req.query
  const rutaDeLaImagen = path.join(__dirname, "../imagenes/", nombre)
  res.sendFile(rutaDeLaImagen)

}

async function guardarProducto(req = request, res = response) {
  
  const producto = new ProductoModel(req.body)
  await producto.save()

  res.send({producto, mensaje: "se creo el producto"})
}

async function verProductos(req = request, res = response) {
  
  const listadoProductos = await ProductoModel.find()
  res.send(listadoProductos)

}




module.exports = {guardarProducto, guardarImagen, verImagen, verProductos}