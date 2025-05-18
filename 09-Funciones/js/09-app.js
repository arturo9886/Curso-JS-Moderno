//Añadir funciones a un objeto.

const reproductor = {
    reproducir: function(id){
        console.log(`reproduciendo cancion numero ${id}`);
    },
    pausar: function(){
        console.log(`pausando...`);
    },
    borrar: function(id){
        console.log(`borrando cancion ${id}`)
    },
    crearplaylist: function(nombre){
        console.log(`creando la playlist ${nombre}`)
    },
    reproducirplaylist: function(nombre){
        console.log(`reproduciendo la playlist ${nombre}`)
    },
    borrarplaylist: function(nombre){
        console.log(`borrando la playlist ${nombre}`)
    }
    
    
}



reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearplaylist(`grasitas en spanish`);
reproductor.reproducirplaylist(`grasitas en spanish`);
reproductor.borrarplaylist(`grasistas en spanish`);

console.log(reproductor);