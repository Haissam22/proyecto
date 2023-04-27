/* 5. Objeto con parametros para la busqueda */
import { rowModal,tbody } from "./selectores.js";
export const parametros = {
    buscar:"",
    nombre : "",
    edad : "",
    minPromedio : "",
    maxPromedio : "",
    nivelCampus : "",
    nivelIngles : "",
    especialidad : "",
    expertoTecnologia : ""
}

/* 8.1 Declaracion funcion de alto nivel */



export function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}

/* 4. Funcion para inyectar dinamicamente html */

export function showCampers(campers){
    //Selecciono el elemento html parent que contendra mis cards
    const contenedorTarjetas = document.querySelector('#tarjetas');
    //Limpiar
    limpiar()
    //html para cada camper
    campers.forEach((camper)=>{
        const camperHTML = document.createElement('p');
        //Destructuring
        const {id,imagen, nombre, detalle, especialidad, promedio,expertoTecnologia,direccion,telefono} = camper;
        camperHTML.innerHTML = `
        <div class="card" style="width: 20rem">
            <img src="img/${imagen}" class="card-img-top" alt="..." id="imgCard">
        <div class="card-body">
          <h5 class="card-title ">${nombre}</h5>
          <p class="card-text">${detalle}</p>
        </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${especialidad}</li>
            <a class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" imagen="img/${imagen}" promedio="${promedio}" especialidad="${especialidad}" nombre="${nombre}" expertoTecnologia="${expertoTecnologia}" telefono="${telefono}" direccion="${direccion}">Details</a>
            <a  class="btn btn-primary boton"  data-bs-target="#exampleModal1" imagen="${imagen}" promedio="${promedio}" especialidad="${especialidad}" nombre="${nombre}" expertoTecnologia="${expertoTecnologia}" telefono="${telefono}" direccion="${direccion}" detalle="${detalle}" id="${id}">Hire</a>
            </ul>
        </div>
        
        `
        console.log(id)
        contenedorTarjetas.appendChild(camperHTML);
        
    })
}


export function selectCamper(){
    
    const camperDetails=document.querySelector("#tarjetas")
    camperDetails.addEventListener('click',loadDetail);
    
}

export function loadDetail(e){
    const imagen=e.target.getAttribute("imagen")
    const promedio=e.target.getAttribute("promedio")
    const nombre=e.target.getAttribute("nombre")
    const especialidad=e.target.getAttribute("especialidad")
    const expertoTecnologia=e.target.getAttribute("expertoTecnologia")
    const phone=e.target.getAttribute("telefono")
    const adrees=e.target.getAttribute("direccion")

 const title=document.querySelector('#exampleModalLabel')
    
    
 title.textContent=`${nombre}`
 let color=""
 let reporte=""
 if(promedio>=4.5){
    color="green"
    reporte="esta acto para trabajar remoto"
 }else{
    color="red "
    reporte="No, aun no esta apto para trabajar remoto"
 }

 rowModal.innerHTML=`
 <td>
    <img src="${imagen}" alt="">
 </td>
 <td>
    <p>${promedio}</p>
 </td>
 <td>
    <p>${especialidad}</p>
 </td>
 <td>
    <p>${expertoTecnologia}</p>
 </td>
 <td>
    <p>${adrees}</p>
 </td>
 <td>
    <p>${phone}</p>
 </td>
 
 `;
 tbody.appendChild(rowModal)
 
} 
export function selectCards(e){
    e.preventDefault();
    if(e.target.classList.contains("boton")){
       
           const selectedCamper=e.target.parentElement.parentElement;
           console.log(selectedCamper);
           detail(selectedCamper)
    }
}

export function detail(selectedCamper){

    const camperDetail={


        imagen:selectedCamper.querySelector("img").src,
        nombre:selectedCamper.querySelector("h5").textContent,
        detalle:selectedCamper.querySelector("p"),
        id:selectedCamper.querySelector(".boton").getAttribute("id"),
        
        
    }
    console.log(camperDetail)
    cardsA.push(camperDetail)
    console.log(cardsA)

}