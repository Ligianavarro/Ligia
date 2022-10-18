## Crear el modelo (que es similar a la entidad y repositorio de SpringBoot)

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

Las operaciones CRUD (Create, Read, Update o Delete) se usan de una manera muy similar respecto a Studio 3T o MongoDB Compass. Revisa las próximas secciones para realizar operaciones CRUD en node.
