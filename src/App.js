import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import ScannerForm from './components/ScannerForm';
import Report from './components/Report';
import ReportItem from './components/ReportItem';
import { SyncBailHook } from 'tapable';

class App extends Component {


  constructor() {
    super();
    this.state = {
      input: '',
      inputURL: '',
      vtData: []
    }
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value})
  }

  onButtonSubmit = () => {
    this.setState({ inputURL: this.state.input })
    console.log('post sent');
    console.log(this.state.input);
  
    fetch('http://localhost:3000/api', {
        method: 'post',
        headers: {
          'Content-type': 'application/JSON'
        },
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(data => this.setState({ vtData: Object.entries(data.scans) }))
      .catch(err => console.log(err));


  }

  consoleVT = (e) => {
    console.log(this.state.vtData);
  }


  render() {
    return (
      <div>
        <Title />
        <ScannerForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <div>
          <button onClick={ this.consoleVT }>check VT</button>
          <Report vtData={this.state.vtData}/>

        </div>
      </div>

    );
  }
}

// Container
  // Report
  // Data viz

export default App;
