//METODOS PARA LOS NUMEROS//

const uno = "20";

const dos = "20.2";

const tres = "uno"

const cuatro = 20;

//METODO PARA CONVERTIR EL VALOR DE UN STRING A NUMERO.
//HAY QUE TENER EN CUENTA QUE PARA HACERLO ES NECESARIO QUE EL VALOR STRING SEA UN NUMERO.

/*valor convertido en numero*/ console.log(Number.parseInt(uno));
/*valor en string*/ console.log(uno);

// PARSEINT SOLO LO VA A CONVERTIR DIRECTAMENTE EN UN NUMERO ENTERO.

// PARA CONVERTIR ESTO EN UN NUMERO FLOTANTE O FRACCION SE USA parseFloat. EJM.

console.log(Number.parseFloat(dos));

//REVISAR SI UN NUMERO ES ENTERO O NO.

console.log(Number.isInteger(dos));

console.log(Number.isInteger(cuatro));

