import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const width = 500;
const height = 500;

const csvUrl = 'db/Casos_Diarios_Municipio_Confirmados_20220407.csv';

const Datos = () => {
  const [datos, actualizaDatos ] = useState(null); 
  useEffect(() => {
    console.log('🦧🤓');
    d3.csv(csvUrl).then(data => {
      actualizaDatos(data[752]);
      console.log(data.columns);

      let casos_diarios = [ ];
      for ( let i = 3 ; i < data.columns.length; i++) {
        console.log(data[752][data.columns[i]]);       
        casos_diarios[i -3] = data[752][data.columns[i]];
      }
      console.log(casos_diarios);
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
