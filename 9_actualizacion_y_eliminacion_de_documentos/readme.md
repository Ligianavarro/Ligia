# Update y Delete

Generalmente, los metodos Create son los más complicados. Para actualizar es necesario hacer la consulta primero del objeto a actualizar y para borrar, tambien. Entonces, puedes usar los métodos `updateOne(<filtro>,<objeto>)`, `updateMany(<filtro>,<objeto>)`, `deleteOne(<filtro>)` y `deleteMany(<filtro>)`. Donde `<filtro>` es el objeto usado para consultar como lo hacemos con find y `<objeto>` es el objeto que se pasa con datos actualizados.

## Actualizando un archivo

La actualización de un archivo requiere volver a cargar en el servidor. Puesto que cada archivo esta relacionado con una colección es necesario definir cuantas imagenes puede tener una colección. Cuando se maneja una gran cantidad de archivos en el sistema, es necesario optimizar para que, cuando se suba un archivo se borra el anterior que ya no se este usando (para borrar archivos usa `fs.unlink(ruta)` donde `ruta`, como el nombre lo indica es un objeto path que indica la ruta del archivo a borrar).
