import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import ScannerForm from './components/ScannerForm';
import Report from './components/Report';

class App extends Component {


  constructor() {
    super();
    this.state = {
      input: '',
      inputURL: '',
      vtData: {}
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
      .then(data => console.log(data))
      .catch(err => console.log(err));
      
  }


  render() {
    return (
      <div>
        <Title />
        <ScannerForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <h1>{`${this.state.inputURL}`}</h1>
        <div>
          <Report />
        </div>
      </div>

    );
  }
}

// URL
// Container
  // Report
  // Data viz

export default App;
