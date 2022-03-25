const width = 500;
const height = 500;

ReactDOM.render(
  <svg width={width} height={height} >
      <circle cx={width/2.0} cy={height/2.0} r="30"> </circle>
  </svg>,
  document.getElementById('root')
);