# Programación Asíncrona

A diferencia de otros lenguajes como Python o Java, JS se ejecuta únicamente en un solo hilo, eso significa que cada una de las sentencias de un script se deberian ejercutar secuencialmente.

## Código bloqueante o síncrono

Llamamos código bloqueante a todas las sentencias que no dependen de procesos externos a nuestro script. Por ejemplo:

```
intentos = 0
while(intentos < 3){
  intentos++;
}
```

Todos los iteradores, condicionales, asignaciones, declaraciones, etc. son sentencias que se resuelven en el mismo script y no dependen nada más que de la lógica que se expresa en el script. En este caso, se le llama bloqueante, porque no permite la ejecución de otros sentencias al tiempo hasta que el script sea resuelto.

## Código no bloqueante o asíncrono

Cuando en nuestro script, hay una sentencia que depende de procesos externos asíncronos (como enviar una petición por JS), al no saber cuanto tiempo va tardar en resolverse el proceso externo, JS ejecuta todas las sentencias sincronas y luego si resuelve las sentencias no bloqueantes o asíncronas.

## Promesas

Las promesas son una implementación de código no bloqueante. En realidad, son objetos que principalmente tienen dos propiedades (reject y resolve) para indicar cuando el código de la promesa se resuelve o cuando hay un problema o error en el código de la promesa.

### Declarando una promesa

Las promesas se crean como instancias del prototipo `Promise`. La función constructora de la promesa recibe como argumento un _callback_ de dos argumentos (`(resolve,reject)=>{}`)

```
const promesa = new Promise((resolve,reject)=>{})
```

Al declarar la promesa, debemos tener en cuenta que, el argumento resolve y el argumento reject son también _callbacks_

- Resolve: Cuando todo sale bien en el código a ejecutar en la promesa, se llama la función `resolve`. Ejemplo: Supongamos que queremos consultar si en un string existe la palabra MisionTIC

```
const promesa = new Promise((resolve, reject) => {
  let txt_bienvenida = "Bienvenido a MisionTIC 2022"

  const charIndex = txt_bienvenida.search("MisionTIC")
  if (charIndex !== -1) {
    resolve(`Se encontró una coincidencia en el caracter # ${charIndex}`)
  }
})
```

Si ejecutas el codigo no aparece nada, solo es por una sencilla razón, nunca hemos llamado la promesa para ejecutarla. Entonces, para llamarla usamos el método `then()`:

```
promesa.then( (txtRta) => {console.log(txtRta)} )
```

Como ves, el método `then` ejecuta la promesa y a su vez usa el _callback_ `resolve` para enviar parametros al _callback_ del método `then`

- Reject: Cuando en la promesa tiene lugar un error, la promesa llama la función `reject`. Ejemplo: Supongamos ahora que no se encuentra el texto que queremos encontrar en el string de bienvenida

```
const promesa = new Promise((resolve, reject) => {
  let txt_bienvenida = "Bienvenido a MisionTIC 2022"

  const charIndex = txt_bienvenida.search("Ciclo 4A")
  if (charIndex !== -1) {
    resolve(`Se encontró una coincidencia en el caracter # ${charIndex}`)
  } else {
    reject(`Error: No se encontro alguna coincidencia`)
  }
})
```

De igual forma, ejecutamos la promesa usando primero el método `then()`:

```
promesa.then( (txtRta) => {console.log(txtRta)} )
```

Sin embargo, para usar el argumento de la función `reject`, ahora llamamos seguidamente el método `catch()`:

```
promesa
  .then((txtRta) => {console.log(txtRta)})
  .catch((textoError) => {console.log(textoError)})
```

## Usando el operador ternario

Del ejemplo anterior, se puede simplificar el condicional así:

```
(charIndex !== -1)
  ? resolve(`Se encontró una coincidencia en el caracter # ${charIndex}`)
  : reject(`Error: No se encontro alguna coincidencia`)
```

## Async y Await

Son de ayuda cuando se quiere resolver una promesa sin llamar el `then` o el `catch`. Se usan cuando en un bloque de código (es decir, en una función) se quieren ejecutar varias promesas.
Se debe entonces, declarar de la siguiente manera.

```
async function nameFunction(){
  await promesa()
}
```

## Peticiones

De ahora en adelante, las peticiones las vamos a realizar por medio de el objeto `fetch` que tiene la capacidad de resolverse mediante una promesa. Ver más en [mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

