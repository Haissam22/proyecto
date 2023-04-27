import { parametros,showCampers } from "./funciones.js";
export function filtrarCamper(){
    const resultado = campers
    .filter(filtrarNombre)
    .filter(filtrarEdad)
    .filter(filtrarPromedioMin)
    .filter(filtrarPromedioMax)
    .filter(filtrarNivelCampus)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertoTecnologia)
    .filter(buscardor);

    showCampers(resultado);
    if (resultado.length===0){
        notResult()
    }
}

export function filtrarNombre(camper){
    if(parametros.nombre){
        return camper.nombre === parametros.nombre;
    }
    return camper;
}

export function filtrarEdad(camper){
    if (parametros.edad){
        return camper.edad === parametros.edad;
    }
    return camper;
}

export function filtrarPromedioMin(camper){
    if (parametros.minPromedio){
        return camper.promedio >= parametros.minPromedio;
    }
    return camper;
}

export function filtrarPromedioMax(camper){
    if (parametros.maxPromedio){
        return camper.promedio <= parametros.maxPromedio;
    }
    return camper;
}

export function filtrarNivelCampus(camper){
    if (parametros.nivelCampus){
        return camper.nivelCampus === parametros.nivelCampus;
    }
    return camper;
}

export function filtrarNivelIngles(camper){
    if (parametros.nivelIngles){
        return camper.nivelIngles === parametros.nivelIngles;
    }
    return camper;
}

export function filtrarEspecialidad(camper){
    if (parametros.especialidad){
        return camper.especialidad === parametros.especialidad;
    }
    return camper;
}

export function filtrarExpertoTecnologia(camper){
    if (parametros.expertoTecnologia){
        return camper.expertoTecnologia === parametros.expertoTecnologia;
    }
    return camper;
}

export function buscardor(camper){
    if (parametros.buscar){
        return camper.nombre.includes(parametros.buscar)
    }
    return camper
}

export function notResult(){
    const contenedorAlert=document.querySelector('#tarjetas')
    const alert=document.createElement('p')
    alert.classList.add('alert')
    alert.innerHTML=`
    <div>
      <p>No se encuentra registrado</p>
    </div>
    `;

    contenedorAlert.appendChild(alert)

}