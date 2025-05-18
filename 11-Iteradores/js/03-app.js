// EJERCICIO DEL FIZZ BUZZ

// tendras un grupo de elementos, todos los que sean multiplos de 3 deben de imrpimir en la consola la palabra fizz.
//los que son multiplos de 5 tienen que imprimir la palabra buzz
// y los que son multiplos de 3 y 5 deben de imprimir la consola fizz buzz.
 
for(let i = 0; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log(`numero:${i} es un FizzBuzz`);
    }
    else if(i%3===0){
            console.log(`numero:${i} es un fizz`);
    }
    else if(i%5===0){
        console.log(`numero:${i} es un Buzz`);
    }
    else{console.log(`numero${i}`)}

}


// es importante que en los if, la condicion menos comun sea la primera que se evalue.

