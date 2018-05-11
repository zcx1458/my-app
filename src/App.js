import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Board from './Board.js';


class App  extends React.Component{
  render(){
    return(
      <div>
        <div>欢迎</div>
        <Board />
      </div>
      
    )
  }
}

/*function Chesspiece(props){
  return(
    <div className="chess" onClick={props.onClick}> 
      {props.value}</div>
  )
}*/



export default App;
