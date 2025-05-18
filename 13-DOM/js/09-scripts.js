// ELIMINAR ELEMENTOS DEL DOM.

// eso significan los cambios o eliminar elementos de las paginas web, por ejemplo quitar un like, borrar una foto, ETC.

/*
Existen dos maneras de hacerlo:
1- Eliminando un elemento por si mismo.
2-Eliminarlo desde el padre.
*/

// const primerEnlace = document.querySelector('a');

// console.log(primerEnlace);

//tenemos acceso a un metodo o funcion, que es (remove);

// primerEnlace.remove();

// la otra forma es eliminarla desde el padre.

const segundoEnlace = document.querySelector('.navegacion');

console.log(segundoEnlace.children[3]);

segundoEnlace.removeChild(segundoEnlace.children[3]); // asi estamos eliminando algun elemento del dom, desde el elemento padre. 

