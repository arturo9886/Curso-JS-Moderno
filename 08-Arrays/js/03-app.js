// como acceder a todos los elementos de un arreglo. 

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

console.table(meses);

// forma normal de llamar o acceder a los valores de un array. 

console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);
console.table(meses[3]);
console.table(meses[4]);

// hay una manera deacceder a todos los elementos.

//no todas las personas tienen la misma cantidad de valores en un arreglo, asi que hay una
// forma de tener una cantidad variable en un arreglo.

// cuanto mide el areglo.

console.log(meses.length);

// lenght lo que hace es que simplemente dice la cantidad de valores que hay en el arreglo.
// esto nos permite escribir un codigo que se ejecute solamente la cantidad de veces que hay en un arreglo. 

// para recorrer el arreglo se utiliza un iterador que es (for loop).

for (let i=0; i < meses.length; i++){
    
    console.log(i);
}

// este iterador significa que el codigo va a correr la cantidad menor a la longitud del areglo. 
// si ponemos mayor estaria excediendo a partes que no existen y la consola nos marcara undefines. 

// la razon por la que le ponemos un let es porque si le ponemos un const, se ira incrementando las veces que el codigo se ejecute. 

// por eso es importante que se ejecute en base al valor menor del lengh, porque el valor empieza desde 0 y simplemente se limitara al largo del array o la cantidad de valores.

// para simplemente mostrar los valores, en el console.log agregamos meses en la posicion de i: console.log(meses[i]) EJM.

for (let i=0; i < meses.length; i++){
    
    console.log(meses[i]);
}

// de esta manera nos mostrara el valor del el array y no el de las posiciones. 

// de esta manera funcionan los carritos de compras. 

/* PRUEBA
const array = [] //array vacio

let cantidad = parseInt (prompt('cuantos elementos quieres agregar?'))

for (let i=0; i < cantidad; i++){
    let valor = prompt(`ingresa el valor #${i+1}:`)
    array.push(valor);
}

alert ("arreglo de string: " + array);2
*/

