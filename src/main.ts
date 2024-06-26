function actualizarTurno(incremento : number){

    const turnoActual = document.getElementById("turno-actual");
    if(turnoActual !== null && turnoActual !== undefined){
         const turnoActualNumero :number = Number(turnoActual.innerHTML);
         const turnoNuevo : number = turnoActualNumero + incremento;
         const avanzarTurno = document.getElementById("turno-actual");

            if(avanzarTurno !== null && avanzarTurno !== undefined && turnoNuevo >= 0) {
                avanzarTurno.innerHTML = turnoNuevo.toString().padStart(2, "0");
            }
    
    }
    
    
}

const botonSiguiente = document.getElementById("boton-siguiente");
if(botonSiguiente !== null && botonSiguiente !== undefined) {
    botonSiguiente.addEventListener("click", () => actualizarTurno(1));
}

const botonAnterior = document.getElementById("boton-anterior");
if(botonAnterior !== null && botonAnterior !== undefined) {
    botonAnterior.addEventListener("click", () => actualizarTurno(-1));
}


// Caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario//

function escribirNumero() {

    const turnoActual = document.getElementById("turno-actual");

    const turnoPersonalizado = document.getElementById("numero-personalizado");

    if(turnoPersonalizado instanceof HTMLInputElement) {
        const numeroPersonalizado = parseInt(turnoPersonalizado.value);
        if(
        turnoActual !== null &&
        turnoActual !== undefined &&
        numeroPersonalizado !== null &&
        numeroPersonalizado !== undefined ) {
        turnoActual.innerHTML = numeroPersonalizado.toString().padStart(2, "0");
        }
    
    
    }
}

const botonLlamar = document.getElementById("boton-llamar");
if(botonLlamar !== null && botonLlamar !== undefined) {
    botonLlamar.addEventListener("click",escribirNumero);
}
