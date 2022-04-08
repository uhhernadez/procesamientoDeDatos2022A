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
  const configs = [ 
        {x:50,  fcolor:"#fbe7c6", height:150 },
        {x:100, fcolor:"#b4f8c8", height:50 },
        {x:150, fcolor:"#a0e7e5", height:250 },
        {x:200, fcolor:"#ffaebc", height:100 },
        {x:250, fcolor:"#FF45B5", height:350 },
        {x:300,  fcolor:"#fbe7c6", height:150 },
        {x:350, fcolor:"#b4f8c8", height:50 },
        {x:400, fcolor:"#a0e7e5", height:250 },
        {x:450, fcolor:"#ffaebc", height:100 },
      ];
  return (
  <svg width={width} height={height} >
    { configs.map( (r,id) => <Rectangulo key={id.toString()} x={r.x} height={r.height} fcolor={r.fcolor} />)}
    { configs.map( (r,id) => <text key={"t"+id.toString()}x={r.x} y="420" fill="gray">{r.height}</text>)} 
  </svg>);
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);