const {Schema, model} = require("mongoose")

const citaSchema = new Schema({

  fecha: Date,
  codigo: String,
  area: String,
  especialidad: String,
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuario"
  },
  estado: Boolean,
  edad:Number

})

const CitaModel = model("cita", citaSchema)

module.exports = CitaModel