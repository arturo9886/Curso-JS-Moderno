const producto = {
    nombre: 'monitor de 10"',
    precio: 300,
    disponible: true,
};

console.log(producto);

// para poder acceder a las variables de un objeto utilizamos que se se llama una sintaxis de punto. 

//lo que hacemos es que llamamos a la consola y llamamos el objeto y agregamos un (.) y ponemos la variable exacta que queremos llamar.

//EJM:

console.log(producto.nombre);

// Existe otro metodo que es intre dos corchetes y dos comillas poner la variable que queremos llamar al lado del objeto.
//este objeto no es muy utilizado.

//EJM:

console.log(producto['nombre']);