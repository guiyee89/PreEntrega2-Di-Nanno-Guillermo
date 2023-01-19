const packViajes = [
    {
        city: "Sydney",
        precio: 1200,
        servicio: {
            atencion: "incluye atencion al cliente 24/7",
            seguro: "seguro premium", precio: 100,
            seguro: "seguro low cost", precio: 50,
            equipaje: "equipaje premium", precio: 50,
            equipaje: "equipaje low cost", precio: 25,
            plan: "planificacion premium", precio: 75,
            plan: "planificacion low cost", precio: 40
        }
    },
    {
        city: "Melbourne",
        precio: 1100,
        servicio: {
            atencion: "incluye atencion al cliente 24/7",
            seguro: "seguro premium", precio: 100,
            seguro: "seguro low cost", precio: 50,
            equipaje: "equipaje premium", precio: 50,
            equipaje: "equipaje low cost", precio: 25,
            plan: "planificacion premium", precio: 75,
            plan: "planificacion low cost", precio: 40
        }
    },
    {
        city: "Brisbane",
        precio: 1000,
        servicio: {
            atencion: "incluye atencion al cliente 24/7",
            seguro: "seguro premium", precio: 100,
            seguro: "seguro low cost", precio: 50,
            equipaje: "equipaje premium", precio: 50,
            equipaje: "equipaje low cost", precio: 25,
            plan: "planificacion premium", precio: 75,
            plan: "planificacion low cost", precio: 40
        }
    },
    {
        city: "Gold Coast",
        precio: 950,
        servicio: {
            atencion: "incluye atencion al cliente 24/7",
            seguro: "seguro premium", precio: 100,
            seguro: "seguro low cost", precio: 50,
            equipaje: "equipaje premium", precio: 50,
            equipaje: "equipaje low cost", precio: 25,
            plan: "planificacion premium", precio: 75,
            plan: "planificacion low cost", precio: 40
        }
    },
];

const carrito = [];

let destino = prompt("¿Desea seleccionar un destino de viaje? Si o No")

while (destino != "si" && destino != "no") {
    alert("Respuesta invalida")
    destino = prompt("Por favor escriba Si o No")
}



if (destino == "si") {
    alert("Estos son los destinos y precios. Incluye servicios para seleccionar")
    let eleccionUsuario = packViajes.map((elDestino) => elDestino.city + " " + "$" + elDestino.precio);
    alert(eleccionUsuario.join(" - "))

} else if (destino == "no") {
    alert("Hasta pronto")

}


while (destino == "si") {

    let eleccionUsuario = prompt("Agrega un destino a tu carrito")

    let elijaDestino = packViajes.find((viaje) => viaje.city == eleccionUsuario)

    if (elijaDestino != undefined) {

        let unidades = parseInt(prompt("Cuantos pasajes desea comprar?"))
        
        carrito.push({ Ciudad: eleccionUsuario, Precio: elijaDestino.precio, Cantidad: unidades })

        if(unidades <=20  || !isNaN (unidades)){
            alert("ok")

        } else {
            alert("opcion invalida")
            unidades = parseInt(prompt("Cuantos pasajes desea comprar?"))
        }

    } else {
        alert("No tenemos esos destinos")
    }

    do {

        destino = prompt("Desea seguir comprando? Si o No")

        let pregunta = destino;

        if (pregunta === "no") {

            alert("Gracias por su compra. Adios!")
            carrito.forEach((carritoFinal) => {
                alert(`Destino: ${carritoFinal.Ciudad}, Precio: ${carritoFinal.Precio}, Pasajes: ${carritoFinal.Cantidad} `)
            })

        } else if (pregunta === "si") {
            alert("Siga comprando")

        } else {
            alert("Opcion invalida")
        }

    } while (destino != "si" && destino != "no")

}

const total = carrito.reduce((acumulador, numero) => acumulador + numero.Precio * numero.Cantidad, 0)
alert(`El total a pagar es: ${total}`)






