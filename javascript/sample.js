const productoSelect = document.getElementById("product")
const cantidadInput = document.getElementById("number")

let carrito = [] // lista vacia

//lista que guarden los productos - objetos
let productos = [

    {
        id: 1,
        name: "Original Blend 200g",
        precio: 500,
    },

    {
        id: 2,
        name: "Original Blend 500g",
        precio: 900,
    },

    {
        id: 3,
        name: "Special Blend 200g",
        precio: 700,
    },

    {
        id: 4,
        name: "Special Blend 500g",
        precio: 1200,
    },
]

//Funciones 
function add (){

    let idProducto = productoSelect.value //id del producto seleccionado
    let productoComprado // variable donde guardamos las informaciones del producto encontrado
    //for para recorrer Productos e identificar cual es el producto seleccionado
    for (let index = 0; index < productos.length; index++) {
      if (idProducto == productos[index].id){
        productoComprado = productos[index]
      }
    }
    //DATOS GUARDADOS DE LA VENTA
    let venta = {
        producto: productoComprado,
        cantidad: cantidadInput.value 
    } 

    carrito.push(venta) // cargamos el carrito con las ventas
    display() // llamamos a la funcion para mostrar el mensaje
    
}

//FUNCION PARA MOSTRAR MENSAJE
function display (){
    let mensaje = "CARRITO \n"
    let subtotal = subtotalFuncion() // subtotal
    let envio = costoEnvio ()
    let total = totalCompra ()

     for (let index = 0; index < carrito.length; index++) {
        mensaje += "PRODUCTO:  " + carrito[index].producto.name + "    PRECIO:  "+ carrito[index].producto.precio + "   CANTIDAD:  " + carrito[index].cantidad + "\n"
     }
        alert (mensaje)
}
//FUNCION PARA OBTENER SUBTOTAL
function subtotalFuncion(){
    let subtotal = 0
    let envio = 0
    for (let index = 0; index < carrito.length; index++) {
        subtotal += carrito[index].producto.precio * carrito[index].cantidad
    }
    return subtotal
}
//FUCION PARA OBTENER COSTO DE ENVIO
function costoEnvio(){
    let subtotal2 = subtotalFuncion()
    let envio = 0
    if (subtotal2<2000){
        envio += 500
    }
    else if (subtotal2>2000 && subtotal2<3000){
        envio += 250
    }
    else if(subtotal2>=3000){
        envio += 0
    }
    return envio
}
// FUNCION PARA OBTENER EL TOTAL DE LA COMPRA CON COSTO DE ENVIO
function totalCompra(){
    let total = 0
    let subtotal= subtotalFuncion()
    let envio = costoEnvio ()
    total += subtotal + envio
    return total
}

//Esta funcion utilizamos para mostrar en ventana emergente detalles del TOTAL de compras
function display2(){
    let mensaje = "CARRITO \n"
    let subtotal = subtotalFuncion()
    let envio = costoEnvio ()
    let total = totalCompra ()

     for (let index = 0; index < carrito.length; index++) {
        mensaje += "PRODUCTO:  " + carrito[index].producto.name + "    PRECIO:  "+ carrito[index].producto.precio + "   CANTIDAD:  " + carrito[index].cantidad + "\n"
     }
        mensaje += "SUBTOTAL: " + subtotal + "\n"
        mensaje += "ENVIO: " + envio + "\n"
        mensaje += "TOTAL: " + total
        alert (mensaje)

} 

//FUNCION TOTAL 
function calc() {

    display2 ()

}

