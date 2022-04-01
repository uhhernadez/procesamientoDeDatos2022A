const width = 500;
const height = 500;

const puntos = [
            {xx: 0, yy:0},
            {xx: 20, yy:100},
            {xx: 30, yy:200},
            {xx: 50, yy:-100},
          ];              

const Arco = ({radioInterior, radioExterior, angInicio, angFinal}) => {
  const arc = d3.arc()
      .innerRadius(radioInterior)
      .outerRadius(radioExterior)
      .startAngle(angInicio)
      .endAngle(angFinal);
  return (<path d={arc()}></path>);
};         

const Linea = ({xi, yi, xf, yf}) =>{
  const puntos = [
            {x: xi, y: yi},
            {x: xf, y: yf},
          ]; 
  const linea = d3.line()
              .x((p) => p.x)
              .y((p) => p.y);
  return (
      <path d={linea(puntos)} strokeWidth={13} fill="none" stroke="green" />     
  );             
};

ReactDOM.render(
  <svg width={width} height={height} >
    <g transform={`translate(${width/2},${height/2})`}>
      <circle cx={width/2.0} cy={height/2.0} r="30"> </circle>
      <Linea xi={0} yi={0} xf={-100} yf={-200} />
      <Linea xi={0} yi={0} xf={100} yf={200} />
      <Linea xi={0} yi={0} xf={-100} yf={200} />
      <Arco radioInterior={50} radioExterior={55} angInicio={0} angFinal={2*Math.PI} />
    </g>
  </svg>,
  document.getElementById('root')
);