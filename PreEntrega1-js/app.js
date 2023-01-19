let total = 0;

function menuPrincipal() {

    let menu;

    do {
        menu = prompt(" Menu\n\n 1- Comprar pack de viaje \n 2- Calcular total \n\n 3- Ir a sitio web")
        menu = parseInt(menu)
        switch (menu) {
            case 1: comprarDestino()
                break;
            case 2: alert("El monto total de tu Pack de Viajes es " + total + " USD")
                total = 0
                break;
            case 3: ("Nos vemos!")
                break;
            default: alert("Opcion Invalida")
        }
    }
    while (menu != 3)
}


function comprarDestino() {
    let menuDestino
    /* do { */
    alert("Selecciona tu destino")
    menuDestino = prompt(" 1- Sydney $1200 \n 2- Melbourne $1100 \n 3- Brisbane $1000 \n 4- Gold Coast $1000 \n\n 5- Volver al menu")
    menuDestino = parseInt(menuDestino)

    switch (menuDestino) {
        case 1: total += 1200
            comprarServicio()
            break
        case 2: total += 1100
            comprarServicio()
            break
        case 3: total += 1000
            comprarServicio()
            break
        case 4: total += 1000
            comprarServicio()
            break
        case 5: menuPrincipal()
            break
        default: alert("Opcion Invalida")
    }
    /* } while (menuDestino != 5) */
    return total;
}

function comprarServicio() {
    let menuServicio
    alert("Selecciona diferentes servicios")

    do {
        menuServicio = prompt(" 1- Equipaje $75 \n 2- Seguro de viaje $100 \n 3- Atencion al cliente $100 \n 4- Planificador de viajes $125 \n\n 5- Calcular total a pagar \n 6- Volver a menu principal y seguir comprando")
        menuServicio = parseInt(menuServicio)

        switch (menuServicio) {
            case 1: total += 75
                alert("Podes elegir mas")
                break
            case 2: total += 100
                alert("Podes elegir mas")
                break
            case 3: total += 100
                alert("Podes elegir mas")
                break
            case 4: total += 125
                alert("Podes elegir mas")
                break
            case 5: alert("Total a pagar es " + total + " USD")
                return total, total = 0
            case 6: return total

            default: alert("Opcion Invalida")
        }
    }
    while (menuServicio != 5)
    // return total
}


menuPrincipal()

