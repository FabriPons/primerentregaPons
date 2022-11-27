let nombre;
let apellido;
let inasistencias;
let justificadas;
let i;

function alumno(){
    nombre = prompt("Ingrese nombre del alumno");
    apellido = prompt("Ingrese apellido del alumno");
    inasistencias = prompt("Ingrese faltas del alumno");
    justificadas = prompt("Ingrese faltas justificadas");
    alert (`${apellido} ${nombre} posee ${inasistencias} faltas de las cuales ${justificadas} son justifcadas`);
}

alumno()

let resta = inasistencias - justificadas 

if ( resta <= 28){
   alert(`La condición es de Alumno Regular.`)
}else{
   alert(`perdío la condición de Regular, deberá rendir examen general.`)
}

for (let i = 28; i<=28; i++){
    alert (`Mantienes tu condicion de regular mientras tus inasistencias sean menos de: ${i}`)
}

