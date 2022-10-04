# Teoría para el eje temático 1, introducción a JS

En este documento encontrarán a continuación una guía de cada temática.

# ¿Qué es y porqué JS?​

JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa (por ejemplo programación funcional). ([*Tomado de Mozilla*](https://developer.mozilla.org/es/docs/Web/JavaScript))

## ¿Donde se ejecuta JS?

Debido a que, las páginas HTML van siempre acompañadas de un script JS, los scripts se ejecutan del lado del cliente. (Es como ejecutar un script de python por consola de comandos)

### Si en Python es necesario descargar el SDK para ejecutar un script, ¿Porqué en JS no es necesario?

Todos los navegadores tienen un motor de ejecución de código JS. Chrome usa V8, Mozilla usa SpiderMonkey, Safari usa JavaScriptCore, etc. El cual el motor es el programa que compila el script a lenguaje de maquina y lo ejecuta.

# Bases del lenguaje​

## Empezando con la declaración de variables

Las variables se declaran usando `const` o `let` preferiblemente, un ejemplo de declaración y asignación es:

```
const miNombre = "pepito"
```

En la mayoría de los casos no es necesario usar `;` para cerrar una sentencia.

<br/>

Entonces, ¿porqué no usar el `var`?

El var no se limita a los scope `{}`, es una variable totalmente global en nuestro código. Además, permite asignar la variable y declararla después. ¡Qué horror!

## Tipado

JS infiere el tipo de cada variable. ver más en [Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

## null vs undefined

- undefined significa que una variable ha sido declarada pero no se le ha asignado un valor
- null es un valor para asignar. Al igual que en Java, null representa un valor vacio (o en pocas palabras nada).



## Visita las guías del curso para complementar:

1. [Guía introducción a JS](https://lms.uis.edu.co/mintic2022/libros/2022/app-web/C4AM1%20-%20Introduccion%20a%20JavaScript.pdf)

2. [Guía Resumen JS](https://lms.uis.edu.co/mintic2022/libros/2022/app-web/C4AM1%20-%20Recurso%20Educativo%20Digital.pdf)

