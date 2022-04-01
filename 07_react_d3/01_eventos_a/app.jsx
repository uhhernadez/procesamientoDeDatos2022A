const width = 500;
const height = 500;

const App = () => {
  const [posicionMouse, actualizarPosicion] = React.useState({ x:1 , y:1});
  const [radio, actualizaRadio] = React.useState(30);
  const [colorCirculo, actualizaColor] = React.useState("red");
  const movimientoRaton = (event) =>{
    //posicionMouse.x = event.clientX;
    //posicionMouse.y = event.clientY;
    //console.log(posicionMouse.x, posicionMouse.y);
    //console.log("x", event.clientX, " y ", event.clientY);
//    actualizarPosicion({x: event.clientX, y: event.clientY});
  };
  const presionaRaton = (event) => {
    console.log('👇🏻', radio);
    actualizaRadio(radio+1);
  };
  const sobreCirculo = () => {
    console.log('🫳🏿');
    actualizaColor("green");
  }
  return (
  <svg width={width} height={height} onMouseMove={movimientoRaton} onMouseDown={presionaRaton}  >
      <circle cx={posicionMouse.x} cy={posicionMouse.y} r={radio}> </circle>
      <circle cx={width/2} cy={height/2} r={50} fill={colorCirculo} onMouseOver={sobreCirculo}> </circle>
  </svg>);
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);