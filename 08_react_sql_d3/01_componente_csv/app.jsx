const width = 500;
const height = 500;

//const csvUrl = 'db/casos_confirmados.csv';
const csvUrl = 'db/Casos_Diarios_Municipio_Confirmados_20220407.csv';

const Datos = () => {
  const [datos, actualizaDatos ] = React.useState(null); 
  React.useEffect(() => {
    console.log('🦧🤓');
    d3.csv(csvUrl).then(data => {
      actualizaDatos(data[500]);
      console.log(data[500]);
    });
  }, []); 
  return (<text fill="black" x={width/2} y={height/2} > 
          {(datos)?datos.nombre + " " + datos.poblacion: "Cargando"} 
          </text>);
};

ReactDOM.render(
  <svg width={width} height={height} >
    <Datos />
  </svg>,
  document.getElementById('root')
);