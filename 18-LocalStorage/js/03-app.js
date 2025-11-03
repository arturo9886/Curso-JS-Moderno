/* ELIMINAR OBJETOS DEL LOCAL STORAGE.

para eliminar un item del local sotrage se utiliza.

localStorage.removeItem('el item que quieras eliminar') ejemplo.
*/

localStorage.removeItem('nombre')

/* en el caso de localStorage no hay actualizaciones de datos, pero para poder completar el crud que es

Create
Read
Update
Delete.

podemos hacer esto.

Actualizar un registro en local storage.
*/

const mesesArray = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArray)
mesesArray.push('Nuevo Mes')
console.log(mesesArray)
localStorage.setItem('meses',JSON.stringify(mesesArray))

/* lo que se hace aqui en verdad es que simplemente se sobrescribe. */

/* en caso de tambien tenemos localStorage.clear(), lo que hace es que elimina todo el local storage. */