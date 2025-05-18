// Buenas practicas. 

const autenticado = true;

if (usuario = true){
    console.log('usuario autenticado.')
}

// manera con buenas practicas

if (usuario){
    console.log('usuario autenticado correctamente')
}

// de esta manera se le quita el (=true) porque cuando no ponemos nada y solo la variable, se evalua su valor boleano. 

/////////////////////////////////////////////////////////////////////////////////////////

const puntaje = 500;

if(puntaje > 300){ // Aqui las dos condiciones no se podran cumplir, porque el if dara por cumplida la primera condicion siempre y cuando sea mayor a 300. 
    console.log('felicidades')
} else if(puntaje > 400){
    console.log('Excelente puntaje!')
}

// manera correcta. 

if (puntaje > 400){
    console.log('Tienes un puntaje Increible!')
}else if(puntaje > 300){
    console.log('tienes un buen puntaje.')
}

// aqui el codigo tiene logica ya que al puntase ser el mas alto pondra la cndicion mas also, y mientrasel puntaje vaya bajando asi lo ra haciendo las condicione.s 

// tabien hay personas que no quieren pues escribir if else, algo que se puede hacer es poner distintos if's en una funcion y poneles un return, para que el otro if no se ejecute. 


function revisarpuntajes(){
    if(puntaje > 400){
        console.log('Tienes un excelente puntaje!!!')
        return;
    }

    if(puntaje > 300){
        console.log('tienes una buena puntuacion');
        return;
    }

}   

revisarpuntajes()