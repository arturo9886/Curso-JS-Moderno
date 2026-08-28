//Estaremos trabajando con moment JS.

//cuando usamos new date, nos da un formato espeficico por ejemplo. 

//cuando registramos moment js tenemos un ventana con los distintos metodos. 

const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM do yyyy h:mm:ss a'))

//momentjs nos da muchas oportunidades de formatear las fechas a nuestro antojo. 

//podemos hacer  operaciones con el tiempo, por ejemplo.

console.log( moment().add(3, 'days').calendar())