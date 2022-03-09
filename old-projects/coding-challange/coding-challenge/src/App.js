import React, { Component } from 'react'
import JsonTable from './json-fetch'
import '../src/App.css';

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <h1>Parses JSON into the DOM</h1>
        <JsonTable/>
      </div>
    );
  }
}

export default App;