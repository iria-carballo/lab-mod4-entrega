// Avanzar al turno siguiente//
function escribirTurnoSiguiente() {
    const turnoActual = document.getElementById("turno-actual");

    const turnoActualTexto = turnoActual?.innerText;

    const turno = Number(turnoActualTexto);
 
    const turnoSiguiente = turno + 1;
    
    const avanzarTurno = document.getElementById("turno-actual");

    if(avanzarTurno !== null && avanzarTurno !== undefined) {
        avanzarTurno.innerText = turnoSiguiente.toString().padStart(2, "0");
    }
    
    
}

const botonSiguiente = document.getElementById("boton-siguiente");
botonSiguiente?.addEventListener("click", escribirTurnoSiguiente);

// Retroceder al turno anterior//

function escribirTurnoAnterior() {
    const turnoActual = document.getElementById("turno-actual");

    const turnoActualTexto = turnoActual?.innerText;

    const turno = Number(turnoActualTexto);
 
    const turnoAnterior = turno - 1;
    
    const retrocederTurno = document.getElementById("turno-actual");

    if(retrocederTurno !== null && retrocederTurno !== undefined) {
        retrocederTurno.innerText = turnoAnterior.toString().padStart(2, "0");
    }
    
    
}

const botonAnterior = document.getElementById("boton-anterior");
botonAnterior?.addEventListener("click", escribirTurnoAnterior);



// Caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario//

function escribirNumero() {
    const campoNumero = (document.getElementById("numero-personalizado") as HTMLInputElement)
    .value;

    const nuevoTurno = document.getElementById("turno-actual");

    if(nuevoTurno !== null && nuevoTurno !== undefined) {
    nuevoTurno.innerHTML = campoNumero.toString().padStart(2, "0");
    }
}

const botonLlamar = document.getElementById("boton-llamar");
botonLlamar?.addEventListener("click", escribirNumero);