import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import ScannerForm from './components/ScannerForm';
import Report from './components/Report';
// import ReportItem from './components/ReportItem';
// import { SyncBailHook } from 'tapable';

class App extends Component {


  constructor() {
    super();
    this.state = {
      input: '',
      inputURL: '',
      vtData: [],
      email: '',
      emailData: [],
      reportState: ''
    }
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value})
  }

  onButtonSubmit = () => {
    this.setState({ inputURL: this.state.input })
    console.log('post sent');
    console.log(this.state.input);
  
    fetch('http://localhost:3000/url', {
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
      this.setState({ reportState: 'url' })
  }

  checkAccount = () => {
    fetch('http://localhost:3000/email', {
      method: 'post',
      headers: {
        'Content-type': 'application/JSON'
      },
      body: JSON.stringify({
        input: this.state.email
      })
    })
    .then(response => response.json())
    .then((data) => {
      if (data.length > 0) {
        console.log("account breached!")
        this.setState({ emailData: data })
      } else {
        console.log("account not breached!")
        this.setState({ emailData: { Account: "Not Breached!" }})    
      }
    })
    .catch(err => console.log("Error front end", err));
    this.setState({ reportState: 'email' })
  }

  accountChange = (e) => {
    this.setState({email: e.target.value })
    
  }

  consoleVT = (e) => {
    console.log("current state: ", this.state.reportState);
    console.log("email data", this.state.emailData);
    console.log("url data", this.state.vtData);
  }


  render() {
    return (
      <div>
        <Title />
        <ScannerForm 
          
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
          accountChange={this.accountChange}
          checkAccount={this.checkAccount}/>
        <div>
          
        </div>
        <div>
          <button onClick={ this.consoleVT }>check VT</button>
          <Report vtData={this.state.vtData} emailData={this.state.emailData} reportState={this.state.reportState}/>
        </div>
      </div>

    );
  }
}

// Container
  // File Upload
  // Password Check
  // Report
  // Data viz

export default App;
