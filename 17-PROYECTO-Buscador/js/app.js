//VARIABLES
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//contenedor de los resultados
const resultado = document.querySelector('#resultado')
const max = new Date().getFullYear();
const min = max - 15;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//EVENTOS
document.addEventListener('DOMContentLoaded',()=> {
    mostrarAutos();//Muestra los automoviles al cargar


    //Llena las opciones de a;o.
    llenarSelect()
})


//Event listener para los selectores de busqueda.
marca.addEventListener('change',function(e){
    datosBusqueda.marca = e.target.value;
    filtrarAuto()
})

year.addEventListener('change',function(e){
    datosBusqueda.year = parseInt(e.target.value);
    console.log(datosBusqueda);
    filtrarAuto()
})

minimo.addEventListener('change',function(e){
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda); 
})

maximo.addEventListener('change',function(e){
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda);
})

puertas.addEventListener('change',function(e){
    datosBusqueda.puertas = e.target.value;
    console.log(datosBusqueda)
})

transmision.addEventListener('change',function(e){
    datosBusqueda.transmision = e.target.value;
    console.log(datosBusqueda);
})

color.addEventListener('change',function(e){
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
})

//FUNCIONES
function mostrarAutos(){
    autos.forEach(function(auto){
    const autoHTML = document.createElement('p')
    autoHTML.textContent = 
    `
    ${auto.marca}-
    ${auto.year}-
    Precio: ${auto.precio}-
    Puertas: ${auto.puertas}-
    Transmisión: ${auto.transmision}-
    Color: ${auto.color}-
    `
    resultado.appendChild(autoHTML);
})
}

function llenarSelect(){
    for (let i=max; i>=min; i--){
        const opcion  = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i
        year.appendChild(opcion); //agrega las opciones del a;o al select.
    }
}

//Funcio que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)

    console.log(resultado)
}

function filtrarMarca(auto){
    if (datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
} 

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto
}