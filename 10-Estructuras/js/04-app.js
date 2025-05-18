//ELSE IF

const dinero = 300;
const totalApagar = 500;
const tarjeta = false;
const cheque =  true

if(dinero >=totalApagar){
    console.log('puedes pagar')
}
else if(cheque){
    console.log('puede pagar, tiene un cheque...')
}
else if(tarjeta){
    console.log('puede pagar con la targjeta')
}
else{
    console.log('fondos insuficientes');
};

// es importante que si tienes un if o un else if va a realizar la primera condicion que se cumpla de la escitas.

// el else se ejecuta si la condicional anterior no se cumplio. 