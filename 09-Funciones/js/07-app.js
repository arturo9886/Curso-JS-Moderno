// como se comunican las funciones.

// es recomendado que las funciones se comuniquen unas con otras, es importante que las funciones esten divididas y llamen otras funciones.

iniciarapp()

function iniciarapp(){
    console.log(`iniciando app...`);

    segundafuncion();
}

function segundafuncion(){
    console.log(`desde la segunda funcion`);

    usuarioautenticado(`pablo`)

}


//podemos llamar una segunda funcion. dentro de una funcion

function usuarioautenticado(usuario){
    console.log(`autenticando usuario, esperere...`);
    console.log(`Usuario autenticado exitosamente: ${usuario}`)
}