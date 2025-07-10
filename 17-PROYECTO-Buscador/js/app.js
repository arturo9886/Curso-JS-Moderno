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
    console.log(datosBusqueda);
})

year.addEventListener('change',function(e){
    datosBusqueda.year = e.target.value;
    console.log(datosBusqueda);
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
        const autoHtml = document.createElement('p');
        autoHtml.textContent = `
        ${auto.marca}-
        ${auto.modelo}-
        ${auto.year}-
        ${auto.precio}-
        ${auto.puertas}-
        ${auto.color}-
        Transmicion: ${auto.transmision}

        `
        //insertar en el html
        resultado.appendChild(autoHtml);

    })
};

function llenarSelect(){
    for (let i=max; i>=min; i--){
        const opcion  = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i
        year.appendChild(opcion); //agrega las opciones del a;o al select.
    }
}