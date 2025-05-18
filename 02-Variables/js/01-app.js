
//iniciando una variable.
var producto="monitor de 24 pulgadas";
console.log(producto);

// Las variables se pueden reasignar.
producto = "monitor de 19 pulgadas";
console.log(producto);

/* Las variables pueden tener valor numerico, eso es porque
javascrypt es un lenguaje dinamico y no de tipado */
producto = "24";
console.log(producto);

// Las variables se pueden inicializar sin un valor y despues asignarle uno, EJM:

var disponible;
disponible = true;

disponible = false;

// Es pobible inicializar multiples variables sin la necesidad de poner var en casa variable, EJM:

var 
jose = "agusto",
manuel = "corporan", 
miguel = 'angel';

//llamando las distintas vqariables iniciadas.
console.log (miguel);


/* Las variables tambien tienen reglas, una variable puede contener:
-letras
-Guiones bajos
-numeros (pero las variables no pueden iniciar con un numero) EJM:*/

var
numero_01,
_usuarios_01,
_01,
usuario01;

/* La forma mas comun de llamar una variable en javascript es usando Camelcase.
de esta matera simplemente ponemos la primera letra de la segunda palabra en mayuscula */

var nombreProducto


/* Existe otra manera que es la del PascalCase, que es la primera letra de cada palabra diferente
sea mayuscula */

var NombreProducto