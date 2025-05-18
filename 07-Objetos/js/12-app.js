// utilizar object constructor para poder crear objetos de otra manera. la primera manera de crearse es utilizando
// onject literal.

const producto = {
    nombre: 'monitor de 20"',
    precio: 300,
    disponible: true,
}

// object constructor.

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto ('monitor de 24 pulgadas', 500);

console.log(producto2)

// en caso de querer utilizar la misma temnplate pero con otros valores en las propiedades, simplemente cambianos el nombre de la constante. 

const producto3 = new Producto ('tablet asus', 5000);

console.log(producto3);


// como podemos ver crea el objeto, aunque no salga el termino objet en la consola, simplemente cambia el nombre de object, por el de producto.
// asi sera por cualquier palabra que pongamos tanto en la creacion de la constante y en la funcion. 

// el object constructor es mas dinamico y es un tipo de programacion mas orientada a objhetos.m
