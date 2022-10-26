const UsuarioModel = require("../models/usuario")
const connectDB = require("../config/database")

connectDB()

UsuarioModel.create({
  tipoDoc: "RC",
  numeroDoc: "5678",
  fechaConexion: new Date().toISOString(),
  email: "a@mail.com",
  password: "000",
  edad: 30,
  nombres: { nombre: "Pepe", apellido: "M." }
})
.then(()=> {console.log("Se inserto el usuario")})
.catch((e)=>{console.error(e)})