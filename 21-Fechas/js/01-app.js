//las fechas residen en un objeto llamado date. 
//Entonces para poder utilizar las fechas, utilizamos date. 

const diaHoy = new Date(); //las fechas son objetos, si no pones date se crea una fecha solo colocando date.

//tambien se pueden crear de maneras especificas po ejemplo:

const dateCustom1 = new Date('12-26-1998');

//Tambien se puede mostrar de una forma como el mes en texto.

const dateCustom2 = new Date('December 26 1998')



let valor;
let valor2;
let valor3;

valor = diaHoy
valor2=dateCustom1
valor3 = dateCustom2

console.log(valor)
console.log(valor2)
console.log(valor3)

// lo importante de las fechas son los metodos que hay en las fechas. 

//saber el a;o actual
console.log('a;o actual')

console.log(valor.getFullYear())

//saber mes actual
console.log('mes actual')
console.log(valor.getMonth())

//tener los minutos
console.log('minutos')
console.log(valor.getMinutes())

//tener la hora
console.log('hora')
console.log(valor.getHours())

//Tener el tiempo actual / te muestra los milisegundos desde el 1970
console.log('tiempo actual')
console.log(valor.getTime())

/*los metodos de date se dividen en get y set. 

get se encarga de extraer el tiempo

set se encarga de modificar el valor del objeto de fecha.
*/

console.log('ejemplo con set')

valor.setFullYear(2020)

console.log(valor)

//si ponemos solo date nos devuelve un string. No podremos usar los metodos.