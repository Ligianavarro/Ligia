# Backend

## Guías

Antes de revisar este repositorio revisa las guías de MisiónTIC 2022 - UIS asociadas a la implementación del backend.

- [Guía paso a paso backend](https://lms.uis.edu.co/mintic2022/libros/2022/app-web/C4AM2%20-%20Backend.pdf)

- [Guía resumen y cuestionario](https://lms.uis.edu.co/mintic2022/libros/2022/app-web/C4AM2%20-%20Recurso%20Educativo%20Digital.pdf)

## Pruebas realizadas con postman

A continuación encontrarán todas las pruebas realizadas a los proyectos en la sesiones sincronicas en los siguientes enlaces.

- [Workspace en Postman curso U19](https://www.postman.com/misionticformador85/workspace/misiontic-2022-uis-u19)
- [Workspace en Postman curso U37](https://www.postman.com/misionticformador85/workspace/misiontic-2022-uis-u37)

## Eje temático

Bienvenidos estimados tripulantes, para la segunda semana vamos a empezar la implementación del proyecto Backend. Especificamente los temas que vamos a tocar son:

2.1. Creación del proyecto​

2.2. Configuración de dependencias​

2.3. Estructura del backend​

2.4. Manual de creación de la BD​

2.5. Conexión a la BD​

2.6. Modelos y rutas en el backend​

2.7. Inserción de documentos en colecciones​

2.8. Búsqueda de documentos en colecciones​

2.9. Actualización y eliminación de documentos en colecciones​

## ¿Cómo usar el repositorio compartido?

En este repositorio cada rama va estar relacionada a un eje temático. Donde, para cada eje, cada carpeta esta organizada según el tema a estudiar.

Al abrir cada carpeta vamos a tener guías (una especie de landing) para poner en contexto la finalidad de cada carpeta.

## Requerimientos de software para el eje temático 2

Este ciclo esta más orientado al desarrollo, por lo tanto, vamos a necesitar los siguientes programas:

- [NodeJS](https://nodejs.org/es/)

- [Visual Studio Code](https://code.visualstudio.com/)

### Bases de datos no relacionales MongoDB

A continuación, descarga e instala MongoDB Community, eso instalará el motor de bases de datos en local, posteriormente, descarga e instala Studio 3T.

- [MongoDB Community](https://www.mongodb.com/try/download/community)
- [Studio 3T](https://robomongo.org/)

## Pruebas a endpoints

- [Postman](https://www.postman.com/downloads/)

### Extensiones JS

Para VSCode vamos a instalar las siguientes extensiones:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  
### Temas

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### Code Formater (organizador de código)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Gráficas de Git

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

# Extras

## Usando JSON WEB TOKENS (JWT)

Los tokens se usan como una forma de autenticar usuarios, validar transacciones u otras operaciones financieras. Vienen en diferentes formatos, en este caso, como implementamos una aplicación tipo REST, el token debe estar en formato JSON. Ejecuta `npm i jsonwebtoken` para empezar a crear tokens en tu aplicación.

### Crea una ruta y controlador para login

Usa una ruta con método POST y un controlador para implementar la logica del token.
Importa `const jwt = require("jsonwebtoken")`, firma usando la siguiente función:

```
jwt.sign(id, "secretkey", {expiresIn: "4h"},(err, token)=>{
  if (err)
    console.log("Error al generar token")
  else
    req.send(token)
})
```

### Protege una ruta

Debes crear un middleware para ejecutar antes del controlador. usa el método `verify(token, "secretkey")` para verificar un token.