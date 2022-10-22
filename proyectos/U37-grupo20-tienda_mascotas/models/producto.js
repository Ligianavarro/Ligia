const {Schema, model} = require("mongoose")

const productoSchema = new Schema({

  nombre: String,
  cantidad: Number,
  precio: Number,
  detalle: String,
  imagen: String

})

const ProductoModel = model("producto", productoSchema)

module.exports = ProductoModel