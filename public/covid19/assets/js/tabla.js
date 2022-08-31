// para la table

// importar datos para construir la tabla
import { infoData } from "./jsApi.js";

// funcion que se exportara
datostabla=(infoData)=>{

  // sort y funcion para odernar alfabeticamente por paises
 let data = infoData.sort((a, b) => {
  if (a.country == b.country) {
    return 0;
  }
  if (a.country < b.country) {
    return -1;
  }
  return 1;
});
  //creando la tabla que ira cambiando los paises.
 let body = ""
 for (let i = 0; i < data.length; i++) {      
    body+=`<tr>
    <td>${data[i].country}</td>
    <td>${data[i].deaths}</td>
    <td>${data[i].recovered}</td>
    <td>${data[i].active}</td>
    <td>${data[i].confirmed}</td>
    <td><!-- Button to Open the Modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Open modal
    </button></td>
    </tr>`
 }
 document.getElementById('cuerpoTabla').innerHTML = body
 }
//expostando datos de la tabla.
 export default infotabla;