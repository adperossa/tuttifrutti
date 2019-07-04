import React from 'react';
import PlayerCounter from './PlayerCounter';

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        {props.playerName}
      </span>

      <PlayerCounter 
        score={props.playerScore}
        updateScore={props.updateScore}
        id={props.id}
        index={props.index}
      />
    </div>
  );
}

export default Player;