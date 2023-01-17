const packViajes = [
    { nombre: "Harina", precio: 50 },
    { nombre: "Galletitas", precio: 100 },
    { nombre: "Cerveza", precio: 150 },
    { nombre: "Leche", precio: 200 },
    { nombre: "Gaseosa", precio: 250 },
];
let carrito = [];

let destino = prompt("Desea elegir un destino de viaje?  Si o No");

while (destino != "si" && destino != "no") {
    alert("Por favor ingrese Si o No")
    destino = prompt("Desea elegir un destino de viaje?  Si o No ")
}

if (destino == "si") {
    alert("A continuacion nuestra lista de destinos posibles")

} else if (destino == "no") {
    alert("Vayase a cagar entonces!")
}

while (destino != "no") {
    let viaje = prompt("Elija su destino  \n\n Sydney $1200 \n Melbourne $1100 \n Brisbane $1000 \n Gold Coast $950 \n\n Salir")
    
    

    if (viaje == "sydney" || viaje == "melbourne" || viaje == "brisbane" || viaje == "gold coast") {
       let productoEncontrado = packViajes.find((pack) => pack.nombre == viaje)

    } else if (viaje == "salir") {
        alert("Usted se lo pierde")
        break
    } else {
       viaje = destino
    }


    let unidades = parseInt(prompt("Cuantos boletos desea comprar?"))

    carrito.push({ viaje, unidades, precio })


    /* } else if (viaje == "salir") {
        alert("Usted se lo pierde")
        break
    } else {
        destino
    } */

    destino = prompt("Desea seguir eligiendo?  Si o No")

    while (destino != "si" && destino != "no") {
        alert("Por favor ingrese Si o No")
        destino = prompt("Desea comprar algun viaje?  Si o No ")
    }

    if (destino == "si") {
        alert("Puede seguir seleccionando")

    } else if (destino == "no") {
        alert("Muchas gracias por su compra")
    }


    while (destino === "no") {
        carrito.forEach((carritoFinal) => {
            alert(` Destino: ${carritoFinal.viaje} \n Unidades: ${carritoFinal.unidades} \n Total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }


}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar de los viajes y servicios es: ${total}`)


