import React from 'react';
import './App.css';

const Header = (props) => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

class Counter extends React.Component {
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

const Player = (props) => (
  <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
    <span className="player-name">
        {props.name}
      </span>
    <Counter score={props.score}/>
  </div>
);

// 1. class 컴포넌트로 변경
class App extends React.Component {
  //  속성으로 변경
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4}
    ]
  }

  handleRemovePlayer = (id) => {
    /*
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
    */
    this.setState(prevState => ({players: prevState.players.filter(item => item.id !== id)}))
  }

  render() {
    return (
      <div className="scoreboard">
        { /* Header 를 호출하며 title, totalPlayers를 json 객체로 넘김 */}
        <Header title="My scoreboard" totalPlayers={this.state.players.length}/>
        {/* javascript expression을 사용하려면 중괄호 안에 넣어야함. */}
        {/* javascript map 사용을 위해 {}를 쓰고, JSX를 return */}
        {/* JSX를 return 하기때문에 값 세팅은 {} 표현식 사용 */}
        {/* 클래스 컴포넌트는 반드시 this */}
        {/* players값을 자식에게 */}
        {this.state.players.map(item => <Player id={item.id} name={item.name} score={item.score} key={item.id.toString()}
                                                removePlayer={this.handleRemovePlayer}/>)}
      </div>
    );
  }
}

// Let’s assign a key to our list items inside numbers.map() and fix the missing key issue.
// list 생성시 key 값을 필수도 주어야함. 아니면 아래와 같은 에러 발생
// Warning: Each child in a list should have a unique "key" prop.


export default App;
