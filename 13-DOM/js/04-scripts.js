/* query slector
query selector actua igual a getelementbyid, es decir que solo retornara un elemento y 
tambien retornara el primer elementoq ue encuentre en caso de que hayan muchos elementos con el mismo nombre.

este tiene la caracteristica que tambien puedes seleccionar clases. hay que tener en cuenta que query selector tiene una sintaxis igual a la de CSS*/

const card = document.querySelector('.card')
console.log(card);

//podemos tneer selectores especificos como CSS

const info = document.querySelector('.premium .info')
console.log(info);


//seleccionar el segundo card de hospedaje
 const segundocard = document.querySelector('section.hospedaje .card:nth-child(2)');

 console.log(segundocard)

//query selector puede seleccionar id's con la misma sintaxis de CSS:

const formulario = document.querySelector('.contenido-hero #formulario');

console.log(formulario);

//seleccionar elementos HTML

const navegacion = document.querySelector('nav');
console.log(navegacion)