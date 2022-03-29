const width = 500;
const height = 500;
const initialMousePosition = { x: width / 2, y: height / 2 };


const App = () => {
  const [mousePosition, setMousePosition] = React.useState(initialMousePosition);
  const movimientoRaton = React.useCallback(
   (event) =>{
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  },[setMousePosition]);
  return (
  <svg width={width} height={height} onMouseMove={movimientoRaton}  >
      <circle cx={mousePosition.x} cy={mousePosition.y} r="30"> </circle>
  </svg>);
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);