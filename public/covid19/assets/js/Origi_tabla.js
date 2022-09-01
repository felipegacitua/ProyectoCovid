// para la table

// importar datos para construir la tabla
import  infoData  from "./jsApi.js";

// console.log('infoData data', await infoData())

// funcion que se exportara
const datostabla = async () => {
  let arregloData = await infoData();
  console.log('arregloData',arregloData)
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
    <td>${data[i].country}</td>
    <td>${data[i].deaths}</td>
    <td>${data[i].recovered}</td>
    <td>${data[i].active}</td>
    <td>${data[i].confirmed}</td>
    <td><!-- Button to Open the Modal -->
    <button type="button" id="${i}" class="btn btn-primary botonn" data-toggle="modal" data-target="#myModal">
      Open modal
    </button></td>
    </tr>`
  }
  //console.log('Cuerpo de la tabla', body)
  const impri= (e)=>{console.log("boton pulsado")
 let indexPieId= e.target.id;
console.log("El id es: ",e.target.id);
let paisInPie = data[indexPieId];
console.log(paisInPie);

const chartPie = (dataModelCountry) => {

  let chart = new CanvasJS.Chart("modalDetalle", {
    exportEnabled: false,
    animationEnabled: true,
    title: {
      text: `Estadísticas de Impacto Covid en ${dataModelCountry.country}`,
    },
    legend: {
      cursor: "pointer",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{name} - ({y})",
        //DATA POINTS RESULTOS ARRAY EN FUNCION INVOCADA
        dataPoints: [
          { name: "Fallecidos", y: `${dataModelCountry.deaths}`},
          { name: "Recuperados", y: `${dataModelCountry.recovered}`},
          { name: "Activos", y: `${dataModelCountry.active}`},
          { name: "Confirmados", y: `${dataModelCountry.confirmed}`},
        ],
      },
    ],
  });
  
  chart.render();
};

  chartPie(paisInPie);
}
document.getElementById('cuerpoTabla').innerHTML = body;
 document.querySelectorAll('.tablat .botonn').forEach((b)=>b.addEventListener('click',impri))
}
 //expostando datos de la tabla.
datostabla();