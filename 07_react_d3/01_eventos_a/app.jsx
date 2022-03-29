const width = 500;
const height = 500;

const App = () => {
  const movimientoRaton = (event) =>{
    console.log(event.clientX);
    console.log(event.clientY);
  };
  return (
  <svg width={width} height={height} onMouseMove={movimientoRaton}  >
      <circle cx={width/2.0} cy={height/2.0} r="30"> </circle>
  </svg>);
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);