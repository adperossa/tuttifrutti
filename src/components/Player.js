import React, { PureComponent } from 'react';
import PlayerCounter from './PlayerCounter';

class Player extends PureComponent {
  render() {
    const { playerName, playerScore, removePlayer, updateScore, id, index } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
          {playerName}
        </span>
  
        <PlayerCounter 
          score={playerScore}
          updateScore={updateScore}
          index={index}
        />
      </div>
    );
  }
}

export default Player;