const CitaModel = require("../models/cita")
const connectDB = require("../config/database")

connectDB()

CitaModel.create({

  fecha: new Date().toISOString(),
  codigo: "CITA0001PA0001",
  area: "MEDICINA GENERAL",
  especialidad: "",
  estado: true,
  usuario: "63477754eb3c5ddd8e2382fd"

})
.then(() => { console.log("se creo la cita") })
.catch(() => { console.log("Error, no se creo la cita") })