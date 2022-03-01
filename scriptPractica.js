// script practica


const productoA = {
    nombre: 'yerba',
    stock: 10,
    precio: 75
} 

const productoB = {
    nombre: "mantecol",
    stock: 8,
    precio: 55
}


const productoC = {
    nombre: "dulce de leche",
    stock: 3,
    precio: 80
}

const productoD = {
    nombre: "alfajores",
    stock: 10,
    precio: 30
}

// funcion constructora para crear un nuevo objeto
function Producto (nombreValor, stockValor, precioValor){
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
}


// agregar los productos (objetos) en un Array
const listaProductos = [productoA, productoB, productoC, productoD]

/* 
const resultado = listaProductos.find((productoD) => productoD.nombre === "alfajores")
const resultado2 = listaProductos.find((el) => el.nombre === "Dulce")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined
 */
alert("hey")

const resultado = listaProductos.filter((productoE) => productoE.nombre === "alfajores")
// console.log(resultado)
const productoE = new Producto("tita", 10, 20)

//  asi se agregaria a la listaProductos
listaProductos.push(productoE)

const productos = [{ id: 1, producto: "Arroz" },
{ id: 2,  producto: "Fideo" },
{ id: 3,  producto: "Pan" }];


for (const producto of listaProductos) {
    console.log(producto.nombre);
    console.log(producto.stock);
    console.log(producto.precio);
}

