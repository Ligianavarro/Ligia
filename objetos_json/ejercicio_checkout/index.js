function Person(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

const persona1 = new Person()

const peticion = new XMLHttpRequest()
peticion.open("GET", "https://www.datos.gov.co/resource/xdk5-pm3f.json")
peticion.responseType = "json"
peticion.send()
peticion.onload = function () {

  const res = peticion.response

  //    let auxDpt = res.[i].departamento
  const dptos = [];
  dptos.from()
  for (let i = 0; i < res.length; i++) {
    document.getElementById("ciudad").innerHTML += `<option>${res[i].municipio}</option>`;

    let auxDpt = dptos.find((elemento) => { return res[i].departamento === elemento })
    dptos.push(res[i].departamento)
    if (auxDpt !== res[i].departamento)
      document.getElementById("departamento").innerHTML += `<option>${res[i].departamento}</option>`;
  }

  function callback(value, index, obj) {
    return true
  }


  let arreglo = res.find((value, index, obj) => {
    return value.departamento === "Cundinamarca"
  })

  console.log(
    (document.getElementById("departamento").innerHTML +=
      "<option>Santander</option>")
  )
}

console.log("fin del programa")
