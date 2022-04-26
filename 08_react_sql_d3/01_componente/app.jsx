const width = 500;
const height = 500;

//const csvUrl = 'db/casos_confirmados.csv';
const csvUrl = 'db/Casos_Diarios_Municipio_Confirmados_20220407.csv';

const Datos = () => {
  const [msg, actualizaMensaje] = React.useState("Mensaje prueba");
  
  d3.csv(csvUrl).then(data => {
    let message = '';
    message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kB\n';
    message = message + data.length + ' rows\n';
    message = message + data.columns.length + ' columns';
    //console.log(message);
    actualizaMensaje(message);
  });

  return (<text fill="black" x={width/2} y={height/2} > {msg} </text>);
};

ReactDOM.render(
  <svg width={width} height={height} >
    <Datos />
  </svg>,
  document.getElementById('root')
);