// si escribes math en la consola, nos dara una una lista de funciones matematicas.

//para acceder a las funciones escribimos math. (la funcion que queramos) (entre parentecis el numero). EJM.

Math.floor(2.3);

//EJERCICIOS

let resultado

//PI
resultado = Math.PI;

console.log(resultado);

//redondear

resultado = Math.round(2.99);

console.log(resultado);

//redondear hacia arriba, este metodo lo que hace es redondear forzosamente hacia arriba cualquier numero que sea mayor a x.0, por ejemplo x.1

resultado = Math.ceil(2.5);

//redondear hacia abajo forzosamente.

resultado = Math.floor(2.9);

console.log(resultado);

//Raiz cuadrada
resultado = Math.sqrt(144);

console.log(resultado);

//VALOR ABSOLUTO

resultado = Math.abs(-500);

console.log(resultado);

// potencias matematica

resultado = Math.pow(3, 4);

console.log(resultado);

//Minimo

resultado = Math.min(3,5,6,4,6,7);

console.log(resultado);

//Maximo

resultado = Math.max(23,43,45,65,67,87,89,9,);

console.log(resultado);

//ALEATORIO RARAMENTE DA NUMEROS ENTEROS.

resultado = Math.random(); 
console.log(resultado);

///////////////////////////////////////////////////TAMIEN PODEMOS JUNTAr LAS FUNCIONES/////////////////////////////////////////////////////

// Aleatorio dentro de un rango.

resultado = Math.floor(Math.random()*20)

console.log(resultado);