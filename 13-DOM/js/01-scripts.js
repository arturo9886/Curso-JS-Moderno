// en la consola tenemos acceso a un objeto que se llama document, ese document es todo el html que tenemos en la pagina web. 
// siempre haremos referencias para seleccionar elementos con el objeto document.

let elemento

elemento = document

elemento = document.all;

elemento = document.head;

elemento = document.body;

elemento  = document.domain;

elemento = document.forms; // retorna todos los formularios en la pagina.

elemento = document.forms [0].id;

elemento = document.forms [0].method;

elemento = document.forms [0].classList; // te trae todas las clases como si fuera un arreglo. 

elemento = document.forms [0].action;

elemento = document.links;

elemento = document.links[4];

elemento = document.links[4].classList;

elemento = document.links[4].className; //   te trae todas las clases como si fuera un string. 

elemento = document.images;

elemento = document.scripts;

console.log(elemento);

//podemos seleccionar todos los elementos del html

// los html collection es un array con la informacion retornada.

//todo html reside en el document y podemos acceder a todo su contenido.