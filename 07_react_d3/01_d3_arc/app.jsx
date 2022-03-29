const width = 500;
const height = 500;

const arc = d3.arc()
    .innerRadius(99)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(2*Math.PI);

const linea = d3.line()
              .x((p) => p.x)
              .y((p) => p.y);
const puntos = [
            {x: 0, y:0},
            {x: 20, y:100},
          ];              

console.log('😎⬇️');    
console.log(arc());
console.log('🤓⬇️');
console.log(linea(puntos));

ReactDOM.render(
  <svg width={width} height={height} >
    <g transform={`translate(${width/2},${height/2})`}>
      <circle cx={width/2.0} cy={height/2.0} r="30"> </circle>
      <path d={arc()}></path>
      <path d={linea(puntos)} strokeWidth={13} fill="none" stroke="red" />     
    </g>
  </svg>,
  document.getElementById('root')
);