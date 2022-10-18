# Read

Para leer es necesario usar el método findOne() o find() según el caso. Si queremos encontrar el usario con el número de documento "123456" entonces:

```
UsuarioModel.findOne({
    numeroDocumento: "123456"
  })
  .then((respuestaDeBD) => { console.log("Se encontro el usuario con el documento: " + respuestaDeBD.numeroDocumento)})
  .catch( () => { console.log("No se encontro el usuario")})
```

Es posible leer objetos referenciados para que se vean como objeto anidados y no el ObjectID. Entonces para cita se tiene:

```
CitaModel.findOne({
    codigoUnico: "123-PACIENTE-blablabla123",
  })
  .populate('usuario')
  .then((respuestaDeBD) => { console.log("Se encontro la cita con el usuario: " + respuestaDeBD.usuario.numeroDocumento)})
  .catch( () => { console.log("No se encontro")}).