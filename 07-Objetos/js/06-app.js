// DESTRUCTING DE OBJETOS ANIDADOS

const producto = {
    nombre: 'Monitor de 20',
    precio:300,
    disponibilidad:true,

    informacion:
    {
        peso:"1kg",
        medida:"1m",

        fabricacion:
        {
            pais:"china",
            
        }
    }
}

//const { nombre } = producto;

//console.log(nombre);

/*para poder tomar las propiedades de un tercer objeto anodado, es importante poner el objeto padre primero y con dos puntos(:)
abrir llaves y colocamos colocamos el objeto hijo y ya estamos listos. 

*/

const {nombre, informacion, informacion:{fabricacion}} = producto;

console.log();

console.log(nombre);
console.log(informacion);
console.log(fabricacion);

//lo mismo sucede si queremos declarar la propiedad dentro de el sub-objeto. la diferencia es que en vez de poner los dos puntos
//dentro de las llaves simplemente ponemos la propiedad

const {informacion:{fabricacion:{pais}}}=producto;

console.log(pais);

