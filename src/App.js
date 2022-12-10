import React, { Component } from 'react';
import Table from './table';
import './style.css';

class App extends Component {
  
     
  state={
    character : [ {
      name:'dina',
      job:'it'
    },
    {
      name:'diina',
      job:'coole'
    }]
  }

  remove=(index)=>{
    const {character}=this.state
   let filter= character.filter((chata,i)=>{
      return i!==index
    });
    this.setState({character:filter});

  }
  
  render() {
    const {character} =this.state
  
    return (
      <div className="app">
        <h1> table </h1>
       <Table  characterData={character} remove={this.remove} />
      
      </div>
    );
  }
}
export default App;
