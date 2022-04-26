const width = 500;
const height = 500;

const csvUrl = 'db/casos_confirmados.csv';

const message = data => {
  let message = '';
  message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kB\n';
  message = message + data.length + ' rows\n';
  message = message + data.columns.length + ' columns';
  return message;
};

const App = () => {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return <pre>{data ? message(data) : 'Loading...'}</pre>;
};


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);