import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Board from './Board.js';
import MyContainer from './MyContainer';

class App  extends React.Component{
  render() {
    return(
      <div>
        <Board />
      </div>    
    )
  }
}
export default App;



