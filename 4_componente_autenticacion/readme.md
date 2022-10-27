# Componente autenticacion

React se divide en componentes, no son mas que funciones que manejan un estado y retornan una etiqueta HTML.

Para el componente de autenticacion, en la carpeta auth crea un archivo `login.js`, en el archivo intenta retornar un componente que represente la pagina completa del login.

## Manejando formularios en ReactJS

Normalmente, los formularios son manejados por HTML, sin embargo, al trabajar con JSX, es necesari usar eventos. Usa el evento `onSubmit` que va en la etiqueta form para responder a la acción de registrar un formulario, la etiqueta ejecuta una función con un solo argumento el cual es el evento. Un ejemplo de implementación es el siguiente:

```
function Login() {

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Tu nombre es: ${e.target[0].value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Ingresa tu nombre:
        <input type="text" />
      </label>
      <input type="submit" />
    </form>
  )
}
```

## Usando peticiones

Puedes usar el método `fetch()`, el cual viene integrado desde la versión 2015 de JS. Sin embargo, en este caso vamos a usar una libreria muy reconocida para realizar peticiones llamada `axios`.

### Haciendo una petición POST

Importa en el componente donde quieres hacer una petición `import axios from "axios"`, crea una función para ejecutar usando el método `post`, sigue el siguiente ejemplo:

```
function createPost() {
  axios
    .post(baseURL, {
      title: "Hola Mundo!",
      body: "Enviando info"
    })
    .then((response) => {
      setPost(response.data);
    })
}
```

## Haciendo un POST con cabecero

Basate en el siguiente ejemplo para enviar una petición con un cabecero. Ten en cuenta que la constante token ya debe estar guardada en tu aplicación.

```
let config = {
  headers: {
    Authorization: token,
  }
}

let data = {
      title: "Hola Mundo!",
      body: "Enviando info"
    }

axios.post(URL, data, config).then(...)
```