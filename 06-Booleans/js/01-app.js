// BOOLEANS

// los tipos de datos booleans tienen solo 2 valores, true o false.

const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

// console.log(boolean1);
// console.log(boolean2);

// confirmando el tipo de dato.

// console.log(typeof boolean1);
// console.log(typeof boolean2);

// nos confirma que es un boolean. 

//COMPARANDO BOOLEANOS

console.log(boolean1 == boolean3);

// EL COMPARADOR SIMPLE CON LOS BOOLEANS ES MAS ESTRICTO, YA QUE SI COMPARAMOS UN BOOLEAN CON UN STRING NOS DARA FALSE SIEMPRE.

// el comprarador estricto ahce lo mismo.

console.log(boolean1 === boolean3);

//HAY MAS MANERAS DE CREAR OTROS BOOLEANS, la manera new boolean ya no se utiliza y no es recomendada, 
// OTRA MANERA que se usa es simplemene quitar el new y escribir Boolean con la B mayuscula. porque
// Lo que pasa es que crea un objeto booleano y uno una variable booleana.

// ACTUALIZACION OTRA MANERA DE LLAMAR UNA VARIABLE BOOLEANA ES ESTA.

const boolean4 = new Boolean(true);
const boolean5 = Boolean(true);

console.log(boolean4);
console.log(boolean5);

