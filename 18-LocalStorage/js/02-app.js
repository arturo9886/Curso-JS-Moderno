// obtener elementos del local storage.

/* Para agregar elementos al local storage utilizamos
    localStorage.setItem() 
*/

/*Para obtener los elementos del local storage utilizamos
    localStorage.getItem()
*/

const nombre = localStorage.getItem('nombre')

console.log(nombre)

const productoJson = localStorage.getItem('producto')
console.log(JSON.parse(productoJson))

const meses = localStorage.getItem('meses')
console.log(JSON.parse(meses))