function Persona(nombres, fechaNacimiento, edad){

  this.name = nombres
  this.date = {fechaNacimiento, edad}

}

Persona.prototype.saludo = function() {
  alert('¡Hola! soy ' + this.date.edad + '.');
}


function Estudiante(nombres, fechaNacimiento, edad, genero) {
  
  Persona.call(this, nombres, fechaNacimiento, edad)

  this.genero = genero

}

const persona1 = new Persona("Juan", "11-11-1990", 32)
const estudiante1 = new Estudiante("Pepito", "11-11-1990", 32, "M")

const { date, genero } = estudiante1

console.log( estudiante1 )