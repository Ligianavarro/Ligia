# Objetos en JS

Recuerdas la definición "JS es un lenguaje orientado a prototipos", ¿será eso lo mismo que lenguaje orientado a objetos (POO)?, resulta que a pesar de que se puede implementar POO, la programación orientada a prototipos permite crear objetos sin tener que crear las clases.
Ver más en [W3School](https://www.w3schools.com/js/js_objects.asp)


## Entonces, ¿se puede aplicar los fundamentos de POO?

1. Abstraer, cualquier entidad se puede representar como un objeto en JS.
2. Jerarquizar, tambien se puede implementar herencia.
3. Modularizar, en este caso, los scripts se pueden organizar en directorios (similar a los paquetes de Java) para crear modulos de código.
4. Encapsular, tambien existen los modificadores de acceso `public` y `private` en la especificación de JS ES6 (2015).

## Conociendo más sobre los prototipos de JS

Debido a que JS es imperativo, es decir, toda las sentencias se ejecutan secuencialmente en un script, es posible hacer un proceso sin necesidad de crear objetos. Sin embargo, JS tiene soporte a objetos, el cual permite crearlos sin necesidad de crear la clase que los define. Por ejemplo,

```
const auto = {color: "azul", marca: "suzuki", cilindraje: 1000}
```

A pesar de que auto es un objeto, en ningún momento tuvimos que crear la clase para auto.
Sin embargo, todos los objetos heredan del prototipo Object.

Los objetos pueden tener métodos, por ejemplo:

```
const auto = {color: "azul", marca: "suzuki", cilindraje: 1000, getDescripcion: function(){ return `Auto ${this.marca}, color ${this.color}`}}
```

Cuando queremos hacer referencia a los mismos atributos o métodos del objeto usamos `this`.
Revisa la [guía de Mozilla](https://developer.mozilla.org/es/docs/conflicting/Learn/JavaScript/Objects/Classes_in_JavaScript) para crear objetos con funciones.

## Prototipos o Clases

A diferencia de Java, en JS se usan prototipos (son la análogia de las clases), estos prototipos son objetos que tienen atributos y métodos, los cuales definen como deben ser los objetos que se instancian a partir de los prototipos.

La función constructora tiene asociada siempre una propiedad llamada `prototype`. Esta propiedad no es más que otro objeto donde tiene lugar la herencia.

Revisa la [guía de Mozilla](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes), no hay mejor forma de describir de que se tratan los prototipos como lo hacen en Mozilla.

## Aplicando herencia

Suponiendo que tenemos la siguiente función constructora:

```
function Persona(nombrePila, apellido, edad, genero, intereses) {
  this.nombre = {
    nombrePila,
    apellido
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;
};

Persona.prototype.saludo = function() {
  alert('¡Hola! soy ' + this.nombre.nombrePila + '.');
};
```

Si se quiere crear una nueva clase constructora para la entidad Profesor, donde el profesor tiene todos los atributos de persona y adicionalmente el atributo materia, entonces, la herencia se realiza llamando el constructor a heredar mediante el método call()

```
function Profesor(nombrePila, apellido, edad, genero, intereses, materia) {
  Person.call(this, nombrePila, apellido, edad, genero, intereses);

  this.materia = materia;
}
```

Donde, call en pocas palabras ejecuta el constructor Person usando el this y los demás argumentos. Vér mas en [Mozilla](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Classes_in_JavaScript).

## Desestructuración de objetos

Es una declaración en la que se extraen los diferentes miembros de un objeto. Suponiendo que queremos extraer los datos color y cilindraje del ejemplo anterior, la desestructuración se ve así:

```
const {color, cilindraje} = auto
```

entonces, color y cilindraje son constantes con los valores definidos en auto. Ahora analiza la siguiente linea de código.

```
const {color, cilindraje, pasajeros} = auto
```

## Desestructuracion en arreglos

De igual forma se puede realizar en los arreglos la desestructuración:

```
const fechas = ["01/10/2022", "03/10/2022", "05/10/2022"]
```

entonces, para extraer las fechas se procede como sigue:

```
const [f1, f2, f3] = fechas
```

Opcionalmente, para seleccionar una fecha se tiene:

```
const [ , , f3] = fechas
```

