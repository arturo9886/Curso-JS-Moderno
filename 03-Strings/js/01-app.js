/*  los strings son cadenas de textoq a las que se le puede asignar una variable.

    normalmente los strings son representaciones de los textos.
*/

/*
    Existen 3 maneras de crear una cadena de texto primitivo
*/

//  La que siempre se usa que es simplemente poniendo el valor de texto (string)
const producto = ("television");

//  utilizando la funcion string antes de poner el valor, es simplemente lo mismo solo es poner string y ya
const producto2 = String("television");


/*
    utilizando un string como objeto, esto normalmente se usa para agregar funciones adicionales normalmente no se usa
    no es recomendado que se use porque es una fomra muy obsoleta de indicar un valor string. 
*/

const producto3 = new string("monitor de 23 pulgadas");

 /*
    hay que tener en cuenta a la hora de utilizar las comillas porque las comillas siempre terminaran donde se encuentre
    la sigueinte comilla, y si existe otra comilla nos dara error. para eso se utiliza el concepto

    ESCAPED QUOTES, que es s  implemente utilizar un backslash antes de la comilla que querramos usar, eso hara que 
    indique a la comilla que no cerrara ahi y cerrara en la siguiente. 

    Por ejemplo:
 */

const producto4 = ("television de 24\"");

console.log (producto);

console.log (producto2);

console.log (producto3);

console.log (producto4)