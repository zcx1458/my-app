import React, { Component } from 'react';
import App from './App.js';
import Board from './Board.js';

class Chesspiece extends React.Component{
    render(){
     return(
       <div className="chess" onClick={()=>this.props.onClick()}> 
       {this.props.value}</div>
     )
   }
 
 }

 export default Chesspiece;