/// CONSEJOS PARA ESCREIBIR CODIGOS USANDO BOOLEANOS.

const autenticado = true;

//MALA MANERA DE HACER UNA COMPARACION UTILIZANDO IF

console.log("///////////////MALA PRACTICA///////////////");

if(autenticado === true){
    console.log("si puedes ver netflix.")
} else{
    console.log("no no puedes ver netflix.")
}

/* LO QUE PASA ES QUE YA DE POR SI EL VALOR DE AUTENTICADO ES TRUE Y EL IF HARA LA COMPARACION SIN TENER QUE HACER LA 
COMPARACION MANUAL, ASI QUE ES MEJOR NO HACERLA MANUAL Y DEJAR QUE EL IF LA HAGA. */

// EJEMPLO DE LA MANERA UTILIZANDO BUENAS PRACTICAS.

console.log("///////////////buena practica///////////////");

if(autenticado){
    console.log("si puedes ver netflix.")
} else{
    console.log("no no puedes ver netflix.")
}

// Operador ternario, Es una condicional que se utiliza ya en aspectos mas avanzados. 

console.log("///////////////Operador Ternario///////////////");

console.log(autenticado ? 'si esta autenticado' : 'no esta autenticado');