const auto = {
  color: "azul",
  marca: "suzuki",
  cilindraje: 1000,
  getDescripcion: function () {
    return `Auto ${this.marca}, color ${this.color}`
  },
}

function Auto(color, marca, cilindraje) {

  this.color = color
  this.marca = marca
  this.cilindraje = cilindraje

}

Auto.prototype.getDescripcion = function () {
  return `Auto ${this.marca}, color ${this.color}`
}

const auto2 = new Auto("azul","s",1000)



console.log(auto2.getDescripcion())
