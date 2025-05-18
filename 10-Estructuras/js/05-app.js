//SWITCHS.

//los switch se utilizan para poder tener diversas condiciones y elegir entre ellas. 

const metodoPago = 'pagar';

switch(metodoPago){ // en el parentesis del switch, lo que hace es que comparara el valor de la variable para realiar diversas acciones. 
    case 'pagar': 
        pagar();
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;
    case 'cheque':
        console.log('pagaste con cheque')
        break;
    default:
        console.log('no se ha seleccionado un metodo de pago.')
        break;



}

// los cases no son obligatorios, lo que es obligatorio es el default, el default es como un else.
// si ninguna condicion del case se efectua, el default se realizara.

// los switch pueden tambien realizar o ejecutar funciones

function pagar(){
    console.log('pagando...')
}

//no todo se limita a la consola.