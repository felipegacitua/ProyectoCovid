
/////////////////////////////////AQUI Reemplazar con data estàtica
dataModelOrdenadaCortada=[
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
let mayorCifra;
//Construye sòlo datapoints de la data para cada serie del grafico
const dataPChartColumns=(dataModelOrdenadaCortada)=>{
    console.log(dataModelOrdenadaCortada);
  let columnActive=[];
  let columnConfirmed=[];
  let columnDeaths=[];
  let columnRecovered=[];
  //Recorre el arreglo para redistribuir la construccion de series de datos 
  dataModelOrdenadaCortada.forEach(pais => {
    let colActive={ label: pais.country,indexLabel: `Casos Activos ${pais.country}`, indexLabelFontColor: "black", indexLabelOrientation: "vertical", indexLabelPlacement: "inside"};
    colActive.y=parseInt(pais.active);
    columnActive.push(colActive);

    let colConfirmed={ label: `${pais.country}`};
    colConfirmed.y=parseInt(pais.confirmed);
    columnConfirmed.push(colConfirmed);

    let colDeaths={ label: `${pais.country}`};
    colDeaths.y=parseInt(pais.deaths);
    columnDeaths.push(colDeaths);
    
    let colRecovered={ label: `${pais.country}`};
    colRecovered.y=parseInt(pais.recovered);
    columnRecovered.push(colRecovered);
  });
  
  //Se busca la cifra mayor del data set que contruirà el gràfico de barra para establecer su tamaño mayor
  let buscandoMayorCifra=[...columnActive,...columnConfirmed,...columnDeaths,...columnRecovered];
  mayorCifra=Math.max(...buscandoMayorCifra.map(o => o.y));

  //
  let cActive= dataChartColumns(columnActive, "Activos");
  let cConfirmed= dataChartColumns(columnConfirmed, "Confirmados");
  let cDeaths= dataChartColumns(columnDeaths, "Fallecidos");
  let cRecovered= dataChartColumns(columnRecovered, "Recuperados");
  return [cActive, cConfirmed, cDeaths, cRecovered].flat()
}
//Construye toda la data para cada serie del grafico
const dataChartColumns=(dataCol, caseType)=>{
  let data=[{ type: "column",
              name: caseType,
              showInLegend: true,
              toolTipContent: `${caseType}`,//active, confirmed, deaths OR recovered
              indexLabel: caseType=="Activos" ? "{name}-({y})" : "",
              dataPoints: dataCol}];
  return data;
}
//dataSet para construir grafico de barras de informaciòn de 10 paises con màs casos activos
let datasForChart=dataPChartColumns(dataModelOrdenadaCortada);

const chartColumn = (dataColumns) => {
  CanvasJS.addColorSet("Colors",
                ["#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"]);
  let chart = new CanvasJS.Chart("graficoDiv", 
  {
      height:800,
      exportEnabled: false,
      title: {
        text: `10 paises con más casos activos`,
        //fontFamily:	“Calibri, Optima, Candara, Verdana, Geneva, sans-serif”
        horizontalAlign:'left',
        fontColor: "blue",
        fontSize: 50,
      },
      subtitles:[
        {
          text: "Estadísticas de Impacto Covid",
          //fontFamily:	“Calibri, Optima, Candara, Verdana, Geneva, sans-serif”
          fontColor: "blue",
          fontSize: 30
        }],
        axisY:{
          valueFormatString: "#,###,,.##M",
          
          interlacedColor: "#F8F1E4",
          tickLength: 10,
          lineColor:	"grey",
          lineThickness: 0.2,
          
          maximum: mayorCifra,
          scaleBreaks: {
            spacing: 20, //5,10,20
            color:"white",//“white”	“green”,”#23EA23″
            lineColor:"gray",//“red”	“green”,”#23EA23″
            lineThickness:2,//
            type:"straight",//“straight”, “waved”, “zigzag”
            autoCalculate: true,
            collapsibleThreshold: "60%",
            maxNumberOfAutoBreaks: 3
          }
        },
      axisX:{
          title: "Paises",
          gridThickness: 0,
          tickLength: 10,
          stripLines:[
            //desde el 2º al 10º pais
            {startValue:0.5, endValue:1.5, color:"magenta"},
            {startValue:1.5, endValue:2.5, color:"blue"},
            {startValue:2.5, endValue:3.5, color:"black"},
            {startValue:3.5, endValue:4.5, color:"red"},
            {startValue:4.5, endValue:5.5, color:"magenta"},
            {startValue:5.5, endValue:6.5, color:"blue"},
            {startValue:6.5, endValue:7.5, color:"black"},
            {startValue:7.5, endValue:8.5, color:"red"},
            {startValue:8.5, endValue:9.5, color:"magenta"},
            ]
         },
      
      legend: {
        cursor: "pointer",
      },
      data:dataColumns,

      animationEnabled: true,
      animationDuration: 2000,
      
      colorSet: "Colors",  //colores definidos al inicio de la funcion
      backgroundColor: "#F5DEB3",
      
      dataPointMaxWidth: 40,
      dataPointMinWidth: 5,
    },

  );
  chart.render();
};

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

chartColumn(datasForChart);
chartPie(dataModelOrdenadaCortada[0]);
export {chartColumn, chartPie}