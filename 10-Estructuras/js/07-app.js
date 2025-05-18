// OR se utiliza en if para que se cumpla una u otra condicion. 

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalApagar = 600;

if (efectivo > totalApagar || credito > totalApagar || disponible > totalApagar){
    console.log('Puedes pagar')
}
else {
    console.log('fondos insuficientes.')
}

// la diferencia de esta y el &&(and), es que el and busca que se cumplan ambas condiciones y el or almenos busca que una se cumpla.

// el or se puede utilizar para poder informar que todos los campos necesitan ser llenados. 