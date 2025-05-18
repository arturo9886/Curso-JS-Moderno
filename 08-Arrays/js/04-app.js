// agregar nuevos valores a los arrays de manera manual

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio' ]

// para agregarlo llamamos el array junto con la posicion en la que queremos que este y despues le asignamos el nuevo valor. EJM.

meses [0] = 'nuevo mes';

console.table(meses);

// como vemos aqui el valor 0 se reescribe con el nuevo valor y posicion.

// tambien puedes agregar una nueva posicion a lo ultimo,  porque dicha posicion no existe pero la estamos creando y le estamos dando un valor. 

// tambien hay que tener en cuenta que si creamos una posicion saltada, javascript pondra el valor del array en la posicion que pongamos, literalmente hara u salto a esa posicion
// y no creara posiciones en blanco. 


