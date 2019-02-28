import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerComponent from './container/container.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerComponent></ContainerComponent>
      </div>
    );
  }
}

export default App;
