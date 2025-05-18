// como unir 2 objetos.

const producto = {
    nombre:'Monitor de 20"',
    precio:300,
    disponible: true,
}

const medidas = {
    peso:"1kg",
    medida: "1m",
}


console.log(producto);
console.log(medidas);


const resultado = Object.assign (producto, medidas);

// de esta manera unimos dos objetos. 

console.log (resultado);

// hay otra manera de nosotros unir dos objetos.
// esta manera es el spread operato, de esta manera copiaremos el producto y copiaremos la medida y el resultado seran los dos objetor unidos. 

const resultado2 = {...producto,...medidas};

console.log (resultado2);