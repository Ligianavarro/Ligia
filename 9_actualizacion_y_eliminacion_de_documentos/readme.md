# Update y Delete

Generalmente, los metodos Create son los más complicados. Para actualizar es necesario hacer la consulta primero del objeto a actualizar y para borrar, tambien. Entonces, puedes usar los métodos `updateOne(<filtro>,<objeto>)`, `updateMany(<filtro>,<objeto>)`, `deleteOne(<filtro>)` y `deleteMany(<filtro>)`. Donde `<filtro>` es el objeto usado para consultar como lo hacemos con find y `<objeto>` es el objeto que se pasa con datos actualizados.
