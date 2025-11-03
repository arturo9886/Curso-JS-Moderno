/* para poder tener un valor de local storage utilizamos:
localStorage.getItem y decidimos lo que tenamos en storage.
*/ 

const nombre = localStorage.getItem('nombre')
console.log(nombre)


const productoJason = localStorage.getItem("producto");
console.log(productoJason)

/* para poder devolver los datos a su estado original, tenemos que usar.
JSON.parse para poder convertirlo a su estado original.
*/

const objetoNormal = JSON.parse(localStorage.getItem('producto'))

console.log(objetoNormal)





/* si no hay un objeto o llave en el lcoal storage nos dara null. */