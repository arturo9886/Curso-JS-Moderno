//STRING METHODS

/*  los metodos para strings son funciones integradas que se usan para poder
    manipular los strings, analizar, trabajar con las cadenas de textos. 
    estos metodos estan disponibles tanto para los strings primitivos como
    para los objetos strings.
*/

// saber la cantidad de letras que tiene una palabra.

/*  para poder saber la cantidad de caracteres que tiene un string o cadena de texto utilizamos
    la funcion . leght EJM.EJM
*/

const monitor = ("monitor de 24\"")

console.log (monitor.length);

// hay que tener en cuenta que .lenght es una propiedad que no usa parentesis. la mayoria usa. 

// identificadores de palabras

/* 
    para poder usar esta funcion que nos ayudara para poder identificar palabras claves 
    o localizarlas o mostrar en que punto esta dicha palabra clave, normalmente esto se utiliza
    en amazon para el buscador. ESTA FUNCION SE LLAMA indexoff

*/

const monitor2 = ('monitor de 50"');

console.log(monitor2.indexOf('50"'));

/*  existe otra funcion que es mas util que indexOf, esta se llama include, 
    esta funcion nos dira si la plabra que estamos exigiendo esta incluida 
    en la variable. EJM.
*/

const monitor3 = ("monitor asus rog");

console.log (monitor3.includes("rog"));

const prueba = prompt ("pon la palabra que quieres contar");

alert ("la palabra contiene " + prueba.length + " caracteres");

