const auto = {
  color: "blanco",
  pasajeros: 5,
  valvulas: 16,
  marca: "toyota",
  obtenerCaracteristicas: function () {
    const texto = `El automovil de marca ${ 5+5 } tiene ${this.valvulas} valvulas. `
    return texto
  },
}

console.log(auto.obtenerCaracteristicas())

