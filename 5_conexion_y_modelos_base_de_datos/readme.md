# Bases de datos

Vamos a usar mongoDB para crear las diferentes bases de datos, sin embargo para la gestión de entidades desde el backend se usa la libreria *mongoose*.

## ¿ Cómo empezar con las bases de datos en NodeJS?

### 1. Crear la conexión a la base de datos

[Revisa en la guía](https://lms.uis.edu.co/mintic2022/libros/2022/app-web/C4AM2%20-%20Backend.pdf) el script que permite conectar Node con la base de datos. El script lo puedes colocar en cualquier parte de tu proyecto de node.

## 2. Crear el modelo (que es similar a la entidad y repositorio de SpringBoot)

Los modelos definen los atributos para cada una de las entidades definidas. También indican el tipo de relación con otra entidad. Es recomendable separar cada uno de los modelos en su respectivo script. [Revisa en la guía](https://lms.uis.edu.co/mintic2022/libros/2022/app-web/C4AM2%20-%20Backend.pdf) para ver los ejemplos de creación de un modelo.

### Propiedades disponibles para cada atributo del modelo

Ten en cuenta que, puedes personalizar los atributos del modelo usando las siguientes propiedades.

- `type`: Define el tipo del atributo a usar. Recuerda, JS tiene los tipos `String`, `Number`, `Date`, `Boolean` o `BigInt` por defecto. Sin embargo, puedes usar los tipos que se encuentran en el atributo `types` de la clase `Schema` de mongoose. 
- `default`: Es un valor por defecto para el atributo del modelo.
- `required`. Se usa un arreglo para indicar si es requerido y un texto de respuesta al error. Ejemplo `[true, "El campo edad es obligatorio"]`
- `unique`: Un booleano que indica si el dato debe ser unico.
- `enum`: Es un arreglo de strings para indicar las opciones disponibles. Ejemplo: `enum: ["CLIENTE", "ADMIN"]`
- `ref`: Se usa para referenciar un modelo a otro modelo. En pocas palabras implementar relaciones entre entidades.

Este es un ejemplo de un modelo usando las propiedades anteriores:

```
const usuarioSchema = new mongoose.Schema(
  {
    numeroDocumento: {
      type: String,
      required: [true, "El numero de documento es obligatorio"],
      unique: true
    },
    telefono: {
      type: String,
    },
    password: String,
    tipo: {
      enum: ["PACIENTE","MEDICO"]
      default: "PACIENTE"
    }
  },
  { timestamps: true }
)
```

Fijate que, se pasa otro objeto para el segundo argumento del constructor `Schema`, eso solo es una opción para indicar que mongoose cree automaticamente los campos `createdAt` y `updateAt`.

<br>

El schema solo define como debe ser el objeto a guardar. Para obtener métodos CRUD del objeto necesitamos crear finalmente el modelo:

```
const UsuarioModel = new mongoose.model("usuario", usuarioSchema) 
```

Tener en cuenta que, el primer argumento del usuario model es un string que indica en singular el nombre de la colección.

### Relaciones entre colecciones

Supongamos que en el proyecto, estas definiendo las entidades usuario y cita. Suponiendo que en usuario se guardan los datos del paciente, identificamos que un usuario puede tener muchas citas (relación OneToMany). Si bien, en SQL se implementa lo que llamamos una llave foranea, para hacer que la columna de la entidad cita haga referencia a registros de la entidad usuario, en MongoDB es igual. Para los objetos cita definimos un atributo nuevo que se llame usuario y haga referencia al usuario. En resumidas cuentas, la implementación quedaria así:

```
const citaSchema = new mongoose.Schema(
  {
    fecha: Date,
    codigoUnico: String,
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usuario"
    }
  },
  { timestamps: true }
)
```

# Realizando operaciones CRUD desde el backend

Las operaciones CRUD (Create, Read, Update o Delete) se usan de una manera muy similar respecto a Studio 3T o MongoDB Compass.

## 1. Create

Siempre se usan los modelos generados en el paso anterior para poder hacer cualquier operación CRUD. Entonces, para insertar por ejemplo un pacientese tiene lo siguiente:

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

## 2. Read

Para leer es necesario usar el método findOne() o find() según el caso. Si queremos encontrar el usario con el número de documento "123456" entonces:

```
UsuarioModel.findOne({
    numeroDocumento: "123456"
  })
  .then((respuestaDeBD) => { console.log("Se encontro el usuario con el documento: " + respuestaDeBD.numeroDocumento)})
  .catch( () => { console.log("No se encontro el usuario")})
```

Es posible leer objetos referenciados para que se vean como objeto anidados y no el ObjectID. Entonces para cita se tiene:

```
CitaModel.findOne({
    codigoUnico: "123-PACIENTE-blablabla123",
  })
  .populate('usuario')
  .then((respuestaDeBD) => { console.log("Se encontro la cita con el usuario: " + respuestaDeBD.usuario.numeroDocumento)})
  .catch( () => { console.log("No se encontro")}).
```

## 3 y 4. Update y Delete

Generalmente, los metodos Create son los más complicados. Para actualizar es necesario hacer la consulta primero del objeto a actualizar y para borrar, tambien. Entonces, puedes usar los métodos `updateOne(<filtro>,<objeto>)`, `updateMany(<filtro>,<objeto>)`, `deleteOne(<filtro>)` y `deleteMany(<filtro>)`. Donde `<filtro>` es el objeto usado para consultar como lo hacemos con find y `<objeto>` es el objeto que se pasa con datos actualizados.