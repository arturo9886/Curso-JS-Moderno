// en JavaScript también es posible cambiar el CSS de un elemento. También puedes agregar o quitar clases,
const encabezado = document.querySelector('h1');
console.log(encabezado.style)

/*Colocando Style podemos ver todos los estilos disponibles que le podemos poner al elemento seleccionado
Hay que tener en cuenta que las palabras no se separan por (-), sino que la primera palabra seescribe en 
minuscula y la primera letra de la segunda palabra es en mayuscula.
*/

encabezado.style.backgroundColor = 'violet';

encabezado.style.fontFamily = 'arial'

encabezado.style.textTransform = 'uppercase';

/* 
Entonces, las mismas propiedades que tienes en CSS las vas a encontrar en JavaScript.
Con la diferencia de que no llevan el guión y tienen que ser en mayúscula.

La única desventaja que tienes que esto va a ser tu código JavaScript sea más grande ahora.
Muy importante también la apariencia es responsabilidad del código CSS.
Lo que yo recomiendo más en lugar de escribir código de esta forma es agregar o quitar clases.
*/

const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda-clase') // si le pones una coma (,) puedes agregarle otra clase.

card.classList.remove('card');

console.log(card.classList);


