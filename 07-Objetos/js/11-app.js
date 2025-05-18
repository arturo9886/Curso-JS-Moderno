//funciones en objetos y acceder a sus variables. 

// la funcion this es lo que se utiliza para en caso de usar las variables dentro de nuestro objeto.
//se refuere a los valores que existen en el mismo objetos, en vez de buscarlos afuera.


const producto = {
    nombre: 'monitor de 20"',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto: ${this.nombre} tiene un precio de: ${this.precio}` );
    }
}

producto.mostrarInfo();

console.log (producto);


// como podemos ver si creamos otro objeto, usara las mismas propiedades de ese mismo objeto que acabamos de crear. 
// EJM

const producto2 = {
    nombre: 'tablet',
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto: ${this.nombre} tiene un precio de: ${this.precio}` );
    }
}

console.log(producto2);

// post data: no puedes marcar una variable como this. 