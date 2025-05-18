// el While es u iterador muy comun, un while se ejecuta mientras una condicion sea verdadera. 

let i = 0;

// while (i<=10){ // CONDICION

//     console.log(`numero ${i}`);


//     i++        // INCREMENTO!!!

// }

// puedes hacer lo mismo con un for y un while.

console.log(`-------------------------------------------------------------------------`)

console.log(`prueba de fuzbizz con while.`)

while(i<=100){

    if(i%3===0 && i%5===0){
        console.log(`numero: ${i}:FUZZBIZZ!!!`)
    }
    else if(i%3===0){
        console.log(`numero: ${i}: FUZZ!!!`)
    }
    else if(i%5===0){
        console.log(`numero:${i}:BIZZ!!!`)
    }
    else{console.log(`numero: ${i}`)}



    i++
}