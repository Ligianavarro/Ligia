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

- [Create](https://gitlab.com/misiontic.formador85/repositorio-ciclo-4a/-/tree/tema_2_backend/7_insercion_de_documentos)
- [Read](https://gitlab.com/misiontic.formador85/repositorio-ciclo-4a/-/tree/tema_2_backend/8_busqueda_de_documentos)
- [Update y Delete](https://gitlab.com/misiontic.formador85/repositorio-ciclo-4a/-/tree/tema_2_backend/9_actualizacion_y_eliminacion_de_documentos)

# Implementando rutas en Node

Cuando hablamos de rutas, tratamos con aquellos componentes de código que nos permiten exponer servicios web. Sin embargo, es necesario un servidor (componente de software que expone una aplicación web) para alojar el backend.

## Instalando el servidor *Express*

Para instalar *Express* se usa el siguiente comando en consola: `npm i express`

## Empezando con [*Express*](https://expressjs.com/)

Procura siempre revisar la documentación de cada paquete de node. Para empezar con Express primero importa la libreria `const express = require("express")`, luego crea una constante y llama la función express `const app = express()`, agrega la ruta que necesitas exponer: `app.get("/",()=>{})` y finalmente indica el puerto en el que quieras ejecutar el servidor `app.listen(3000)`. Ahora revisa en el navegador la ruta http://localhost:3000, encontraras que carga una página en blanco. Por lo tanto, ya tienes ejecutando express.

## Usando rutas en otro archivo independiente

En un archivo diferente (en este caso ese archivo lo llamamos *usuarios*), importa la clase Router de express así `const { Router } = require('express')`, luego, llama la función constructora `const router = Router()`, usa la ruta que quieras definir `router.get("/",()=>{})` y finalmente exporta el router `module.exports = router`.

</br>

Para implementar las rutas en Express usalas como middleware así: `app.use( "/", require('../routes/usuarios'))`

## Variables de entorno

Usa `npm i dotenv` para instalar la dependencia de manejo de variables de entorno. Las variables de entorno se crean en un archivo *.env* y se llaman usando `require('dotenv').config()` y se acceden mediante el objeto `process.env`.

