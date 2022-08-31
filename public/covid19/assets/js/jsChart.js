<<<<<<< HEAD
import  infoData  from "./jsApi.js";

=======
let dataModelOrdenadaCortada=[
    {country: 'Germany', deaths: 136181, recovered: 22658600, active: 2154460, confirmed: 24949241},
    {country: 'France', deaths: 146262, recovered: 27163913, active: 1447590, confirmed: 28757765},
    {country: 'USA', deaths: 1021137, recovered: 80761761, active: 1392806, confirmed: 83175704},
    {country: 'Vietnam', deaths: 43044, recovered: 9267281, active: 1349033, confirmed: 10659358},
    {country: 'Italy', deaths: 163889, recovered: 15222419, active: 1199960, confirmed: 16586268},
    {country: 'Finland', deaths: 3939, recovered: 46000, active: 973074, confirmed: 1023013},
    {country: 'UK', deaths: 174912, recovered: 21313159, active: 550269, confirmed: 22038340},
    {country: 'Poland', deaths: 116069, recovered: 5334769, active: 546987, confirmed: 5997825},
    {country: 'Spain', deaths: 104668, recovered: 11446906, active: 401907, confirmed: 11953481},
    {country: 'Japan', deaths: 29631, recovered: 7517841, active: 377658, confirmed: 7925130}
]
//Guardará la cifra mayor de la data para cortar el gráfico
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
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
<<<<<<< HEAD
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
=======
  
  //Se busca la cifra mayor del data set que contruirà el gràfico de barra para establecer su tamaño mayor
  let buscandoMayorCifra=[...columnActive,...columnConfirmed,...columnDeaths,...columnRecovered];
  mayorCifra=Math.max(...buscandoMayorCifra.map(element => element.y));

  //Construye los datos necesarios para cada columna del objeto chart 
  let cActive= dataChartColumns(columnActive, "Activos");
  let cConfirmed= dataChartColumns(columnConfirmed, "Confirmados");
  let cDeaths= dataChartColumns(columnDeaths, "Fallecidos");
  let cRecovered= dataChartColumns(columnRecovered, "Recuperados");
  return [cActive, cConfirmed, cDeaths, cRecovered].flat()
}
//Construye toda la data para cada serie del grafico
const dataChartColumns=(dataCol, caseType)=>{
  let tamagnoF=15;
  let familiaF="Montserrat";
  let data=[{ type: "column",
              name: caseType,
              showInLegend: true,
              toolTipContent: `${caseType}`,//active, confirmed, deaths OR recovered
              indexLabel: caseType=="Activos" ? "{name}-({y})" : "",
              indexLabelFontSize: tamagnoF,
              indexLabelFontFamily: familiaF,
              dataPoints: dataCol}];
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
  return data;
}
//dataSet para construir grafico de barras de informaciòn de 10 paises con màs casos activos
let datasForChart = dataPChartColumns(paisesConMasActivos);

const chartColumn = (dataColumns) => {
<<<<<<< HEAD

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
=======
  let fuenteFamilia="Montserrat";
  let colorFuente="#363245";
  let colorLineas="#6b6488";
  let colorRojo = "#ff6384";
  let colorAmarillo = "#ffcd56";
  let colorGrisCeleste = "#c9cbcf";
  let colorCeleste = "#4bc0c0";
  let tamagnoTitulo=40;
  let tamagnoSubTitulo=30;
  let tamagnoPais=19;
  let tamagnoY=15;
  let tamagnoToolTip=10;
  let colorLineasHor="white";
  let bgColor="white";
  let colorFondo1="#fbfbfb";//251
  let colorFondo2="#fafafa";//250
  let colorFondo3="#f9f9f9";//249
  let colorFondo4="#f8f8f8";//248
  let colorFondo5="#f7f7f7";//247
  let colorFondo6="#f6f6f6";//246
  let colorFondo7="#f5f5f5";//245
  let colorFondo8="#f4f4f4";//244
  let colorFondo9="#f3f3f3";//243
  
  let colorGrisFondo = "#f0eded";
  //let color=;
  CanvasJS.addColorSet("Colors", [colorRojo, colorAmarillo, colorGrisCeleste, colorCeleste, "#90EE90"]);
  let chart = new CanvasJS.Chart("graficoDiv", 
  {
      height:800,
      exportEnabled: false,
      title: {
        text: `10 paises con más casos activos`,
        fontFamily: fuenteFamilia,
        fontColor: colorFuente,
        horizontalAlign:'left',
        fontSize: tamagnoTitulo,
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
      },
      subtitles: [
        {
          text: "Estadísticas de Impacto Covid",
<<<<<<< HEAD
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

=======
          fontFamily: fuenteFamilia,
          fontColor: colorFuente,
          fontSize: tamagnoSubTitulo
        }],
        axisY:{
          labelFontFamily: fuenteFamilia,
          labelFontColor: colorFuente,
          labelFontSize: tamagnoY,

          valueFormatString: "#,###,,.##M",
          
          tickLength: 10,
          gridColor:	colorLineasHor,
          lineThickness: 0.2,
          
          maximum: mayorCifra,
          scaleBreaks: {
            spacing: 20, //
            color:"white",//
            lineColor:"gray",//
            lineThickness:2,//
            type:"straight",//
            autoCalculate: true,
            collapsibleThreshold: "30%",
            maxNumberOfAutoBreaks: 3
          }
        },
      axisX:{
          //title: "Paises",
          labelFontFamily: fuenteFamilia,
          labelFontColor: colorFuente,
          labelFontSize: tamagnoPais,
          gridThickness: 0,
          tickLength: 10,
          stripLines:[
            {startValue:0.5, endValue:1.5, color:colorFondo1},
            {startValue:1.5, endValue:2.5, color:colorFondo2},
            {startValue:2.5, endValue:3.5, color:colorFondo3},
            {startValue:3.5, endValue:4.5, color:colorFondo4},
            {startValue:4.5, endValue:5.5, color:colorFondo5},
            {startValue:5.5, endValue:6.5, color:colorFondo6},
            {startValue:6.5, endValue:7.5, color:colorFondo7},
            {startValue:7.5, endValue:8.5, color:colorFondo8},
            {startValue:8.5, endValue:9.5, color:colorFondo9},
            ]
         },
      
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
      legend: {
        cursor: "pointer",
      },
      data: dataColumns,

      animationEnabled: true,
      animationDuration: 2000,
<<<<<<< HEAD

      colorSet: "Colors",
      backgroundColor: "#F5DEB3",

=======
      
      colorSet: "Colors",  //colores definidos al inicio de la funcion
      backgroundColor: bgColor,
      
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
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

<<<<<<< HEAD

//chartPie(dataModelOrdenadaCortada[0]);
//export {chartColumn, chartPie}
=======
chartColumn(datasForChart);
chartPie(dataModelOrdenadaCortada[0]);
export {chartColumn, chartPie}
>>>>>>> cbebd8443e0ba5827cf573f4d45092dbc9b060d0
