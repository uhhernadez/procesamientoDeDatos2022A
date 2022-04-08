const width = 500;
const height = 500;

const Rectangulo = ({x, height, fcolor}) => {
  const [seleccionado, actualizarSeleccion] = React.useState(0);
  const onMouseEnter = () => {
    actualizarSeleccion(1);
  };
  const onMouseLeave = () => {
    actualizarSeleccion(0);
  }; 
  return (
  <rect width={30} height={height} 
        x={x} y={400-height} 
        fill={(seleccionado)? "#00FF00" : fcolor  } 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} />
  );
};

const App = () => {
  return (
  <svg width={width} height={height} >
    <Rectangulo x={50} height={150} fcolor="#fbe7c6" />
    <text x="50" y="420" fill="gray">150</text>
    
    <Rectangulo x={100} height={50} fcolor="#b4f8c8" />
    <text x="100" y="420" fill="gray">50</text>
    
    <Rectangulo x={150} height={250} fcolor="#a0e7e5" />
    <text x="150" y="420" fill="gray">250</text>
    
    <Rectangulo x={200} height={350} fcolor="#ffaebc" />
    <text x="200" y="420" fill="gray">350</text>
    
    <Rectangulo x={250} height={100} fcolor="#FF45B5" />
    <text x="250" y="420" fill="gray">100</text>

  </svg>);
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);