import React, { Component } from 'react';
import Chesspiece from './Chesspiece';
import './Board.css';
/*棋盘*/
class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        squares: Array(9).fill(''), //方格的状态存储
        xIsNext:true, 
      }
    }
    
    handClick(index) {
     const squares=this.state.squares.slice();
     if(this.win(squares)||squares[index] ){ //点过的方格和已经连成线的不再改变
       return;
     }
     squares[index]=this.state.xIsNext?'x':'O'; //设置被点击的方格的状态
     this.setState({
       squares:squares,
       xIsNext:!this.state.xIsNext
      });

    }
    checkArray(para,arr) {
        let processArr = arr.filter(function(value) {
            return value == para;
        });
    
        return processArr.length;  // 这里返回数组长度
      }
    win(squares) {//判断输赢情况
      const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ];
      
      const isClick= this.checkArray("",squares);
      if(isClick>4) return;
      for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(squares[a] && squares[a]===squares[b]&&
          squares[a]===squares[c]){
            return squares[a];
          }
      }
      return null;
    }
    render() {
      const winner=this.win(this.state.squares);
      let  status;
      if(winner){
        status='winner';
      }else{
        status='try again'
      }
      const blocks = [0,1,2,3,4,5,6,7,8]; 
      return (
        <div className='board'>
          {blocks.map((item, index)=>
          <Chesspiece key={item} value={this.state.squares[item]} onClick={() => this.handClick(index) }/>
          )}
        </div>
      )
    }
  }
  export default Board;
