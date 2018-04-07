import React, { Component } from 'react';
import Api from 'superagent';

import {BootstrapTable,
  TableHeaderColumn} from 'react-bootstrap-table';
import {Line as LineChart} from 'react-chartjs';

import logo from './image/logo.png';
import rice from './image/rice.svg';

import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.css';
import './dist/css/skins/_all-skins.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
