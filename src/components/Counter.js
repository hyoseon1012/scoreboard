import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      players: 1,
      score: 0
    }
  }

  incrementScore = () => {
    console.log('ex03. increment', this); // lexical this; 자기 자신을 가르킨다.
    // this.state.score =1; // 화면 렌더링이 안됨.
    // this.setState(score:1_
    /*
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }
    });
    // 동일구문
    */
    this.setState(prevState => ({score: prevState.score + 1}));
  };

  decrementScore = () => {
    /*
    this.setState(prevState => {
      return {score: prevState.score - 1}
    });
    // 동일구문
    */
    this.setState(prevState => ({score: prevState.score - 1}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> +</button>
      </div>
    );
  }
}