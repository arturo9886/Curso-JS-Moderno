// get element by class name. 

// esta es una manera un poco obsoleta de llamar u documento, pero es bueno sabernla en caso de. 

const header = document.getElementsByClassName ('header'); // getelementby es un metodo.

console.log(header)

// es importante escribir las clases en los metodos como se tienen puestas en el HTMl ya que si no es asi no funcionara. 

const hero = document.getElementsByClassName('hero');

console.log(hero)

// si las clases existen mas de una vez
const contenedores = document.getElementsByClassName('contenedor')

console.log(contenedores);

//creara un html collection de las classes que contienen la palabra contenedor., 


// si una clase no existe

const noexiste = document.getElementsByClassName('no-existe');
console.log(noexiste);