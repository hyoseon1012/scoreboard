import React from 'react';
import {Counter} from "./Counter";

export const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter {...props} />
      {/*
      <Counter score={props.score} index={props.index} changeScore={props.changeScore} />
      */}
    </div>
  );
}