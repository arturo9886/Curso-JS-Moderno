
/* CORTAR ESPACIOS DE LOS STRINGS
En este proceso lo que se hace es que se utiiza el metodo que se llama trimstart y trimend para eliminar los espacios
al final, normalmente la utilidad es para que los formularios cuando pasen la valicadion, le agregara espacios en blanco, 
entonces de esa manera para eliminar los espacios y simplemente obtener datos reales cortamos los espacios.
*/

const producto = ("                 monitor de 20 pulgadas                   ");
console.log (producto);
console.log(producto.length);

console.log(producto.trimStart());

/* tambien podemos poner distintos metodos encadenados simplemente poniendo el metodo sin hacer espacios, por ejemplo*/

console.log(producto.trimStart().trimEnd());

//antes habia una opcion que simplemente borra los espacios en blanco de ambas direcciones que se llama trim, ejemplo.

console.log(producto.trim());