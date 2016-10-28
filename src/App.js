import React, { Component } from 'react';

import './App.css';
import logo from '../public/light_logo.png'

var myLen=10 //棋盘长宽
var typeLen=5 //5子棋

import Board from './Board'
import calculateWinner from './calculateWinner'

class Game extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      history:[
        {
          squares: Array(myLen*myLen).fill(null)
        },
      ],
      xIsNext:true,
      stepNumber:0
    };
  }

  handleClick(i){
    var history=this.state.history
    var current=history[history.length - 1]
    var squares=current.squares.slice()
    var stepNumber=this.state.stepNumber

    if(calculateWinner(squares,myLen,typeLen)||squares[i]) return console.log('不能走了');
    if(stepNumber<(history.length - 1)) return console.log('不能走了 还在步骤里');

    squares[i]=this.state.xIsNext?"X":"O"
    console.log(history.concat([{
        squares:squares
      }]));
    this.setState((prevState) => ({
      history:history.concat([{
        squares:squares
      }]),
      xIsNext:!this.state.xIsNext,
      stepNumber:prevState.stepNumber+1
    }))
    
  }

  jumpTo(step){
     if(step==0){
        this.setState({
           history:[
              {
                squares: Array(myLen*myLen).fill(null)
              },
            ],
            xIsNext:true,
            stepNumber:0
        })
     }else{
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) ? false : true,
        });
     } 
     
  }

  render() {
    var history=this.state.history
    var current=history[this.state.stepNumber]
    var winner=calculateWinner(current.squares,myLen,typeLen);


    let status;
    if (winner) {
        status = '赢家: ' + winner;
      } else {
        status = '下一步: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    var moves=history.map((step,move)=>{
       var desc=move?"步骤 #" + move+ "-" + ((move % 2) ? "X" : "O") :"重新开始"
       return (
          <li key={move}>
             <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        )
    })


    return (
      <div className="container" >
        <h3 className="text-center">苏州想说信息科技 孙峰精心创作</h3>
        <h5 className="text-center">帮助大家在趣味玩乐的过程中领略React在处理复杂业务时的魅力和优势</h5>
        <div className="col-md-4 col-md-offset-4">
          <h6 className="text-center bg-primary">
              <a   href="http://www.qcloud.com ">
                <img src={logo}  alt="" />
              </a>
          </h6>
        </div>
      
           
          
        <div className="row" style={{marginTop:"100px"}}>
           <div className="col-md-9 col-md-offset-3">
            <div className="game">
              <div className="game-board">
                <Board myLen={myLen} 
                squares={current.squares}
                onClick={(i)=>this.handleClick(i)}  />
              </div>

              <div className="game-info">
                <div >{status}</div>
                <ul style={{marginTop:"20px"}}>{moves}</ul>
              </div>
            </div>
           </div>
        </div>  
     </div> 
    );
  }
}

export default Game

// ========================================







