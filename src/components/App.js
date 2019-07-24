import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


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

  lastPlayerId = 4;

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
   * Adds a new player to the players array in app state
   * @param {string} name The text the user submitted in the <AddPlayerForm/> form
   */
  handleAddPlayer = (name) => {
    this.setState( prevState => ({
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.lastPlayerId += 1
        }
      ]
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

  /**
   * Searchs for the highest score among the players and sets a
   * global state stating which score is that
   */
  checkHighScore = () => {
    let highestScore = this.state.players.reduce( (acc, curr) => {
      if (curr.score > acc) { return curr.score; } else { return acc; }
    }, 0);

    if (highestScore > 0) {return highestScore;} else {return null;}

  }

  render() {
    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header 
            title="Tablero"
          />

          {/* Player list */}
          { this.state.players.map( (player, index) => 
            <Player 
              playerName={player.name}
              playerScore={player.score}
              key={player.id.toString()}
              removePlayer={this.handleRemovePlayer}
              updateScore={this.updateScore}
              checkHighScore={this.checkHighScore}
              isHighScore={this.checkHighScore() === player.score}
              id={player.id}
              index={index}
            />
          )}

          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }

}

export default App;
