
const carrito = [];
let eleccionUsuario
let unidades
let carritoFinal
// PREGUNTA INICIAL
function init() {
    let destino
    destino = prompt("¿Desea seleccionar un destino de viaje? Si o No").toLowerCase();

    if (destino === "si") {
        alert("Estos son los destinos y precios. Incluye servicios para seleccionar")
        elegirDestino();

    } else if (destino === "no") {
        alert("Hasta pronto")

    } else {
        alert("Respuesta invalida. Por favor escriba Si o No")
        init()
    }

}
init()

// USUARIO ELIGE DESTINO

function elegirDestino() {

    let eleccionDestino = packViajes.map((elDestino) => elDestino.city + " " + "$" + elDestino.precio);
    alert(eleccionDestino.join(" - "))

    eleccionDestino = prompt("A que ciudad desea viajar?")/* .toLowerCase() no funciona aca */

    eleccionUsuario = packViajes.find((viaje) => viaje.city == eleccionDestino);

    if (eleccionUsuario != undefined) {
        seleccionarPasajes()

    } else {
        alert("Opcion Invalida. Escriba una de las ciudades del catalogo")
        elegirDestino()
    }

}

function seleccionarPasajes() {

    unidades = parseInt(prompt("Cuantos pasajes desea comprar?"))
    if (unidades >= 1 && unidades <= 10) {
        alert("Excelente! Que disfrute su viaje!")
        acumuladorCarrito()

    } else {
        alert("Opcion invalida. Hasta un maximo de 10 pasajes")
        seleccionarPasajes()
    }

}

function acumuladorCarrito() {
    let seguirComprando

    carrito.push({
        Ciudad: eleccionUsuario.city,
        Precio: eleccionUsuario.precio,
        Cantidad: unidades,
    })

    do {
        seguirComprando = prompt("Desea seguir comprando? Si o No")

        if (seguirComprando === "no") {

            alert("Gracias por su compra. Adios!")

            carrito.forEach((carritoFinal) => {
                alert(`Destino: ${carritoFinal.Ciudad}, Precio: ${carritoFinal.Precio}, Pasajes: ${carritoFinal.Cantidad} `)
            })

        } else if (seguirComprando == "si") {
            alert("Puede seguir seleccionando")
            elegirDestino()
        } else {
            alert("Opcion invalida")
        }

    } while (seguirComprando != "si" && seguirComprando != "no")


}

const total = carrito.reduce((acumulador, numero) => acumulador + numero.Precio * numero.Cantidad, 0)
alert(`El total a pagar es: ${total}`)






