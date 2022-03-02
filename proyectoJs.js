alert("Bienvenido a nuestro sitio, aqui podras encontrar: \n-Yerba \n-Mantecol \n-Dulce de leche \n-Alfajores")

/* let nombreProductoA = 'Yerba';
let stockProductoA = 10;
let precioProductoA = 75; */

/* // objeto
const productoA = {
    nombre: 'yerba',
    stock: 10,
    precio: 75
}  */

/* let nombreProductoB = 'Mantecol';
let stockProductoB = 8;
let precioProductoB = 30; */

/* // objeto
const productoB = {
    nombre: "mantecol",
    stock: 8,
    precio: 55
} */

/* let nombreProductoC = 'Dulce de leche';
let stockProductoC = 3;
let precioProductoC = 80; */

// objeto
/* const productoC = {
    nombre: "dulce de leche",
    stock: 3,
    precio: 80
} */

/* let nombreProductoD = 'Alfajores';
let stockProductoD = 10;
let precioProductoD = 30; */

// objeto
/* const productoD = {
    nombre: "alfajores",
    stock: 10,
    precio: 30
} */

// agregar los productos en un Array
const listaProductos = []

// funcion constructora para crear un nuevo objeto
function Producto (nombreValor, stockValor, precioValor){
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
}

// asi se crearia un nuevo objeto
const productoA = new Producto("yerba", 10, 75)
const productoB = new Producto("mantecol", 8, 55)
const productoC = new Producto("dulce de leche", 3, 80)
const productoD = new Producto("alfajores", 10, 30)
const productoE = new Producto("tita", 10, 20)

// asi se agregaria a la listaProductos
listaProductos.push(productoA)
listaProductos.push(productoB)
listaProductos.push(productoC)
listaProductos.push(productoD)
listaProductos.push(productoE)



let cantidadComprada;
let nombreCompra;
let totalCompra;

function compra (stock, precio, nombre){
        cantidadComprada = parseInt(prompt("Que cantidad de " + nombre + " quiere comprar?"));
        if(cantidadComprada <= stock) {
            stockSuficiente (stock, precio, nombre);
        }
        else if(isNaN(cantidadComprada)) {
            alert("Ingrese un numero")
            compra (stock, precio, nombre);
        }
        else {
            stockInsuficiente (stock);
            compra (stock, precio, nombre);
        }
}

function stockInsuficiente(stock) {
    alert("Puede comprar hasta " + stock + " unidades");
}

function stockSuficiente(stock, precio, nombre) {
    stock -= cantidadComprada;
    totalCompra = cantidadComprada * precio;
    console.log("te quedan " + stock + " " + nombre)
    alert("se han agregado " + cantidadComprada + " " + nombreCompra + " a su carrito, por un total de $" +  totalCompra)

}

while ((nombreCompra != productoA.nombre) && (nombreCompra != productoB.nombre) && (nombreCompra != productoC.nombre) &&  (nombreCompra != productoD.nombre) && (nombreCompra != productoE.nombre)){
    nombreCompra = prompt("Que producto desea comprar?").toLowerCase();
    if(nombreCompra == productoA.nombre) {
        compra(productoA.stock, productoA.precio, productoA.nombre);
    }
    else if(nombreCompra == productoB.nombre) {
        compra(productoB.stock, productoB.precio, productoB.nombre);
    }
    else if(nombreCompra == productoC.nombre) {
        compra(productoC.stock, productoC.precio, productoC.nombre);
        
    }
    else if(nombreCompra == productoD.nombre) {
        compra(productoD.stock, productoD.precio, productoD.nombre);        
    }
    else if(nombreCompra == "alfajor") {
        compra(productoD.stock, productoD.precio, productoD.nombre);        
    }
    else if(nombreCompra == productoE.nombre) {
        compra(productoE.stock, productoE.precio, productoE.nombre);        
    }
    else {
        alert("Asegurese de escribir bien el nombre del producto");
    }
}

// intento de pregunta si quiere comprar mas cosas
/* quiereMas = prompt("quiere comprar algo mas?");
if (quiereMas == "Si") {
} */

// for(const producto of listaProductos){
    
//     alert("recuerde que tenemos " + producto.nombre);
// }

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ]

const resultado = listaProductos.find((el) => el.nombre === "tita")

const resultado2 = listaProductos.filter((el) => el.nombre.includes(""))

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2.nombre) // undefined

// no esta del todo logrado
alert(resultado.nombre)
alert(resultado2.nombre)

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ]

// const nombres = cursos.map((el) => el.nombre)
// console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]
