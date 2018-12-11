import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    console.log(this);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="btn btn-danger">HELP</button>
          <Button
            tag="a"
            color="info"
            size="large"
            href="http://google.com"
            target="_blank"
          >Reactstrap</Button>
        </header>
      </div>
    );
  }
}

export default App;
