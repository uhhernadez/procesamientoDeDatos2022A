const width = 500;
const height = 500;

const movimientoRaton =  (event) => {
  console.log(event.clientX, event.clientY);
  console.log('😱');
};

const presionandoRaton = () => {
  console.log('😱');
};

ReactDOM.render(
  <svg width={width} height={height} onMouseMove={movimientoRaton} onMouseDown={presionandoRaton} >
      <circle cx={width/2.0} cy={height/2.0} r="30"> </circle>
  </svg>,
  document.getElementById('root')
);