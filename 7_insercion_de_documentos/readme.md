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

