// ASIGNAR VALORES DE UN OBJETO A UNA VARIABLE.

const producto = {
    nombre: 'monitor de 10"',
    precio:300,
    disponible:true,
}

// para hacer la asignacion se utiliza algo conocido como object destucturing.

/*lo que hacemos es que creamos la variable, pero a diferencia del procedimiento normal lo que hacemos es que despues de 
poner el const, let o var, abrimos llaves y seleccionamos la propiedad que queremos del objeto y despues ponemos 
un signo de igual y ponemos el nombre del objeto.

(const, let, var) + {nombre de la propiedad} + (=) + nombre del objeto.

EJM:

*/

/*
const {nombre} = producto;
const{precio} = producto;
const {disponible} = producto;


console.log(nombre);
console.log(precio);
console.log(disponible);

*/

// hay una manera mas facil que es simplemente en las llaves colocar el nombre de las propiedadas deseadas a extraer. 

const {nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
