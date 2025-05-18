const producto = {
    nombre: 'monitor de 20"',
    precio:300,
    disponibilidad: true,
};

// const nombre = producto.nombre;
// console.log(nombre);

//destructuring

const {nombre,precio,disponibilidad} = producto;

console.log(disponibilidad);

//destructuring con arreglos

const numeros = [10,20,30,40,50]

const [primero,segundo] = numeros

console.log(segundo);

// en los destructuring de arrays, su valor esta definido por la posicion, podemos llamarlas como queramos, con tal de que tengamos en cuenta la posicion de los
// valores del array. 

// para acceder al tercer valor por ejemplo, definimos valores hasta llegar al solicitado,pero hay una manera de tomar un valor en especifico. 
//EJM:

const [, , tercero] = numeros;

// como vemos aqui lo que hacemos es que ponemos comas para saltar los valores que no queremos declarar hasta llegar a la posicion que queremos. 

//si queremos en caso de crear una variable con distintos valores de un arreglo, ponemos lo siguente.

const [primeroo, ,  ...cuarto]= numeros;

console.log (primeroo);

// como podemos ver, utilizamos spread operator para agarrar el conjunto de numeros que queramos definir,
// dato importante el spread operator, debe ser la ultima variable a declarar, porque toma todos los valores que no son parte del destructuring. 