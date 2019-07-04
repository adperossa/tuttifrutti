import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {

  state = {
    players: [
      {
        name: "Axel",
        score: 0,
        id: 1
      },
      {
        name: "Carlos",
        score: 0,
        id: 2
      },
      {
        name: "Nelson",
        score: 0,
        id: 3
      },
      {
        name: "Salem",
        score: 0,
        id: 4
      }
    ]
  }

  /**
   * Takes a player ID and removes it from the players array, updating state 
   * @param {number} id The player's ID
   */
  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      players: prevState.players.filter( p => p.id !== id )
    }));
  }

  /**
   * Changes the score of the player based on user input
   * @param {number} index The player's ID
   * @param {number} delta The amount to increase or decrease the score by
   * 
   */
  updateScore = (index, delta) => {
    if (delta < 0 && this.state.players[index].score <= 0) return;
    this.setState( prevState => {

      let newState = {
        players: prevState.players.map( p => {
          if (p !== prevState.players[index]) {
            return { ...p }
          } else {
            return {
              ...p,
              score: p.score += delta
            }
          }
        })
      }

      return newState;
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />

        {/* Player list */}
        { this.state.players.map( (player, index) => 
          <Player 
            playerName={player.name}
            playerScore={player.score}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            updateScore={this.updateScore}
            id={player.id}
            index={index}
          />
        )}
      </div>
    );
  }

}

export default App;
