//DO WHILE

let i = 0;

// do{
    
//     console.log(`numero: ${i}`);


//     i++; //INCREMENTO
// }while(i<10);  //CONDICION

//La diferencia de el DO while y el while, 

// El do While se ejecuta almenos una vez y despues comprueba,
//while confirma primero la condicion y despues se ejecuta.

console.log('------------------------------------------------------------------------------');

console.log(`prueba del fizzbuzz`)

do{
    if(i%3===0 && i%5===0){
        console.log(`numero: ${i} FIZZBUZZ!!!`);
    }
    else if(i%3===0){
        console.log(`numero: ${i} FIZZ`);
    }
    else if(i%5===0){
        console.log(`numero: ${i} BUZZ`);
    }
    else{
        console.log(`numero ${i}`)
    }



    i++
}while(i<=100)