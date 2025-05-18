/// funciones finales para los objetoss.

const producto = {
    nombre: 'monitor de 20"',
    precio: 300,
    disponible: true,
}

// object.keys
// se utiliza para copnfirmar que el objeto tiene llaves, 
//las llaves de los objetos son los nombres de las propiedades del objetos. 

console.log (Object.keys(producto));

// object values
// esta es la funcion que nos permite ver los valores de los keys (nombre de las propiedades del objeto.)

console.log(Object.values(producto));

// object entries
// este es la funcion que muestra todo y toda la info que tienen las propiedades del objeto. 

console.log(Object.entries(producto));