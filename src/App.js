import React, { Component } from 'react';
import Table from './table';
import './style.css';

class App extends Component {
  render() {
    const Character=[
      {
        name:'dina',
        job:'it'
      },
      {
        name:'diina',
        job:'coole'
      }
    ]
    return (
      <div className="app">
        <h1> table </h1>
       <Table characterData={Character} />
      
      </div>
    );
  }
}
export default App;
