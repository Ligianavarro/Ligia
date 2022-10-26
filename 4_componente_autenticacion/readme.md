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

... Acá va ir más documentación