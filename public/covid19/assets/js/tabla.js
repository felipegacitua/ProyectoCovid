// para la table

// importar datos para construir la tabla
<<<<<<< HEAD
import  infoData  from "./jsApi.js";

// console.log('infoData data', await infoData())

// funcion que se exportara
const datostabla = async () => {
  let arregloData = await infoData();
  //console.log('arregloData',arregloData)
  // sort y funcion para odernar alfabeticamente por paises
  let data =  arregloData.sort((a, b) => {
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
    body += `<tr class="tablat">
=======
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
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
    <td>${data[i].country}</td>
    <td>${data[i].deaths}</td>
    <td>${data[i].recovered}</td>
    <td>${data[i].active}</td>
    <td>${data[i].confirmed}</td>
    <td><!-- Button to Open the Modal -->
<<<<<<< HEAD
    <button type="button" class="btn btn-primary botonn" data-toggle="modal" data-target="#myModal">
      Open modal
    </button></td>
    </tr>`
  }
  //console.log('Cuerpo de la tabla', body)
  document.getElementById('cuerpoTabla').innerHTML = body
}
//expostando datos de la tabla.
 datostabla();
=======
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Open modal
    </button></td>
    </tr>`
 }
 document.getElementById('cuerpoTabla').innerHTML = body
 }
//expostando datos de la tabla.
 export default infotabla;
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
