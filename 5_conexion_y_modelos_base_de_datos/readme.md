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
const carritoItemSchema = new Schema(
  {
    producto: {
      type: Schema.Types.ObjectId,
      ref: "producto",
    },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "usuario",
    },
    cantidad: Number,
  },
  { timestamps: true }
)
```

Fijate que, se pasa otro objeto para el segundo argumento del constructor `Schema`, eso solo es una opción para indicar que mongoose cree automaticamente los campos `createdAt` y `updateAt`.