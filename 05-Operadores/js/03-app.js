//COMPARAR NULL Y UNDEFINED EN JAVASCRIPT

/* ES IMPORTANTE TENER EN CUENTA DE QUE HAY DEMAS TIPOS DE DATOS PRIMITIVOS
YA QUE HAY BOOLEANS Y TAMBIEN HAY UN PAR LLAMADO UNDEFINES Y NULL.*/

// DATO UNDEFINED////////////////////////////////////
let numero;

console.log(numero);

// AL ABRIR LA CONSOLA NOS APARECE UNDEFINED PORQUE EL VALOR DE LA VARIABLE NO ESTA DEFINIDO.

console.log(typeof numero);

// buscar el tipo de dacto para confirmar que es undefined.

//TIPO DE DATO NULL!!!//////////////////////////////////////

// normalmente el tipo de dato null, lo asignamos nosotros EJM.

let numero2 = null;

console.log(numero2);

console.log(typeof numero2);

// al buscar el tipo de valor, aparece como objeto, eso es porque ECMA dice que null tiene que ser un objeto.

/* IMPORTANTE!!!!!//////////////////////////////////////////////
es necesario tener en cuenta que si comparamos una varible indefinida y una variable null, dara como resultado que si son iguales.
por eso es necesario hacer una comparacion estricta, ya que puede llegar a ejecutar un codigo no deseado o algun 
comportamiento extrano, por ejemplo. */

//COMPARADOR NORMAL

console.log(numero == numero2);

// aca nos dice que estan iguales cuando no es asi. 

//COMPARACION ESTRICTA.

console.log(numero === numero2);

// aca nos dira que la comparacion y la igualdad no es verdadera, porque tiene en cuenta el tipo de dato.