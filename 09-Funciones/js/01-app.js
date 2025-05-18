// funciones

// las funciones son una serie de procedimientros o instrucciones. 
//lo bueo de las funciones es que nos permite tener un codigo mas ordenado.
// las funciones son reutilizables. 

// puedes tener una funcion que envie datos a un servidor y utilizarla multiples veces.

//existen dos maneras para crear una fincion, la declaracion de funcion (function declaration.) y la expresion de funcion (function expression. 

// declaracion de funcion (function declara tion)

function sumar() {
    console.log (2+2);
}

sumar();

// lo bueno de las funciones que puedes dividir tu codigo en diferentes funciones para irla trabajando poco a poco.

// normalmente si quieres validar un formulario, lo puedes hacer con una funcion. 

// si quieres revisar que un usuario esta autenticado, lo haces con una funcion.

// segunda forma para hacer ua funcion, (function expression. )

 const sumar2 = function () {
    console.log(3+3);
 }

 sumar2();

//  Característica	Declaración de Función	Expresión de Función
// ¿Está hoisteada?	✅ Sí	❌ No
// ¿Se puede usar antes?	✅ Sí	❌ No
// Casos de uso comunes	Funciones normales	Callbacks, funciones internas