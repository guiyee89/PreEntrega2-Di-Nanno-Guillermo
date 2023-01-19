let total = 0;

function menuPrincipal() {
    let menu = prompt(" 1- Crea tu pack de viaje \n 2- Cerrar total de cuenta \n\n 3- Ir a Pagina Web")
    menu = parseInt(menu)

    if (menu == 1) {
        comprarDestino()

    } else if (menu == 2) {
        alert("El total de la cuenta es " + total)
        total = 0
        menuPrincipal()

    } else if (menu == 3) {
        alert("Adios!")

    } else {
        alert("Opcion Invalida")
        menuPrincipal()
    }
}

function comprarDestino() {

    alert("Seleccione su destino")
    let menuDestino = prompt(" 1- Sydney $1200 \n 2- Melbourne $1100 \n 3- Brisbane $1000 \n 4- Gold Coast $1000 \n\n 5- Volver")
    menuDestino = parseInt(menuDestino)

    if (menuDestino == 1) {
        total += 1200
        comprarServicio()
    } else if (menuDestino == 2) {
        total += 1100
        comprarServicio()

    } else if (menuDestino == 3 || menuDestino == 4) {
        total += 1000
        comprarServicio()

    } else if (menuDestino == 5) {
        menuPrincipal()

    } else {
        alert("Opcion Invalida")
        menuPrincipal()
    }

    return total
}

function comprarServicio() {

    alert("Seleccione uno o mas servicios")
    let menuServicio 
    
    do{
    menuServicio = parseInt(prompt(" 1- Equipaje $75\n 2- Seguro de viaje $100 \n 3- Atencion al Cliente $100 \n 4- Planificacion de viaje $125    \n\n  5- Cerrar total de cuenta \n\n 6- Volver al menu principal"))

        if (menuServicio == 1) {
            total += 75
            alert("Puede seguir seleccionando")

        } else if  (menuServicio == 2 || menuServicio == 3) {
            total += 100
            alert("Puede seguir seleccionando")

        } else if (menuServicio == 4) {
            total += 125
            alert("Puede seguir seleccionando")

        } else if (menuServicio == 6) {
            total
            menuPrincipal()

        } else if (menuServicio == 5) {
            alert("El total de la cuenta es " + total)
            total = 0;
            menuPrincipal()
        } else {
            alert("Opcion Invalida")
            comprarServicio()
        }

    } while (menuServicio != 5 )

    return total
}

menuPrincipal()
