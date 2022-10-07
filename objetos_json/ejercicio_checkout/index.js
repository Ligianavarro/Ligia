
const peticion = new XMLHttpRequest()

peticion.open("GET","https://www.datos.gov.co/resource/xdk5-pm3f.json")
peticion.responseType = "json"
peticion.send()

peticion.onload = function(){

  //console.log(peticion)<option>Bucaramanga</option>

  let selectCiudad = "<option value=''>Selecciona...</option>"
  let selectDepartamento = "<option value=''>Selecciona...</option>"

  const datos = peticion.response


  datos.sort( function(a,b){ 

    return a.departamento - b.departamento
    
   } )

  console.log(datos)

  for (let i = 1; i < datos.length; i++) {

    selectCiudad += `<option>${ datos[i].municipio }</option>`

    if (datos[i].departamento !== datos[i-1].departamento ){
      selectDepartamento += `<option>${ datos[i].departamento }</option>`
    }
    
  }

  document.getElementById("ciudad").innerHTML = selectCiudad
  document.getElementById("departamento").innerHTML = selectDepartamento

  //console.log(selectCiudad)

}

console.log("Fin del programa")