//Funciones y parametros de los arrow fucntions

const aprendiendo = function (tecnologia,tecnologia2){
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo(`javascript`,`node.js`)

const aprendiendo2 = (tecnologia) => (`aprendiendo ${tecnologia}`)

console.log(aprendiendo2(`react`))

// cuando le pones un solo parametro a la funcion, o argumento, los parentesis no son necesarios, por ejemplo

const aprendiendo3 = tecnologia => ( `aprendiendo ${tecnologia}`)

console.log(aprendiendo3(`react native`));

// en caso de pasar mas parametros las parentesis son obligatorias.

const aprendiendo4 = (tecnologia,tecnologia2) => (`aprenidendo ${tecnologia} y ${tecnologia2}`)

console.log(aprendiendo4(`javascript moderno`,`react del bueno`))

