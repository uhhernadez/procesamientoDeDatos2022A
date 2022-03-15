cx = 960;

class App extends React.Component {
    render() {
        return  <svg width={cx} height="500">
          <circle cx="480" cy="500" r="245"></circle>
        </svg> ;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));