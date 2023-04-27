console.log(campers);

import { nombreCamper,edadCamper,minPromedio,maxPromedio,nivelCamper,nivelIngles,especialidad,expertoTecnologia,buscar,cards,tbody,rowModal } from "./selectores.js";
import { parametros,limpiar,showCampers,selectCamper,selectCards,loadDetail,detail } from "./funciones.js";
import { filtrarCamper } from "./filtros.js";
//6. Selectors

/* 1. Llenar dinámicamente valores en select de nombres de Campers*/

campers.forEach((optionCamper)=>{
    const opcion = document.createElement('option');
    opcion.value = optionCamper.nombre;
    opcion.textContent = optionCamper.nombre;
    document.querySelector('#nombre').appendChild(opcion);
})

/* 2. Llenar el select con edades dentro del rango permitido por campus */

for (let n = 15 ; n < 45 ; n++){
    const opcion = document.createElement('option');
    opcion.value = n;
    opcion.textContent = n;
    document.querySelector('#edad').appendChild(opcion);
}

/* 7. Event Listeners Filtros */

nombreCamper.addEventListener('input', (e)=>{
    parametros.nombre = e.target.value;

    //8. Llamado de funcion de alto nivel
    filtrarCamper()
})

edadCamper.addEventListener('input', (e)=>{
    parametros.edad = Number(e.target.value);
    filtrarCamper();
})

minPromedio.addEventListener('input', (e)=>{
    parametros.minPromedio = parseFloat(e.target.value);
    filtrarCamper();
})

maxPromedio.addEventListener('input', (e)=>{
    parametros.maxPromedio = parseFloat(e.target.value);
    filtrarCamper();
    
})

nivelCamper.addEventListener('input', (e)=>{
    parametros.nivelCampus = e.target.value;
    filtrarCamper();
})

nivelIngles.addEventListener('input', (e)=>{
    parametros.nivelIngles = e.target.value;
    filtrarCamper();
})

especialidad.addEventListener('input', (e)=>{
    parametros.especialidad = e.target.value;
    filtrarCamper();
})

expertoTecnologia.addEventListener('input', (e)=>{
    parametros.expertoTecnologia = e.target.value;
    filtrarCamper();
})
buscar.addEventListener('input', (e)=>{
    parametros.buscar=e.target.value;
   console.log(parametros.buscar)
    filtrarCamper();
} )

/* 3. Event Listeners */

document.addEventListener('DOMContentLoaded', ()=>{

    showCampers(campers);

    selectCamper();
   
    
})


/*5.2 objeto con parametros de contratar*/
const contratado=[]

let cardsA=[]
/* listener */

cards.addEventListener('click', selectCards)






