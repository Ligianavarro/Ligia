const { Schema, model } = require("mongoose")

const ticketSchema = new Schema({
  descripcion: String,
  codigo: {type: String, unique: true},
  fecha: Date,
  tema: String,
  dependencia: String,
  asunto: {type: String, required: [true, "El asunto es obligatorio"]},
  prioridad: String,
  estado: {type: String, enum: ["CREADO", "ABIERTO", "RESUELTO"]},
  cliente: { 
    type: Schema.Types.ObjectId,
    ref: "cliente" 
  },
})

const TicketModel = model("ticket", ticketSchema)

module.exports = TicketModel