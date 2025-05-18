//agregar o eliminar propiedades de un objeto.

const producto ={
    nombre: ' monitor de 20" ',
    precio:300,
    disponible: true,
}

//COMO AGREGAR

//PARA AGREGAR UNA PROPIEDAD ESCRIBIMOS EL NOMBRE DEL OBJETO Y AGREGAMOS UN (.) Y PONEMOS EL NOMBRE DE LA PROPIEDAD / VARIABLE A AGREGAR JUNTO CON EL VALOR.

producto.imagen = ("imagen.jpg")

console.log(producto);


//BORRAR PROPIEDADES

//PARA BORRAR UNA PROPIEDAD ES NECESARIO ESCRIBIR DELETE + EL NOMBRE DEL OBJETO + (.) + EL NOMBRE DE EL ATRIBUTO / VARIABLE A BORRAR.

delete producto.disponible;

console.log(producto);