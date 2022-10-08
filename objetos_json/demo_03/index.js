
const mostrarRiesgoIMC = (callbackIMC) => {

  console.log(callbackIMC)

  const c = callbackIMC({peso: 60, estatura: 1.7}) 

  console.log(c)

  if (c > 18.5 && c < 24.9){
    console.log("La clasificación es normal")
  }

}





function calcularIMC( {peso, estatura} ) {

  return imc = peso/estatura**2

} 

mostrarRiesgoIMC( calcularIMC({peso: 60, estatura: 1.7}) )


// FUNCION CONSTRUCTORA
function PersonaC({a, n} , edad) {

  this.apellido = a
  this.nombre = n
  this.edad = edad

} 

/*const PersonaC = (nombre, edad) => {
  this.nombre = nombre
  this.edad = edad
}*/

function Medico(nombre, edad, numTarjPrf){
  PersonaC.call(this, nombre, edad)

  this.numTarjPrf = numTarjPrf

}

const persona1 = new PersonaC({n: "Nestor", a: "Perez" }, 22)

// FUNCION
/* function Persona(nombre, edad) {
  return {nombre, edad}
} */

const Persona = (nombre, edad) => {
  return {nombre, edad}
}

const persona2 = Persona("Leidy", 25)

const medico1 = new Medico("pepe", 40, "112345")