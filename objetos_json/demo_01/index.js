const year = 1999

const auto = {
  color: "azul",
  pasajeros: 5,
  year: 2020,
  obtenerDescripcion: function () { 
    const texto = `El automovil es año ${ this.year } y es de color ${ this.color } `
    return texto
  }
}


console.log(auto.obtenerDescripcion())
