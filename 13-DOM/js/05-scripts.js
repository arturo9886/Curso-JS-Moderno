/*querry selector or*/

// la sintaxis para selectores es la misma que las anteiores, una sintaxis tipo CSS.

//puedes ser especificos con los selectores, (#) para los id, ser muy especificos con las clases o los id, y tambine seleccionar etiquetas.

// la diferencia es que queryselectoror pondra todos las clases.

const card = document.querySelectorAll('.card');

console.log(card);

// lo que nos devuelve es un node list, que es muy parecido a un array de elementos. 

//y a los elementos se les conoce como nodos. 

const formularios = document.querySelectorAll('#formulario')

console.log(formulario);

// poner dos ID con el mismo nombre es una mala practica, pero el query selector nos retornara lo ordenado sin darnos error. 

//si un elemento no existe. 

const noexiste = document.querySelectorAll('noexiste');
console.log(noexiste);


// nos retornara un nodelist vacio.
