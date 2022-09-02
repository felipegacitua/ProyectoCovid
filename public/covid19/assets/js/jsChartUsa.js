import getData from "./dataUSA.js";
const datostabla = async () => {
  let dataEU = await getData();

const agnoC=(numDate)=>Math.floor(numDate/10000);
const mesC=(numDate)=>Math.floor(numDate/100)-((Math.floor(numDate/10000))*100)-1;
const diaC=(numDate)=>numDate-Math.floor(numDate/100)*100;
const sumaMes=(meses, fechaActual=new Date())=>{
  fechaActual.setMonth(date.getMonth() + meses)
  return fechaActual
}
window.onload = function () {
  let diaMayorFecha=Math.max(...dataEU.map(dia => dia.date));
  let mayorFecha= new Date(agnoC(diaMayorFecha),mesC(diaMayorFecha),diaC(diaMayorFecha));
  let diaMenorFecha=Math.min(...dataEU.map(dia => dia.date));
  let menorFecha= new Date(agnoC(diaMenorFecha),mesC(diaMenorFecha),diaC(diaMenorFecha));
    let columnasPositivos=[];
    let columnasNegativos=[];
    let columnasFallecidos=[];
    dataEU.forEach(function (datosCompletosDia) {
        let columnaPositivos={};
        let columnaNegativos={};
        let columnaFallecidos={};
        let agno=agnoC(datosCompletosDia.date);
        let mes=mesC(datosCompletosDia.date);
        let dia=diaC(datosCompletosDia.date);
        columnaPositivos.x=new Date(agno,mes,dia);
        columnaPositivos.y=datosCompletosDia.positive;
        columnaNegativos.x=new Date(agno,mes,dia);
        columnaNegativos.y=datosCompletosDia.negative;
        columnaFallecidos.x=new Date(agno,mes,dia);
        columnaFallecidos.y=datosCompletosDia.deaths;
        columnasPositivos.push(columnaPositivos);
        columnasNegativos.push(columnaNegativos);
        columnasFallecidos.push(columnaFallecidos);
    })
    //APARIENCIA
    let colorLinePositive="#BD3b1b";
    let colorLineNegative="#D8A800";
    let colorLineFallecidos="#4bc0c0";//"#36393c";
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
    let tamagnoMarker=4;
    let colorLineasHor="#b9d870";
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
    
    console.log("columnasPositivos: ",columnasPositivos);
    console.log("columnasNegativos: ",columnasNegativos);
    console.log("columnasFallecidos: ",columnasFallecidos);
    var chart = new CanvasJS.Chart("GraficoUSA", {
        height: 600,
        title: {
          text: "Historial EU por día",
          fontFamily: fuenteFamilia,
          fontColor: colorFuente,
          horizontalAlign:'left',
          fontSize: tamagnoTitulo,
        },
        toolTip:{
          enabled: true,
          contentFormatter:function (e) {
            let etiquetaTTip=" ";
            let nombreSerie="";
            for (let i = 0; i < e.entries.length; i++) {
              /* if(i == 1){
                nombreSerie="Casos Positivos";
              }else if(i==2){
                nombreSerie="Casos Negativos";
              }else{
                nombreSerie="Fallecidos";
              } */
              let fecha=e.entries[i].dataPoint.x;
              let agno=fecha.getFullYear()-(100*parseInt(fecha.getFullYear()/100));
              let mes=fecha.getMonth()+1;
              let dia=fecha.getDate();
              etiquetaTTip+=`${e.entries[i].dataPoint.y} (${dia}/${mes}/${agno})`; //NO PUEDO PONER SI ES POSITIVO, NEGATIVO, FALLECIDO,  
            }
            return etiquetaTTip
          }
        },
        subtitles:[
          {
            text: "Estadísticas de Impacto Covid",
            fontFamily: fuenteFamilia,
            fontColor: colorFuente,
            fontSize: tamagnoSubTitulo
          }
        ]
        ,
        axisX:{
            minimum: menorFecha,
            maximum: mayorFecha,
            valueFormatString: "DD-MM-YY",
            interval: 1,
            intervalType: "month",

            labelFontFamily: fuenteFamilia,
          labelFontColor: colorFuente,
          labelFontSize: tamagnoY,
          gridThickness: 0,
          tickLength: 10,
    
          },
          axisY:{
            interval: 10000000,

            labelFontFamily: fuenteFamilia,
          labelFontColor: colorFuente,
          labelFontSize: tamagnoY,

            valueFormatString: "#,###,,.##M",

            tickLength: 10,
          gridColor:	colorLineasHor,
          lineThickness: 0.2,

          },
        data: [
            {        
              type: "line",
              showInLegend: true, 
              name: "Casos Positivos",
              legendText: "Casos Positivos",
              color: colorLinePositive,
              dataPoints: columnasPositivos,
              markerType: "circle",
              markerSize: tamagnoMarker,
              markerColor: colorLinePositive,
            }
            ,
              {        
              type: "line",
              showInLegend: true, 
              name: "Casos Negativos",
              legendText: "Casos Negativos",
              color: colorLineNegative,
              dataPoints: columnasNegativos,
              markerType: "circle",
              markerSize: tamagnoMarker,
              markerColor: colorLineNegative,
            }
            ,
            {        
              type: "line",
              showInLegend: true, 
              name: "Fallecidos",
              legendText: "Fallecidos",
              color: colorLineFallecidos,
              dataPoints: columnasFallecidos,
              markerType: "circle",
              markerSize: tamagnoMarker,
              markerColor: colorLineFallecidos,
            }
            ],
      });
      chart.render();
      console.log(chart)
}
datostabla();
}