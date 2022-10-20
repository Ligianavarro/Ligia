const mongoose = require("mongoose")

// 1. Declaramos el esquema de la entidad o modelo a implementar
const usuarioSchema = new mongoose.Schema({
  tipoDoc: String,
  numeroDoc: {
    type: String,
    required: [true, "¡El numero de documento es obligatorio!"],
  },
  fechaConexion: Date,
  email: String,
  password: String,
  edad: Number,
  tipo: { type: String, enum: [ "PACIENTE", "MEDICO", "ADMIN" ] },
  nombres: { nombre: String, apellido: String },
})

// 2. Crear el modelo usando el esquema
const UsuarioModel = mongoose.model("usuario", usuarioSchema)

module.exports = UsuarioModel
