import React from 'react';
import Header from './Header';
import Player from './Player';

class App extends React.Component {

  state = {
    players: [
      {
        name: "Axel",
        id: 1
      },
      {
        name: "Carlos",
        id: 2
      },
      {
        name: "Nelson",
        id: 3
      },
      {
        name: "Salem",
        id: 4
      }
    ]
  }

  /**
   * Takes a player ID and removes it from the players array, updating state 
   * @param {number} id 
   */
  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
        players: prevState.players.filter( p => p.id !== id )
      })
    );
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />

        {/* Player list */}
        { this.state.players.map( player => 
          <Player 
            playerName={player.name}
            playerScore={player.score}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            id={player.id}
          />
        )}
      </div>
    );
  }

}

export default App;
