import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';

const width = 500;
const height = 500;

const csvUrl = 'https://raw.githubusercontent.com/uhhernadez/procesamientoDeDatos2022A/main/08_react_sql_d3/01_componente/db/Casos_Diarios_Municipio_Confirmados_20220407.csv';

const Datos = () => {
  const [datos, actualizaDatos ] = useState(null); 
  useEffect(() => {
    console.log('🦧🤓');
    csv(csvUrl).then(data => {
      actualizaDatos(data[500]);
      
      console.log(data[500]);
    });
  }, []); 
  return (<text fill="black" x={width/2} y={height/2} > 
          {(datos)?datos.nombre + " " + datos.poblacion: "Cargando"} 
          </text>);
};


function App() {
  return (
    <svg width={width} height={height} >
      <Datos />
    </svg>
  );
}

export default App;
