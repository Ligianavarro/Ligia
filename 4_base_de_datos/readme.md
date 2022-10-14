# Bases de datos

Las bases de datos en MongoDB, tienen caracteristicas muy peculiares. Para realizar consultas, inserciones o actualizaciones en un registro debemos tener en cuenta que el lenguaje usado es Javascript

## Insertando un objeto

Crea una base de datos en mongo. Seguidamente en Studio 3T usa intellishell para ejecutar sentencias. Estas sentencias siempre empiezan con el uso del objeto `db`. Si queremos insertar un objeto en la colección usuarios entonces: 

```
db.usuarios.insertOne({nombre: "pepe", cedula: "123456"})
```

No es más que seguir usando JS. [Revisa la documentación](https://www.mongodb.com/docs/manual/crud/)

# Consultando objetos

Mongo tiene una gran [documentación facil de leer](https://www.mongodb.com/docs/manual/tutorial/query-documents/), procura ver los ejemplos para mongo shell.

Las consultas se realizan en una colección y usando el método `findOne` o `findMany` (Como lo indica el nombre, busca una coincidencia o varias en los datos).