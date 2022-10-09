const promesa = new Promise( (resolve, reject)=>{

  const textoBienvenida = "Bienvenidos a MISIONTIC"

  if( textoBienvenida.match("2020") ){
    resolve("OK!", 1)
  } else{
    reject("Hubo un error!")
  }

})

promesa
  .then( (txtRta, number) => { console.log(txtRta)}  )
  .catch( (err) => {console.log(err)} )
