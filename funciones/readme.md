# Funciones en JS

Las funciones son bloques de código reutilizables, tienen entradas (llamadas argmentos de la función) y salidas (o retorno). En JS es posible crear una función como:

```
function suma(a,b){
  return a+b
}
```

Donde el nombre de la funcion en este caso es suma, el cual a partir de dos números `a` y `b` realiza la suma y retorna el resultado. ¿Fácil , no?

## Funciones de flecha

Las funciones tambien se suelen crear en el formato flecha. por lo que, la función suma se vería de la siguiente manera:

```
const suma = ()=>{
  return a+b
}
```

## Desestructuración de objetos en argumentos de funciones

Suponiendo que tenemos una funcion donde un argumento es un objeto:

```

const persona = {peso: 60, estatura: 1.70}

const calcularIMC = (persona)=>{

}
```

Entonces, podemos realizar la desestructuración directamente en el argumento de la función:

```
const calcularIMC = ({peso, estatura})=>{

  return imc = peso/estatura**2

}
```

## Funciones Callback

Normalmente, hemos visto que los argumentos de una función pueden ser objetos, variables o constantes. Ahora, con JS podemos tener una función como argumento.
*Ver la demostración 1 de funciones.*