//For in

const pendientes = [ 'tarea', 'comer', 'proyecto', 'estudiar javascript'];

for(let pendiente in pendientes){
    console.log(pendiente);
}

//FOR IN ITERA SOBRE OBJETOS.

const automovil = {
    modelo:'camaro',
    year:'1969',
    motor:'6.0',
}

for(let especificaciones in automovil){
    console.log(`${automovil[especificaciones]}`);
}

// En ECMASCRIPT 7 pusieron un nuevo iterado de objetos

for (let [llave,valor] of Object.entries(automovil)){
    console.log(valor)
    console.log(llave)
}

pendientes.forEach((tarea) => {
    console.log(tarea)
})