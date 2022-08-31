import infoData from "./jsApi";


  const comparadorOrdenAlfabeticoNotNull= ( a, b ) => {
    if ( a.country.toLowerCase() < b.country.toLowerCase()){
      return -1;
    }
    if ( a.country.toLowerCase() > b.country.toLowerCase()){
      return 1;
    }
    return 0;
  }
  const comparadorMenorAMayor= ( a, b ) => { //Dentro de sort ordena de menor a mayor
    if(a.active){//not null 
      if ( a.active > b.active){
        return -1;
      }
      if ( a.active < b.active){
        return 1;
      }
      return 0;
    }
  }
  //Usa sort sobre un objeto aplicando una funcion comparadora para ordenar
  const ordenador=(infoData,callbackComparador) => {
      infoData.sort(callbackComparador);
      return infoData
  };
  
  let dataModelOrdenada=ordenador(infoData,comparadorMenorAMayor);
  
  //Corta el array entre los elementos de los index indicados o de 0 a 10
  const cortadora=(dataSet,a=0,b=10)=>{
      let ds=dataSet.slice(a,b);
      return ds;
  }
  let dataModelOrdenadaCortada=cortadora(dataModelOrdenada,0,10);
export {dataModelOrdenadaCortada};