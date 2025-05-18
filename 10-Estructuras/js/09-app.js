// OPERADOR TERNARIO!!

const autenticado = true;

console.log( autenticado ? 'si esta autenticado' :  'no, no esta autenticado' )

//agregar una condicion adicional. 

const autenticado2 = true;
const puedePagar2 = true;

console.log( autenticado2 && puedePagar2 ? 'si puede pagar' :  'no, no esta autenticado' )

// si uno de esto es false, ire a la segunda resolucion. 



//Operador ternario con or.


const autenticado3 = true;
const puedePagar3 = true;


console.log( autenticado3 || puedePagar3 ? 'si puede pagar' :  'no, no esta autenticado' )


//algo no muy comun.

const efectivo = 700;
const credito = 1000;
const disponible = efectivo + credito;
const totalApagar = 600;

if (efectivo > totalApagar || credito > totalApagar || disponible > totalApagar){
    if (efectivo > totalApagar){
        console.log('si pagaste con efectivo')
    } else{
        console.log('otra forma de pago')
    }
}
else {
    console.log('fondos insuficientes.')
}


// a esto se le le llama un if anidado.

// le podemos poner un if anidado a un operadorternario. 

const autenticado4 = true;
const puedePagar4 = true;

console.log ( autenticado4 ?  puedePagar4 ? 'si esta autenticado y puede pagar' : 'si esta autenticado pero no puede pagar' : 'no no esta auteticado' );