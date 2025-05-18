// .concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre'];

const meses3 = meses.concat(meses2)

// tambien poniendo una coma, puedes concatenar mas de un Array.


console.log(meses3);

// Existe otra manera de hacerlo que es con spread operator.

const resultado2 = [...meses,...meses2];

console.log(resultado2)

//se pueden concatenar strings, pero por stpread perator tendra problemas de texto. 

//EL ORDEN DE LOS VALORES ES MUY IMPORTANTE AL CONCATENAR STRINGS.