// ejemplos con multiples funciones que retornan valores.

// function sumar(a,b){
//     console.log(a+b)
// }

// sumar (1,2)

// y si queremos poner un resultado?

//podemos poner return, lo que hara es que retornara un valor. 

function sumar(a,b){
    return(a+b);
}

sumar(1,2);

// aqui podemos ver que no tenemos nada a que retornarle, lo que se hace es que creamos una variable con el resultado de la funcion. 

function suma(a,b){
    return (a+b);
}

const resultado = suma(1,2);

console.log(resultado)

// lo que estamos haciendo es que estamos retornando el valor a una variable.

let total = 0;

function agregarcarrito(precio){
    return total+=precio;
}

function calcularimpuesto(total){
    return (total*1.5);
}

total = agregarcarrito(300);
total = agregarcarrito(600); 

const totalpagar =calcularimpuesto(total);

console.log(`el valor total a pagar es de ${totalpagar} pesos`);



console.log(total);