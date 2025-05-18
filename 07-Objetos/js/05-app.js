// CREAR OBJETOS DENTRO DE OBJETOS
//PARA CREAR UN OBJETO DENTRO DE OTRO OBJETO 

//UN OBJETO QUE CONTIENE OTROS OBJETOS ES UN OBJETO ANIDADO

const producto = {
    nombre: 'monitor de 20"',
    precio: 300,
    disponible: true,

    informacion: {
        peso: "1kg",
        medida: "1m",

        fabricacion: {
            pais: "china",
        }
    }
}

console.log(producto);

//TAMBIEN PODEMOS ACCEDER A LA SUB PROPIEDAD ESPECIFICA.

console.log(producto.informacion);

//tambine podemos llamar a la propiedad del sub-objeto, ejm:

console.log(producto.informacion);

console.log(producto.informacion.medida);

console.log(producto.informacion.fabricacion.pais);
