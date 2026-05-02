// Eliminar elementos con localStorage.

/*Para eliminar elementos de local storage utilizamos 
localStorage.removeItem()
*/

localStorage.removeItem('nombre');


//Actualizar un registro.
const mesesArray = JSON.parse(localStorage.getItem('meses')) // obtenemos el objeto de manera nativa usando parse

mesesArray.push('nuevo mes') // Usamos array methods porque al estar estar en su valor nativo podemos modificarlo

console.log(mesesArray) // lo llamamos para confirmar que se hizo el cambio al string. 

localStorage.setItem('meses',JSON.stringify(mesesArray)) // tenemos que actualizar el item del local storage usando set item y volviendolo un string con stringify.

//Asi pudimos usar el local storage.

/*
    Para eliminar un localstorage utilizamos 
    localStorage.clear()
*/


