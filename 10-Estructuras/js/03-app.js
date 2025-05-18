//OPERADOR MAYOR QUE Y MENOR QUE.

const dinero = 500;

const totalApagar  = 300;

if(dinero>= totalApagar){
 console.log(`puedes pagar con los ${dinero} que tienes.`)
}else{
    console.log('fondos insuficientes.');
}

// el orden en los if es importantes.

// manera mas interactiva.

const dinero2 = parseInt(prompt('pon el dinero en la bolsa'));
const totalApagar2 = 500
if (dinero2  >= totalApagar2){
    alert(`Puedes pagar con tus ${dinero2} pesos`);
}
else{
    alert('no tienes dinero MARRANo!!!')
}