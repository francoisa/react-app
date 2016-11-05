import React from 'react';
import ReactDOM from 'react-dom';
import StringForm from './StringForm.js';
import ResultTable from './ResultTable.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setResponse = this.setResponse.bind(this);
    this.state = {string: '', hash: '', length: '0'};
  }

  setResponse(response) {
    this.setState({string: response.value, hash: response.hash, length: response.length});
  }

  render() {
    const string = this.state.string;
    const hash = this.state.hash;
    const length = this.state.length;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Enter a String and Get Some Information About it</h2>
        </div>
		    <StringForm
          onChange={this.setResponse} />
        <div className="row">&nbsp;</div>
        <ResultTable
          string={string}
          hash={hash}
          length={length}/>
      </div>
    );
  }
}

export default App;
