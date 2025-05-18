// arrow function en el repodutor de musica

const reproductor = {

    cancion: `hola `,

    reproducir: id => console.log(`reproduciendo cancion numero ${id}`),

    pausar: ()=> console.log(`pausando...`),

    borrar: id => console.log(`borrando cancion numero ${id}`),

    crearplaylist: nombre => console.log(`creando la playlist con nombre: ${nombre}`),

    reproducirplaylist: nombre => console.log(`reproduciendo la playlist: ${nombre}`),

    borrarplaylist: nombre => console.log(`borrando la playlist: ${nombre}`),
    
    set nuevacancion (cancion){
        this.cancion = cancion;
        console.log(`anadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevacancion = `enter sandman`

reproductor.obtenerCancion // cuando se usa get no se necesita parentesis.

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearplaylist(`grasitas en spanish`);
reproductor.reproducirplaylist(`grasitas en spanish`);
reproductor.borrarplaylist(`grasistas en spanish`);

console.log(reproductor);

//junto a estos metodos de propiedad se acostumbra  ausar set y get. 

