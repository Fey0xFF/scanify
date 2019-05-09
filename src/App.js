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
      reportState: '',
      password: '',
      passwordData: {}
    }
  }

 

  onURLSubmit = () => {
    this.setState({ reportState: 'url' })
    this.setState({ inputURL: this.state.input })
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
  }

  onAccountSubmit = () => {
    this.setState({ reportState: 'email' })
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
        this.setState({ emailData: data })
      } else {
        this.setState({ emailData: { Account: "Not Breached!" }})    
      }
    })
    .catch(err => console.log("Error front end", err));
  }

  onPasswordSubmit = () => {
    this.setState({ reportState: 'password' })
    fetch('http://localhost:3000/pass', {
      method: 'post',
      headers: {
        'Content-type': 'application/JSON'
      },
      body: JSON.stringify({
        input: this.state.password
      })
    })
    .then(response => response.json())
    .then(data => this.setState({ passwordData: data }))
    .catch(err => console.log("error", err));
  }

  onAccountChange = (e) => {
    this.setState({email: e.target.value })
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  consoleVT = (e) => {
    console.log("current state: ", this.state.reportState);
    console.log("email data", this.state.emailData);
    console.log("url data", this.state.vtData);
    console.log('email address', this.state.email);
    console.log('passwordData', this.state.passwordData);
  }


  render() {
    return (
      <div>
        <Title />
        <ScannerForm 
          onPasswordChange={this.onPasswordChange}
          onPasswordSubmit={this.onPasswordSubmit}
          onInputChange={this.onInputChange} 
          onURLSubmit={this.onURLSubmit}
          onAccountChange={this.onAccountChange}
          onAccountSubmit={this.onAccountSubmit}/>
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
