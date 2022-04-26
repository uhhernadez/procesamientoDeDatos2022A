const width = 500;
const height = 500;

const csvUrl = 'db/casos_confirmados.csv';
/*
d3.csv(csvUrl).then(data => {
  let message = '';
  message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kB\n';
  message = message + data.length + ' rows\n';
  message = message + data.columns.length + ' columns';
  console.log(message);
});
*/

const Datos = () => {
  const [msg, actualizaMensaje] = React.useState("Mensaje prueba");
  return (<text fill="black" x={width/2} y={height/2} > Prueba </text>);
};

ReactDOM.render(
  <svg width={width} height={height} >
    <text fill="red" x={10} y={10} >Hello</text>
    <Datos />
  </svg>,
  document.getElementById('root')
);