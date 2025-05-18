// diferencia entre function expression y declaration.

//declaracion de funcion (function declaration)
sumar();
function sumar () {
    console.log (2+2);
}

sumar();


// Excpresion de funcion (function expression)
const sumar2 = function() {
    console.log(2+2);
}


// la diferencia principal es que la de declaration puedes llamar la funcion antes  de crearla 
// function expression no puede utilizarse antes de crearse.

// esto sucede por el hoisting. 
// esto significa que javascript se ejecuta en dos vueltas, 
/*javascript lo que hace es que escanea el documento y detecta las variables que creara, esto es la etapa de creacion. busca las variables y las funciones y las registra.
entonces en la segunda vuelta, es la que ejecuta, eso significa que la variable o funcion esta registrada y empieza a ejecutar.*/


/*en el caso de la fucntion expression, no es una funcion declarada como tal, si noq eu esta declarada como variable y no puedes llamar una variable sin asignarle valor. */