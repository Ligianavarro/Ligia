

const mostrarRiesgo = (callback) => {


  const imc = callback({peso: 80, estatura: 1.7, edad: 27})

  if (imc > 18.5 && imc < 24.5) {
    return "promedio"
  } else if (imc > 25 && imc < 29) {
    return "aumentado"
  }
}

console.log(mostrarRiesgo((objeto) => objeto.peso / objeto.estatura ** 2))
