import React, { Component } from 'react';

class Chesspiece extends React.Component {
    render() {
      return(
        <div className="chess" onClick={()=>this.props.onClick()}> 
          {this.props.value}
        </div>
      )
   }
 
 }

export default Chesspiece;