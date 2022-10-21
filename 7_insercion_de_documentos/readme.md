# Create

Siempre se usan los modelos generados en el paso anterior para poder hacer cualquier operación CRUD. Entonces, para insertar por ejemplo un paciente se tiene lo siguiente:

```
UsuarioModel.insertMany({
    numeroDocumento: "123456",
    telefono: "302623",
    password: "paciente0000",
  })
  .then(() => { console.log("Se inserto el usuario correctamente")})
  .catch( () => { console.log("No se logro insertar el usuario")})
```

Si bien `insertMany` esta recibiendo un solo objeto, tambien puede recibir como argumento varios objetos en un `array`. Para insertar un objeto que referencia a otro objeto, es necesario saber el ObjectID para identificar el obeto a referenciar, entonces, suponiendo que el usuario anterior genero el ID `ObjectId("blablabla123")` se crea una cita del usuario así:

```
CitaModel.insertMany({
    fecha: new Date().toISOString(),
    codigoUnico: "123-PACIENTE-blablabla123",
    usuario: mongoose.Schema.Types.ObjectId("blablabla123")
  })
  .then(() => { console.log("Se inserto la cita correctamente")})
  .catch( () => { console.log("No se logro insertar la cita")})
```

## Encriptando la contraseña

Usa el siguiente comando para instalar la libreria de encriptación `npm i bcryptjs`. Para encriptar cualquier atributo (en este caso la contraseña) solo es necesario importar bcrypt `const bcrypt = require('bcryptjs')`, luego crea el objeto de encriptación `const salt = bcrypt.genSaltSync(10)` y finalmente encripta el String `const hash = bcrypt.hashSync("micontraseña0000", salt)`

## Verificando la contraseña

Usa la sentencia `bcrypt.compareSync("micontraseña0000", hash)` para evaluar si las contraseñas coinciden o no.

# Usando *Middlewares* para validar

Los middleware no son más que funciones que se ejecutan antes de ejecutar un controlador. Ejecuta `npm i express-validator` para instalar el validador de campos de objetos JSON.

## Usando los middleware en rutas

El método de ruta (sea get(), post(), put() o delete()) normalmente lo implementamos con dos argumentos: `"/larutadeseada"` y el controlador `(req, res)=>{}`, sin embargo se pueden agregar validadores de campos usando la funcion `check` (se importa como: `const { check } = require("express-validator")`). Entonces, si queremos validar que un campo debe tener el formato de correo entonces:

```
this.app.post("/cliente", 
[check("email", "Error en el campo correo").isEmail()], 
crearCliente)
```

Ahora, *Express-Validator* encontrara errores de sintaxis de email, sin embargo, para responder cuando hay un error usa el siguiente código en el controlador. Asegurate de importar el validador `const { validationResult } = require("express-validator")`.

```
const errores = validationResult(req)
if (!errores.isEmpty()){
  return res.status(400).json(errores)
}
```

Algunos de los validadores comunmente usados son: `not().isEmpty()`, `.isIn(['ADMINISTRADOR', 'USUARIO'])`, `.isLength({min: 10})`, `isMongoId()` y `custom( campo => { if (campo >6) throw new Error("Error en un campo") })`.

### Custom Middlewares

Se usan los custom middlewares si encuentras que en varios controladores tienes un bloque de código en común. Entonces, crea un archivo nuevo en una carpeta llamada middlewares (el nombre esta a tu discreción) y la estructura del middleware es similar a la de un controlador, EXCEPTO POR UN DETALLE:

```
function verificarErrores(req, res, next){
  const errores = validationResult(req)
  if (!errores.isEmpty()){
    return res.status(400).json(errores)
  }
  next()
}
```

El detalle es que tiene un argumento más llamado next, no es más que un método que se ejecuta cuando todo sale bien en el middleware personalizado.

# Insertando archivos en el Backend

Ejecuta `npm i express-fileupload`, luego usamos el siguiente middleware (asegurate de importar `const fileUpload = require("express-fileupload")`):

```
this.app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))
```

Ahora, para el controlador encargado de subir archivos basate en el siguiente código:

```
const path = require("path")

function cargaImagen(req, res){

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el archivo" })
  }

  // Extrae el archivo segun el nombre (en este caso "archivo")
  const archivo = req.files.archivo
  const uploadPath = path.join(__dirname, "../uploads/", archivo.name)

  // Usa el metodo mv() para colocar el archivo en cualquier parte del backend
  archivo.mv(uploadPath, (error) => {
    if (error) return res.status(500).send(error)

    res.send("Archivo cargado corectamente")
  })

}

module.exports = cargaImagen
```

Ten en cuenta que el codigo no incluye alguna relación con entidades, si necesitas relacionar, busca el objeto dependiendo la entidad y agregale un nuevo atributo tipo `String` para la ruta de la imagen.

## Tip

Usa `npm i uuid` para instalar la dependencia que genera identificadores únicos. Esto es para los nombres de los archivos.

# Usando moment

Cuando manejas datos de tiempo (tipo Date), se suele usar moment que facilita la creación o el `parsing` de objetos de tiempos. 

- Para crear la fecha actual usa `const now = moment()`
  
puedes usar el constructor de moment para crear las fechas que quieras:

- `moment([2022, 10, 21]);`
- `moment("12/25/1995", "MM-DD-YYYY")`

Si revisas, como Mongo usa formato ISO, guarda las fechas y horas sin indicar la zona horaria, usa moment para ver una fecha consultada de la base de datos con la hora actual. 
