// como acceder a los valores de un arreglo.

const numeros = [10, 20, 30, 40, 50];

console.log (numeros);

// hay una manera de 

console.table (numeros);

//normalmente esta manera se utiliza para uno poder ver arreglos complejos. 
// en caso de querer a acceder al arreglo o simplemente acceder al valorde un arreglo.

// acceder al arreglo.m

console.log (numeros[2]);

// en la consola, nos aparecera simplemente nos mostrara la posicion numero 2.
// debemos de recordar que en los arreglos hay posiciones y valores. 

// es bueno expanderlos usando el console.table para poder ver la posicon exacta de mejor manera. 

// para acceder al arreglo d eun arreglo, debemos llamar primero la posicon del arreglo y la subposicon del valor que queremos. ejm.

const arreglo2 = [1, 2, 3, 4, 5, [6, 7, 8]];

console.log (arreglo2 [5][2]);

// debemos poner la sub posicon al lado de la posicion del arreglo que queremos llamar. 