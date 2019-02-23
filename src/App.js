import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

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
