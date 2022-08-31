import  infoData  from "./jsApi.js";

let mayorCifra;

const datosBarras = async () => {
  let data = await infoData();
  console.log('arregloData',data)

let ordenados = data.sort((a, b) => {
  if (a.active < b.active) {
    return 1;
  }
  if (a.active > b.active) {
    return -1;
  }
  return 0;
});
let paisesConMasActivos = ordenados.slice(0, 10);

const dataPChartColumns = (dataModelOrdenadaCortada) => {
  let columnActive = [];
  let columnConfirmed = [];
  let columnDeaths = [];
  let columnRecovered = [];
  //DIFERENCIA ENTRE MAP Y FOREACH PENDIENTE
  dataModelOrdenadaCortada.forEach(pais => {
    let colActive = { label: pais.country, indexLabel: `Casos Activos ${pais.country}`, indexLabelFontColor: "black", indexLabelOrientation: "vertical", indexLabelPlacement: "inside" };
    colActive.y = parseInt(pais.active);
    //indexLabel: "Higher", indexLabelFontColor: "black", indexLabelOrientation: "vertical", indexLabelPlacement: "inside"}
    colActive.y = parseInt(pais.active);
    let colConfirmed = { label: `${pais.country}` };
    colConfirmed.y = parseInt(pais.confirmed);
    let colDeaths = { label: `${pais.country}` };
    colDeaths.y = parseInt(pais.deaths);
    let colRecovered = { label: `${pais.country}` };
    colRecovered.y = parseInt(pais.recovered);
    columnActive.push(colActive);
    columnConfirmed.push(colConfirmed);
    columnDeaths.push(colDeaths);
    columnRecovered.push(colRecovered);
  });
  let buscandoMayorCifra = [...columnActive, ...columnConfirmed, ...columnDeaths, ...columnRecovered];
  mayorCifra = Math.max(...buscandoMayorCifra.map(o => o.y));

  let cActive = dataChartColumns(columnActive, "Activos");
  let cConfirmed = dataChartColumns(columnConfirmed, "Confirmados");
  let cDeaths = dataChartColumns(columnDeaths, "Fallecidos");
  let cRecovered = dataChartColumns(columnRecovered, "Recuperados");
  return [cActive, cConfirmed, cDeaths, cRecovered].flat()
}
const dataChartColumns = (dataCol, caseType) => {

  let data = [{
    type: "column",
    showInLegend: true,
    toolTipContent: `${caseType}`,//
    indexLabel: caseType == "Activos" ? "{name}-({y})" : "",
    dataPoints: dataCol
  }];
  // console.log(data);
  return data;
}
//dataSet para construir grafico de barras de informaciòn de 10 paises con màs casos activos
let datasForChart = dataPChartColumns(paisesConMasActivos);

const chartColumn = (dataColumns) => {

  CanvasJS.addColorSet("Colors",
    ["#1900ff",
      "#21B914",
      "#F1220D",
      "#F1F10B",
      "#90EE90"]);
  let chart = new CanvasJS.Chart("graficoDiv",
    {
      height: 700,
      exportEnabled: false,
      title: {
        text: `10 paises con más casos activos`,
        horizontalAlign: 'left',
        fontColor: "blue",
        fontSize: 50,
      },
      subtitles: [
        {
          text: "Estadísticas de Impacto Covid",
          fontColor: "blue",
          fontSize: 30
        }],
      axisY: {
        valueFormatString: "#,###,,.##M",

        interlacedColor: "#F8F1E4",
        tickLength: 10,
        lineColor: "grey",
        lineThickness: 0.2,

        maximum: mayorCifra,
        scaleBreaks: {
          spacing: 20, //5,10,20
          color: "white",//“white”	“green”,”#23EA23″
          lineColor: "gray",//“red”	“green”,”#23EA23″
          lineThickness: 2,//
          type: "straight",//“straight”, “waved”, “zigzag”
          autoCalculate: true,
          collapsibleThreshold: "60%",
          maxNumberOfAutoBreaks: 3
        }
      },
      axisX: {
        title: "Paises",
        gridThickness: 0,
        tickLength: 10,
        stripLines: [
          { starvalue: 0, endvalue: 9.5, color: "#F8F1E4" }
        ]
      },

      legend: {
        cursor: "pointer",
      },
      data: dataColumns,

      animationEnabled: true,
      animationDuration: 2000,

      colorSet: "Colors",
      backgroundColor: "#F5DEB3",

      dataPointMaxWidth: 40,
      dataPointMinWidth: 5,
    },

  );
  chart.render();
};
chartColumn(datasForChart);
}


const datosPie = async () => {
  let dataModelCountry = await infoData();
const chartPie = () => {

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
chartPie();
}
datosBarras();
datosPie


//chartPie(dataModelOrdenadaCortada[0]);
//export {chartColumn, chartPie}
