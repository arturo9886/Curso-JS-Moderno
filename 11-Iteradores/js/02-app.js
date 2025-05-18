// break and continue
// Break nos permite cortar el bucle y continue nos permite interceptar un elemento, identificarlo y aun asi continuar la ejecucion. 

// crear un for loop que al detectar un numero 5, termine su ejecucion. 

for (let i = 0; i<=10; i++){
    if(i===5){
        console.log(`numero cinco`)
        break
    }
    console.log(`numero:${i}`)
}

console.log(`-----------------------------------------------------------------------------`)

// ejemplo co un continue.

for (i = 0; i<=10; i++){
    if(i===5){
        console.log(`CINCO`);
        continue
    }
    console.log(`numero:${i}`)
}

// el continue lo que hace es que se ejecuta la condicion, y termina la iteracion en ese momento obviando cualquier codigo debajo del if, empezando la siguiente iteracion.

// Ejemplo de una oferta en una lista

console.log('------------------------------------------------------------------------------------')

const carrito =[

    {nombre: "monitor de 20'", precio:500},
    {nombre: "Television", precio:100},
    {nombre: "tablet", precio:200, descuento: true},
    {nombre: "Audifonos", precio:300},
    {nombre: "teclado", precio:400},
    {nombre: "celular", precio:700},
]


for (i = 0; i<= carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`el articulo ${carrito[i].nombre} esta en descuento.`)
        continue;
    }
    console.log(carrito[i].nombre)
}