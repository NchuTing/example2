import React, { Component } from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {


  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={()=>this.props.onClick(i)} />;
  }

  render() {
    var myLen1=this.props.myLen
    var squares=this.props.squares
    var square=squares.map((val,index)=>{
       return this.renderSquare(index)
    })
    
    var arr=[]
    
    for(var i=0;i<myLen1;i++){
        var ind=i*myLen1
        var row=<div key={i} className="board-row">
                   {square.slice(ind,ind+myLen1)}
                </div>
                //console.log(row);
        arr.push(row)        
    }
    
    return (
      <div>
         {arr}
      </div>
    );
  }
}

export default Board